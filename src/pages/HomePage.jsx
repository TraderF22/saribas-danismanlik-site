import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Users, FileText, Award, Star } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
const HomePage = () => {
  const features = [{
    icon: <CheckCircle className="w-12 h-12 text-[#1e3a5f]" />,
    title: "2017'den beri aktif danışmanlık",
    description: "8 yılı aşkın tecrübemizle Çanakkale, Manisa, Balıkesir ve İzmir genelinde güvenilir çözüm ortağınızız."
  }, {
    icon: <Users className="w-12 h-12 text-[#1e3a5f]" />,
    title: "Birebir ve şeffaf süreç yönetimi",
    description: "Göç İdaresi başvuru süreci boyunca yanınızdayız. İşlemlerinizi şeffaf bir şekilde takip edin."
  }, {
    icon: <FileText className="w-12 h-12 text-[#1e3a5f]" />,
    title: "Deneyim ve mevzuat bilgisi",
    description: "Güncel mevzuata hakim ekibimizle ikamet ve çalışma izni süreçlerinde doğru rehberlik sağlıyoruz."
  }, {
    icon: <Award className="w-12 h-12 text-[#1e3a5f]" />,
    title: "Kapsamlı hizmet yelpazesi",
    description: "Çalışma izni, aile ikamet izni, vatandaşlık ve evlilik sonrası ikamet izni başvuruları."
  }];
  const reviews = [{
    name: "Fatima A.",
    rating: 5,
    text: "Sarıbaş Danışmanlık ile çalışma izni sürecim çok hızlı ve sorunsuz ilerledi. Çok memnunum!"
  }, {
    name: "Mohammed K.",
    rating: 5,
    text: "Profesyonel ve güvenilir hizmet. Her adımda bilgilendirildim, teşekkürler."
  }, {
    name: "Alina S.",
    rating: 5,
    text: "İkamet izni başvurumda büyük yardımları oldu. Kesinlikle tavsiye ederim."
  }];
  return <>
    <SEOHead title="Çanakkale ve Manisa Yabancı Danışmanlık | İkamet & Çalışma İzni" description="Çanakkale ve Manisa ofislerimizle yabancılar için Göç İdaresi ikamet izni, çalışma izni ve Türk vatandaşlığı başvurularında profesyonel danışmanlık hizmeti sunuyoruz. Ege bölgesinde hızlı ve güvenilir süreç takibi." keywords="çanakkale göç idaresi danışmanlık, manisa çalışma izni başvurusu, çanakkale yabancı danışmanlık, izmir ikamet izni, balıkesir yabancı oturma izni, sarıbaş danışmanlık" canonicalUrl="https://saribasdanismanlik.com/" />

    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(https://horizons-cdn.hostinger.com/8f8c2077-86d2-4e1e-8ed1-68e0f1d08f7d/ea3f1f12fae30441a0d4296d48f9aa9c.webp)',
          backgroundPosition: '50% 70%',
        }}
      >


        {/* Overlays for readability */}
        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Gradient overlay from bottom to top as requested */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="relative z-10 text-center text-white px-4 max-w-5xl pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg tracking-tight">
          Çanakkale ve Manisa <br />
          Göç İdaresi & Çalışma İzni <br />
          Danışmanlık Merkezi
        </h1>

        <p className="text-lg md:text-xl mb-10 text-gray-100 max-w-2xl mx-auto drop-shadow-md font-medium">Çanakkale ve Manisa merkezli uzman kadromuzla; tüm Marmara ve Ege bölgesinde ikamet izni ve çalışma izni  süreçlerinde profesyonel destek sağlıyoruz.</p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link to="/hizmetler" className="bg-white text-[#1e3a5f] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Hizmetlerimizi Keşfedin
          </Link>
          <Link to="/iletisim" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#1e3a5f] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 backdrop-blur-sm">
            Bize Ulaşın
          </Link>
        </div>
      </motion.div>
    </section>

    {/* Why Choose Us Section */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Neden Sarıbaş Danışmanlık?
          </h2>
          <div className="h-1 w-20 bg-[#1e3a5f] mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Yılların deneyimi ve mevzuat bilgisiyle yanınızdayız
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="bg-white border border-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="mb-6 bg-[#f0f4f8] w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-[#1e3a5f] transition-colors duration-300">
              {React.cloneElement(feature.icon, {
                className: "w-10 h-10 text-[#1e3a5f] group-hover:text-white transition-colors duration-300"
              })}
            </div>
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </motion.div>)}
        </div>

        <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="mt-16 bg-[#f8fafc] p-8 rounded-2xl text-center shadow-inner">
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg">
            Çanakkale ve Manisa'daki ofislerimize ek olarak <span className="font-semibold text-[#1e3a5f]">Balıkesir ve İzmir</span>'de ikamet eden yabancılara online danışmanlık sağlıyoruz. İkamet izni, çalışma izni, aile ikamet izni ve evlilik sonrası ikamet izni başvurularında süreç takibi yapıyoruz.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Reviews Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-2xl font-bold text-[#1e3a5f]">4.9</span>
          </div>
          <p className="text-gray-600">150+ mutlu müşteri yorumu</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative">
            <div className="absolute -top-4 left-8 text-6xl text-gray-200 font-serif">"</div>
            <div className="flex mb-4 mt-2">
              {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-gray-700 mb-6 italic relative z-10">{review.text}</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                {review.name.charAt(0)}
              </div>
              <p className="font-semibold text-[#1e3a5f]">{review.name}</p>
            </div>
          </motion.div>)}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-br from-[#1e3a5f] via-[#244672] to-[#2d5a8f] text-white relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Başvuru Sürecinize Hemen Başlayın
          </h2>
          <p className="text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
            Profesyonel danışmanlarımız size en uygun çözümü sunmak için hazır. Vakit kaybetmeden bizimle iletişime geçin.
          </p>
          <Link to="/iletisim" className="inline-block bg-white text-[#1e3a5f] px-12 py-5 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Ücretsiz Danışmanlık Alın
          </Link>
        </motion.div>
      </div>
    </section>
  </>;
};
export default HomePage;