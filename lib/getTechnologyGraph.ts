import projectsData from '@/data/projects.json'

interface Node {
  id: string
  group: number
  type: 'category' | 'technology'
  value: number // Node size
}

interface Link {
  source: string
  target: string
  value: number
}

interface GraphData {
  nodes: Node[]
  links: Link[]
}

export function getTechnologyGraph(): GraphData {
  const nodes: Node[] = []
  const links: Link[] = []
  const techCategories = new Map<string, Set<string>>()

  // First pass: collect categories and their technologies
  projectsData.categories.forEach(category => {
    // Add category node
    nodes.push({
      id: category.label,
      group: 0, // Special group for categories
      type: 'category',
      value: 20 // Larger size for category nodes
    })

    // Collect unique technologies for this category
    const technologies = new Set<string>()
    category.projects.forEach(project => {
      project.technologies.forEach(tech => technologies.add(tech))
    })
    techCategories.set(category.label, technologies)
  })

  // Second pass: add technology nodes and create links
  techCategories.forEach((technologies, category) => {
    technologies.forEach(tech => {
      // Add technology node if it doesn't exist
      if (!nodes.find(n => n.id === tech)) {
        nodes.push({
          id: tech,
          group: 1, // Group for technologies
          type: 'technology',
          value: 10 // Smaller size for technology nodes
        })
      }

      // Create link from category to technology
      links.push({
        source: category,
        target: tech,
        value: 2
      })
    })
  })

  return { nodes, links }
}