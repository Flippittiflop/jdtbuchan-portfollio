import Project from '@/components/Project'

export default function KlaraProject() {
  const projectData = {
    title: "Klara: E-commerce Platform",
    imageUrl: "https://example.com/klara-architecture-diagram.png", // Replace with actual diagram URL
    description: "Klara is a full-stack e-commerce solution built with React, Node.js, and MongoDB. It features a responsive design, user authentication, product catalog, shopping cart, and secure payment integration.",
    githubUrl: "https://github.com/yourusername/klara-ecommerce"
  }

  return <Project {...projectData} />
}