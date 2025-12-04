import { Heart, Shield, Globe, Award } from 'lucide-react';

export default function ValuesSection() {
  const values = [
    {
      icon: Heart,
      title: "Pasión por Viajar",
      description: "Amamos lo que hacemos y queremos contagiarte esa pasión",
    },
    {
      icon: Shield,
      title: "Confianza",
      description: "Tu seguridad y tranquilidad son nuestra prioridad",
    },
    {
      icon: Globe,
      title: "Experiencia Global",
      description: "Conocemos cada destino en profundidad",
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Servicio premium en cada etapa de tu viaje",
    },
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Nuestros Valores</h2>
      <div className="flex flex-col gap-4">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="p-5 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 text-gray-800">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}