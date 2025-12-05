import { TrendingUp, MapPin, Star, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedDestinations() {
  const featuredDestinations = [
    {
      id: 1,
      name: "Tilcara",
      country: "Argentina",
      image: "/tilcara.jpg",
      rating: 4.8,
      price: "120.000",
      discount: "20%",
      duration: "7 días",
      tag: "Aventura",
    },
    {
      id: 2,
      name: "Mar de Plata",
      country: "Argentina",
      image: "/playa.jpg",
      rating: 4.9,
      price: "180.000",
      discount: "15%",
      duration: "5 días",
      tag: "Playa",
    },
    {
      id: 3,
      name: "Cartaratas",
      country: "Argentina",
      image: "/cataratas.jpg",
      rating: 4.7,
      price: "150.000",
      discount: "25%",
      duration: "6 días",
      tag: "Cultural",
    },
  ];

  return (
    <div className="px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="mb-2 bg-orange-500/10 text-orange-500 border border-transparent text-xs px-2.5 py-0.5 rounded-full inline-flex items-center font-medium">
            <TrendingUp className="h-3 w-3 mr-1" />
            Más Populares
          </div>
          <h2 className="text-2xl md:text-3xl font-black">Destinos Destacados</h2>
          <p className="text-sm text-gray-500 mt-1">Escoge tu próxima aventura</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {featuredDestinations.map((destination) => (
          <div
            key={destination.id}
            className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gray-200 rounded-xl shadow-lg"
          >
            <div className="p-0">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute top-4 left-4 bg-orange-500 text-white border border-transparent font-bold shadow-lg text-xs px-2.5 py-0.5 rounded-full">
                  {destination.tag}
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white border border-transparent font-bold shadow-lg text-xs px-2.5 py-0.5 rounded-full">
                  -{destination.discount} OFF
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-black text-xl md:text-2xl mb-2">{destination.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-sm font-medium">
                      <MapPin className="h-4 w-4" />
                      {destination.country}
                    </div>
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold">{destination.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-orange-500/5 to-orange-400/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
                    <Calendar className="h-4 w-4 text-orange-500" />
                    {destination.duration}
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-0.5">Desde</p>
                    <p className="text-xl md:text-2xl font-black text-orange-500">${destination.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to="/trips" className="w-full mt-6 gap-2 bg-orange-500 hover:bg-orange-600 h-14 font-bold text-base text-white rounded-md flex items-center justify-center">
        Ver Todos los Destinos
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  );
}