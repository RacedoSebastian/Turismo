import { Instagram, Facebook } from 'lucide-react';


export default function RedesSection() {

    const redes = [
        { title: "@turismoApp", desc: "Seguinos en nuestros Instagram para ver nuestros viajes", icon: Instagram, color: "from-purple-600 to-orange-600" },
        { title: "Turismo App", desc: "Seguinos en nuestro Facebook para estar al dia", icon: Facebook, color: "from-blue-500 to-cyan-600" },
    ];


    return (
        <>
            <div className="px-4 py-12 bg-gradient-to-br from-orange-500/5 via-orange-400/5 to-orange-500/5">
      <div className="text-center mb-8">
        <div className="mb-3 bg-white text-orange-600 border border-orange-200 text-xs px-2.5 py-0.5 rounded-full inline-flex items-center font-medium">
          Seguinos en nuestras redes sociales
        </div>
        <h2 className="text-2xl md:text-3xl font-black mb-2">Viaja con nostros atravez de nuestras redes sociales</h2>
        <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
          No te pierdas de un solo momento atravez de nuestras redes
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {redes.map((redes, index) => (
          <div key={index} className="border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-white">
            <div className="p-5 text-center">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${redes.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <redes.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-base mb-1.5">{redes.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{redes.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
    )
}