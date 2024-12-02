import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const regionalLeaders = [
  {
    name: "Daniel Park",
    region: "North Campus",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    contact: "north@campus.edu"
  },
  {
    name: "Rachel Kim",
    region: "South Campus",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    contact: "south@campus.edu"
  },
  {
    name: "Jason Wong",
    region: "East Campus",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    contact: "east@campus.edu"
  }
]

export function RegionalLeadersList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {regionalLeaders.map((leader) => (
        <Card key={leader.name}>
          <CardHeader className="text-center">
            <Avatar className="h-24 w-24 mx-auto">
              <AvatarImage src={leader.image} alt={leader.name} />
              <AvatarFallback>{leader.name[0]}</AvatarFallback>
            </Avatar>
            <CardTitle className="mt-4">{leader.name}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg font-medium text-primary">{leader.region}</p>
            <p className="text-sm text-muted-foreground mt-2">{leader.contact}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}