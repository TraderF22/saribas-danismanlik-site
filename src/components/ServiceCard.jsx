import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">{service.title}</h3>
      <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
      <Link
        to="/iletisim"
        className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold hover:gap-4 transition-all duration-300"
      >
        Detaylı Bilgi Al
        <ArrowRight className="w-5 h-5" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;