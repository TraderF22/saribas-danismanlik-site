import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import OfficeCard from '@/components/OfficeCard';
import SEOHead from '@/components/SEOHead';

const ContactPage = () => {
  const offices = [
    {
      name: 'Çanakkale Ofis (Merkez)',
      address: 'Kepez Semti, Cumhuriyet Mah. Atatürk Cad. No:191/E Merkez/Çanakkale',
      phone: '0554 874 3308',
      mobile: '0505 352 4803',
      directions: 'BİM ve Pizza Vita ile aynı binadayız, Kepez Meydanı\'na 50 metre mesafede.',
      workingHours: 'Hafta içi: 09:30 – 16:30',
      // Tam koordinat bazlı ve doğru yerleştirme linki
      mapUrl: 'https://maps.google.com/maps?q=40.096356,26.394306&z=17&output=embed',
    },
    {
      name: 'Manisa Ofis',
      address: 'Ege Mahallesi, Borsa Caddesi, No:2/E, Şehzadeler/Manisa',
      phone: '0541 955 2375',
      mobile: null,
      directions: 'Kurşunlu Hanı - Borsa Caddesi üzerinde',
      workingHours: 'Hafta içi: 09:30 – 16:30',
      // Manisa için yeni adres ve pin odaklı güvenli link
      mapUrl: 'https://maps.google.com/maps?q=Ege+Mahallesi+Borsa+Caddesi+No:2/E+Şehzadeler+Manisa&output=embed',
    },
  ];

  const emailAddress = "saribas.danismanlik@gmail.com";

  return (
    <>
      <SEOHead
        title="İzmir, Manisa, Balıkesir & Çanakkale İletişim | Sarıbaş Danışmanlık"
        description="İzmir, Manisa, Balıkesir ve Çanakkale ofis hatlarımızla göç danışmanlığı, ikamet izni ve yabancı çalışma izni süreçleriniz için profesyonel destek alın. Hemen randevu oluşturun."
        keywords="izmir yabancı danışmanlık, manisa ikamet izni iletişim, çanakkale göç danışmanlığı, balıkesir yabancı danışmanlık, sarıbaş danışmanlık adres"
        canonicalUrl="https://saribasdanismanlik.com/iletisim"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bizimle İletişime Geçin</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              İzmir, Manisa, Balıkesir ve Çanakkale başta olmak üzere tüm bölgede yüz yüze ve online danışmanlık hizmeti sunuyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Danışmanlık Ofislerimiz
            </h2>
            <p className="text-gray-600 text-lg">
              Dosya süreçlerinizi profesyonel bir ortamda yönetmek için sizi ofislerimize bekliyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <OfficeCard key={index} office={office} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Hızlı Danışmanlık Formu
            </h2>
            <p className="text-gray-600 text-lg">
              Formu doldurun, uzman danışmanlarımız en kısa sürede size geri dönüş sağlasın.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 rounded-xl bg-gray-50"
            >
              <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Bize Telefonla Ulaşın</h3>
              <div className="space-y-2">
                <p className="text-gray-600 font-semibold">
                  İzmir & Manisa: <a href="tel:+905419552375" className="hover:text-blue-700 transition-colors">0541 955 2375</a>
                </p>
                <p className="text-gray-600 font-semibold">
                  Çanakkale & Balıkesir: <a href="tel:+905548743308" className="hover:text-blue-700 transition-colors">0554 874 3308</a>
                </p>
                <p className="text-gray-600 font-semibold">
                  Mobil / WhatsApp: <a href="tel:+905053524803" className="hover:text-blue-700 transition-colors">0505 352 4803</a>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 rounded-xl bg-gray-50"
            >
              <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">E-posta Gönderin</h3>
              <p className="text-gray-600">
                Resmi evraklar ve detaylı bilgi için:<br />
                <a href={`mailto:${emailAddress}`} className="font-semibold hover:text-blue-700 transition-colors">
                  {emailAddress}
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 rounded-xl bg-gray-50"
            >
              <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Çalışma Saatleri</h3>
              <p className="text-gray-600 font-semibold">Hafta içi: 09:30 – 16:30</p>
              <p className="text-gray-600">Hafta sonu randevularımız için lütfen önceden iletişime geçin.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;