import { Plane } from 'lucide-react';

export default function TripsHeader() {
  return (
    <div className="bg-gradient-to-br from-orange-500/10 to-orange-400/10 px-4 py-8">
      <div className="flex items-center gap-2 mb-2">
        <Plane className="h-6 w-6 text-orange-500" />
        <h1 className="text-3xl font-bold text-gray-800">Viajes por Venir</h1>
      </div>
      <p className="text-gray-500">Únete a nuestros grupos y vive aventuras increíbles</p>
    </div>
  );
}