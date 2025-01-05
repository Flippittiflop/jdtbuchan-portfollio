interface ProjectDescriptionProps {
  description: string[]
}

export function ProjectDescription({ description }: ProjectDescriptionProps) {
  if (!description?.length) {
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
      <div className="space-y-4">
        {description.map((paragraph, index) => (
          <p key={index} className="text-gray-700">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}