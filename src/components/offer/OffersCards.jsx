import { Clock, Users, Calendar } from 'lucide-react';

export default function OfferCard({ offer }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div className="p-0">
        <div className="relative">
          <img
            src={offer.image || "/placeholder.svg"}
            alt={offer.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
            -{offer.discount} OFF
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{offer.title}</h3>
          <p className="text-sm text-gray-500 mb-4">{offer.description}</p>

          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4 text-orange-500" />
              <span>{offer.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="h-4 w-4 text-orange-500" />
              <span>{offer.people}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4 text-orange-500" />
              <span>Válido hasta {offer.validUntil}</span>
            </div>
          </div>

          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-sm text-gray-400 line-through">{offer.originalPrice}</p>
              <p className="text-2xl font-bold text-orange-500">{offer.discountPrice}</p>
            </div>
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors">
            Reservar Ahora
          </button>
        </div>
      </div>
    </div>
  );
}