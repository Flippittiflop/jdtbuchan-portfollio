"use client"

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { getTechnologyGraph } from '@/lib/getTechnologyGraph'

export function TechnologyGraph() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const updateGraph = () => {
      const svg = d3.select(svgRef.current)
      const width = window.innerWidth
      const height = window.innerHeight

      // Update SVG dimensions
      svg
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])

      // Clear previous graph
      svg.selectAll("*").remove()

      // Adjusted simulation forces for tighter clustering
      const simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id((d: any) => d.id).distance(150)) // Reduced distance
        .force("charge", d3.forceManyBody()
          .strength(-500) // Reduced repulsion
          .distanceMax(500)) // Limit the force's reach
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide().radius((d: any) => d.value * 1.5)) // Reduced collision radius
        .force("x", d3.forceX(width / 2).strength(0.1)) // Added x-positioning force
        .force("y", d3.forceY(height / 2).strength(0.1)) // Added y-positioning force

      const { nodes, links } = getTechnologyGraph()

      // Create the links with gradient effect
      const link = svg
        .append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke", "rgba(147, 197, 253, 0.3)")
        .attr("stroke-width", (d: any) => Math.sqrt(d.value))

      // Create the nodes with subtle glow effect
      const node = svg
        .append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", (d: any) => d.value)
        .attr("fill", (d: any) => d.type === 'category' ? 'rgba(255, 107, 107, 0.7)' : 'rgba(77, 171, 247, 0.7)')
        .attr("filter", "url(#glow)")
        .call(drag(simulation) as any)

      // Add labels with better visibility
      const label = svg
        .append("g")
        .attr("class", "labels")
        .selectAll("text")
        .data(nodes)
        .join("text")
        .text((d: any) => d.id)
        .attr("font-size", (d: any) => d.type === 'category' ? "16px" : "12px")
        .attr("font-weight", (d: any) => d.type === 'category' ? "bold" : "normal")
        .attr("fill", "rgba(55, 65, 81, 0.8)")
        .attr("dx", 12)
        .attr("dy", 4)

      // Add glow filter
      const defs = svg.append("defs")
      const filter = defs.append("filter")
        .attr("id", "glow")
        .attr("x", "-50%")
        .attr("y", "-50%")
        .attr("width", "200%")
        .attr("height", "200%")

      filter.append("feGaussianBlur")
        .attr("stdDeviation", "2")
        .attr("result", "coloredBlur")

      const feMerge = filter.append("feMerge")
      feMerge.append("feMergeNode")
        .attr("in", "coloredBlur")
      feMerge.append("feMergeNode")
        .attr("in", "SourceGraphic")

      // Set up the simulation handlers
      simulation.nodes(nodes as any).on("tick", ticked)
      simulation.force<d3.ForceLink<any, any>>("link")!.links(links)

      // Add simulation decay to stabilize faster
      simulation.alphaDecay(0.02)

      // Update positions on each tick with bounds checking
      function ticked() {
        // Add padding to keep nodes inside viewport
        const padding = 50
        
        node
          .attr("cx", (d: any) => Math.max(padding, Math.min(width - padding, d.x)))
          .attr("cy", (d: any) => Math.max(padding, Math.min(height - padding, d.y)))

        link
          .attr("x1", (d: any) => Math.max(padding, Math.min(width - padding, d.source.x)))
          .attr("y1", (d: any) => Math.max(padding, Math.min(height - padding, d.source.y)))
          .attr("x2", (d: any) => Math.max(padding, Math.min(width - padding, d.target.x)))
          .attr("y2", (d: any) => Math.max(padding, Math.min(height - padding, d.target.y)))

        label
          .attr("x", (d: any) => Math.max(padding, Math.min(width - padding, d.x)))
          .attr("y", (d: any) => Math.max(padding, Math.min(height - padding, d.y)))
      }

      // Drag handlers
      function drag(simulation: d3.Simulation<any, undefined>) {
        function dragstarted(event: any) {
          if (!event.active) simulation.alphaTarget(0.3).restart()
          event.subject.fx = event.subject.x
          event.subject.fy = event.subject.y
        }

        function dragged(event: any) {
          event.subject.fx = event.x
          event.subject.fy = event.y
        }

        function dragended(event: any) {
          if (!event.active) simulation.alphaTarget(0)
          event.subject.fx = null
          event.subject.fy = null
        }

        return d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      }
    }

    // Initial render
    updateGraph()

    // Update on window resize
    const handleResize = () => {
      updateGraph()
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 w-full h-full opacity-30 pointer-events-none"
      style={{
        zIndex: -1,
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.8), rgba(240, 240, 255, 0.8))'
      }}
    />
  )
}
