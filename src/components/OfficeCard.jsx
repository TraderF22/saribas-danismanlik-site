import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const OfficeCard = ({ office, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Map */}
      <div className="h-64 bg-gray-200">
        <iframe
          src={office.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${office.name} Harita`}
        ></iframe>
      </div>

      {/* Office Info */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">{office.name}</h3>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#1e3a5f] flex-shrink-0 mt-1" />
            <p className="text-gray-700">{office.address}</p>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-[#1e3a5f] flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-700">
                <a
                  href={`tel:${office.phone.replace(/\s/g, '')}`}
                  className="hover:text-[#1e3a5f] transition-colors"
                >
                  {office.phone}
                </a>
              </p>
              {office.mobile && ( // Conditionally render mobile if it exists
                <p className="text-gray-700">
                  <a
                    href={`tel:${office.mobile.replace(/\s/g, '')}`}
                    className="hover:text-[#1e3a5f] transition-colors"
                  >
                    {office.mobile}
                  </a>
                </p>
              )}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Navigation className="w-5 h-5 text-[#1e3a5f] flex-shrink-0 mt-1" />
            <p className="text-gray-700">{office.directions}</p>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#1e3a5f] flex-shrink-0 mt-1" />
            <p className="text-gray-700">{office.workingHours}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OfficeCard;