import { Users, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <div className="px-4 py-8">
      <div className="bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300 text-white border border-transparent rounded-xl overflow-hidden relative shadow-2xl">
        <div className="p-8 relative z-10">
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-4 left-4 w-32 h-32 bg-orange-300/30 rounded-full blur-3xl" />

          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-5">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-3 leading-tight">
              Comienza Tu
              <br />
              Aventura Hoy
            </h2>
            <p className="text-white/90 mb-6 text-sm leading-relaxed">
              Únete a miles de viajeros satisfechos. Recibe ofertas exclusivas y consejos de viaje.
            </p>
            <button className="bg-white text-orange-600 hover:bg-white/95 w-full font-bold h-14 text-base shadow-xl rounded-md flex items-center justify-center">
              Contactar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}