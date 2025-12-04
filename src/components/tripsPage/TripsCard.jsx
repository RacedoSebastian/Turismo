import { Calendar, MapPin, Users, Plane } from 'lucide-react';

export default function TripCard({ trip }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div className="p-0">
        <div className="relative">
          <img
            src={trip.image || "/placeholder.svg"}
            alt={trip.destination}
            className="w-full h-52 object-cover"
          />
          <div className="absolute top-3 left-3">
            <div className="bg-white/90 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {trip.duration}
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-1 text-gray-800">{trip.destination}</h3>
          <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
            <MapPin className="h-3 w-3 text-orange-500" />
            {trip.countries}
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4 text-orange-500" />
              <span className="font-medium">{trip.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="h-4 w-4 text-orange-500" />
              <span className="text-orange-500 font-medium">{trip.spots}</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-3 mb-4">
            <p className="text-xs text-gray-500 mb-2">Incluye:</p>
            <div className="flex flex-wrap gap-1">
              {trip.included.map((item, index) => (
                <div key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Precio por persona</p>
              <p className="text-2xl font-bold text-orange-500">{trip.price}</p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Inscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}