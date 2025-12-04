export default function AboutHero() {
  return (
    <div className="relative h-64 overflow-hidden">
      <img
        src="/about.jpg"
        alt="Nuestro equipo"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-orange-400 text-center">Nosotros</h1>
      </div>
    </div>
  );
}