export default function StatsSection() {
  return (
    <div className="px-4 -mt-20 relative z-10 mb-8">
      <div className="shadow-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden">
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-4xl font-black text-orange-500 mb-1">15+</div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Años</p>
            </div>
            <div className="text-center border-l border-r border-gray-200">
              <div className="text-4xl font-black text-orange-500 mb-1">50+</div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Destinos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-orange-500 mb-1">10K+</div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Viajeros</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}