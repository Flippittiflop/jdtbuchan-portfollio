import Link from 'next/link'

interface Project {
  name: string;
  link: string;
}

interface WorkExperienceProps {
  title: string;
  deliverable: string;
  projects: Project[];
  skills: string[];
}

export default function WorkExperience({ title, deliverable, projects, skills }: WorkExperienceProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Deliverable</h2>
        <p className="text-lg">{deliverable}</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          {projects.map((project, index) => (
            <li key={index}>
              <Link href={project.link} className="text-blue-600 hover:underline">
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills/Technologies</h2>
        <ul className="list-disc list-inside grid grid-cols-2 gap-2">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}