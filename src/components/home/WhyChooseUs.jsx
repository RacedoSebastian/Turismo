import { TrendingUp, Shield, Clock, Plane } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    { title: "Mejores Precios", desc: "Ofertas exclusivas todo el año", icon: TrendingUp, color: "from-green-500 to-emerald-600" },
    { title: "100% Seguro", desc: "Tu tranquilidad garantizada", icon: Shield, color: "from-blue-500 to-cyan-600" },
    { title: "15 Años", desc: "Experiencia que respalda", icon: Clock, color: "from-purple-500 to-pink-600" },
    { title: "A Tu Medida", desc: "Itinerarios personalizados", icon: Plane, color: "from-orange-500 to-red-600" },
  ];

  return (
    <div className="px-4 py-12 bg-gradient-to-br from-orange-500/5 via-orange-400/5 to-orange-500/5">
      <div className="text-center mb-8">
        <div className="mb-3 bg-white text-orange-600 border border-orange-200 text-xs px-2.5 py-0.5 rounded-full inline-flex items-center font-medium">
          ¿Por qué elegirnos?
        </div>
        <h2 className="text-2xl md:text-3xl font-black mb-2">Viaja con Confianza</h2>
        <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
          Más que una agencia, somos tus compañeros de aventura
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-white">
            <div className="p-5 text-center">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-base mb-1.5">{benefit.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{benefit.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}