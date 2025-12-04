import { Sparkles, ArrowRight, Tag } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src="/playa.jpg"
        alt="Destino paradisíaco"
        className="w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white/0" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
        <div className="mb-6 bg-orange-500/90 backdrop-blur-sm border border-transparent text-white text-sm px-4 py-1.5 rounded-full inline-flex items-center animate-pulse">
          <Sparkles className="h-4 w-4 mr-1.5" />
          Ofertas Especiales 2025
        </div>

        <h1 className="text-5xl md:text-6xl font-black mb-6 text-balance leading-[1.1] tracking-tight">
          Descubre
          <br />
          <span className="text-orange-500">ARGENTINA</span> con nosotros
        </h1>

        <p className="text-xl mb-10 text-pretty max-w-md text-white/90 font-medium leading-relaxed">
          Experiencias inolvidables a precios increíbles
        </p>

        {/* Botones en columna, grandes */}
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg h-14 shadow-2xl rounded-md flex items-center justify-center gap-2">
            Explorar Destinos
            <ArrowRight className="h-5 w-5" />
          </button>
          <button className="border-2 border-white text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm font-semibold h-14 rounded-md flex items-center justify-center gap-2">
            Ver Ofertas
            <Tag className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </div>
  );
}