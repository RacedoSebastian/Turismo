import OfferCards from './OffersCards';

export default function OffersGrid() {
  const offers = [
    {
      id: 1,
      title: "Mendoza - Viñedos",
      description: "3 días y 2 noches con degustaciones",
      image: "/mendoza.jpg",
      originalPrice: "$95.000",
      discountPrice: "$65.000",
      discount: "30%",
      duration: "3 días",
      people: "2-4 personas",
      validUntil: "15 Dic",
    },
    {
      id: 2,
      title: "Rio Negro - Bariloche",
      description: "7 días con vuelo y hotel incluido",
      image: "/bariloche.jpg",
      originalPrice: "$450.000",
      discountPrice: "$320.000",
      discount: "29%",
      duration: "7 días",
      people: "1-2 personas",
      validUntil: "20 Dic",
    },
    {
      id: 3,
      title: "Cataratas del Iguazú",
      description: "Pack aventura con excursiones",
      image: "/cataratas.jpg",
      originalPrice: "$85.000",
      discountPrice: "$59.000",
      discount: "31%",
      duration: "4 días",
      people: "2-6 personas",
      validUntil: "31 Dic",
    },
    {
      id: 4,
      title: "Cordoba - Carlos Paz",
      description: "All inclusive resort 5 estrellas",
      image: "/villa.jpg",
      originalPrice: "$380.000",
      discountPrice: "$270.000",
      discount: "29%",
      duration: "6 días",
      people: "2 personas",
      validUntil: "18 Dic",
    },
  ];

  return (
    <div className="px-4 py-6 flex flex-col gap-6">
      {offers.map((offer) => (
        <OfferCards key={offer.id} offer={offer} />
      ))}
    </div>
  );
}