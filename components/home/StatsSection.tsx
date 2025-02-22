"use client"

import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

export function StatsSection() {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div 
      ref={statsRef}
      className="w-full py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {statsInView && (
          <>
            <div>
              <h3 className="text-4xl font-bold mb-2">
                <CountUp end={20} duration={2.5} />+
              </h3>
              <p className="text-indigo-100">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">
                <CountUp end={9} duration={2.5} />+
              </h3>
              <p className="text-indigo-100">Satisfied Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">
                <CountUp end={8} duration={2.5} />+
              </h3>
              <p className="text-indigo-100">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">
                <CountUp end={5} duration={2.5} />+
              </h3>
              <p className="text-indigo-100">Certifications</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
