import { LucideIcon } from "lucide-react"

interface Amenity {
  icon: LucideIcon
  name: string
  description: string
}

interface AmenitiesGridProps {
  amenities: Amenity[]
}

export default function AmenitiesGrid({ amenities }: AmenitiesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {amenities.map((amenity, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex flex-col items-center text-center">
            <amenity.icon className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">{amenity.name}</h3>
            <p className="text-gray-600">{amenity.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}