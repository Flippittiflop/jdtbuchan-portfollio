import { Badge } from "@/components/ui/badge"

interface ClientHeaderProps {
  client: {
    client: string
    title: string
    date: string
  }
}

export function ClientHeader({ client }: ClientHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-2">
        <h1 className="text-3xl font-bold">{client.client}</h1>
        <Badge variant="secondary">{client.date}</Badge>
      </div>
      <p className="text-xl text-gray-600">{client.title}</p>
    </div>
  )
}