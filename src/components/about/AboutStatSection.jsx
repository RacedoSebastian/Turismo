export default function AboutStatsSection() {
  const stats = [
    { number: "15+", label: "Años de experiencia" },
    { number: "50+", label: "Destinos" },
    { number: "10K+", label: "Viajeros felices" },
    { number: "98%", label: "Satisfacción" },
  ];

  return (
    <div className="px-4 py-6 bg-gray-100/30">
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="p-6 text-center">
              <p className="text-3xl font-bold text-orange-500 mb-1">{stat.number}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}