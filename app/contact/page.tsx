export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Contact</h1>
      <p className="text-lg mb-4">
        Feel free to reach out to me for collaborations, opportunities, or just to say hello!
      </p>
      <div className="space-y-4">
        <p><strong>Email:</strong> your.email@example.com</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/yourprofile</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/yourusername</a></p>
        {/* Add more contact information or a contact form here */}
      </div>
    </div>
  )
}