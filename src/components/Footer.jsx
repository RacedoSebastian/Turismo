import { MapPin, Phone, Mail, Clock, Globe, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-orange-500 to-orange-600 text-white pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Columna 1: Logo y descripción */}
        <div>
          <h3 className="text-2xl font-black mb-4">TurismoApp</h3>
          <p className="text-orange-100 mb-4">
            Llevándote a los destinos más increíbles del mundo con comodidad, seguridad y estilo.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-orange-100 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-orange-100 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-orange-100 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-orange-100 hover:text-white transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Columna 2: Contacto */}
        <div>
          <h4 className="text-lg font-bold mb-4">Contacto</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MapPin className="h-4 w-4 mt-1 mr-2 text-orange-200 flex-shrink-0" />
              <span className="text-orange-100">Av. Siempre Viva 123, Ciudad</span>
            </li>
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-orange-200 flex-shrink-0" />
              <span className="text-orange-100">+54 9 381 123-4567</span>
            </li>
            <li className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-orange-200 flex-shrink-0" />
              <span className="text-orange-100">info@turismoapp.com</span>
            </li>
            <li className="flex items-center">
              <Globe className="h-4 w-4 mr-2 text-orange-200 flex-shrink-0" />
              <span className="text-orange-100">www.turismoapp.com</span>
            </li>
          </ul>
        </div>

        {/* Columna 3: Horarios */}
        <div>
          <h4 className="text-lg font-bold mb-4">Horarios</h4>
          <ul className="space-y-2 text-orange-100">
            <li className="flex justify-between">
              <span>Lunes - Viernes</span>
              <span>9:00 - 18:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sábado</span>
              <span>10:00 - 14:00</span>
            </li>
            <li className="flex justify-between">
              <span>Domingo</span>
              <span>Cerrado</span>
            </li>
          </ul>
          <div className="mt-6 p-3 bg-orange-400/20 rounded-lg flex items-center">
            <Clock className="h-5 w-5 mr-2 text-orange-200" />
            <span className="text-sm">Atención online 24/7</span>
          </div>
     </div>       
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-orange-400/30 text-center text-sm text-orange-200">
        <p>© {new Date().getFullYear()} TurismoApp. Racedo Sebastián. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;