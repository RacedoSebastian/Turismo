import TripsCard from './TripsCard';

export default function TripsGrid() {
  const upcomingTrips = [
    {
      id: 1,
      destination: "Norte Argentino",
      countries: "Jujuy, Salta, Catamarca",
      image: "/norte.avif",
      date: "Enero 15-28, 2025",
      duration: "14 días",
      spots: "8 lugares disponibles",
      price: "$850.000",
      included: ["Hotels 4★", "Tours", "Desayunos"],
    },
    {
      id: 2,
      destination: "Sur Argentina",
      countries: "Tierra del Fuego, Neuquen, Santa Cruz",
      image: "/sur.jpg",
      date: "Febrero 10-20, 2025",
      duration: "11 días",
      spots: "12 lugares disponibles",
      price: "$1.200.000",
      included: ["Vuelos", "Todas las comidas"],
    },
    {
      id: 3,
      destination: "Buenos Aires",
      countries: "Merlo, La Plata, Palermo",
      image: "/ba.jpg",
      date: "Marzo 5-15, 2025",
      duration: "11 días",
      spots: "6 lugares disponibles",
      price: "$380.000",
      included: ["Transporte", "Alojamiento", "Excursiones", "Guía"],
    },
  ];

  return (
    <div className="px-4 py-6 flex flex-col gap-6">
      {upcomingTrips.map((trip) => (
        <TripsCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}