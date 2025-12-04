import ContactInfoCard from './ContactInfoCard';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactInfoSection() {
  const contactInfo = [
    { icon: Phone, title: "Teléfono", value: "+54 11 4567-8900" },
    { icon: Mail, title: "Email", value: "info@viajaya.com" },
    { icon: MapPin, title: "Dirección", value: "Av. Corrientes 1234, CABA" },
    { icon: Clock, title: "Horarios", value: "Lun-Vie 9:00 - 18:00" },
  ];

  return (
    <div className="px-4 py-6">
      <div className="flex flex-col gap-3 mb-6">
        {contactInfo.map((info, index) => (
          <ContactInfoCard
            key={index}
            icon={info.icon}
            title={info.title}
            value={info.value}
          />
        ))}
      </div>
    </div>
  );
}