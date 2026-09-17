import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const AboutPage = () => {
  const officeImages = [
    'https://horizons-cdn.hostinger.com/8f8c2077-86d2-4e1e-8ed1-68e0f1d08f7d/c9b344c423ba35979f834a3fac80218e.jpg',
    'https://horizons-cdn.hostinger.com/8f8c2077-86d2-4e1e-8ed1-68e0f1d08f7d/457ce1ed218f9dbaf0e01ce750e31553.jpg',
    'https://horizons-cdn.hostinger.com/8f8c2077-86d2-4e1e-8ed1-68e0f1d08f7d/e666e51ea9a36559a56de00a5e43734d.jpg',
    'https://horizons-cdn.hostinger.com/8f8c2077-86d2-4e1e-8ed1-68e0f1d08f7d/6c2c306413f1be0a702217810237325f.jpg',
  ];

  return (
    <>
      <SEOHead
        title="Çanakkale ve Manisa Göç İdaresi Danışmanlık Uzmanı"
        description="2017'den beri Çanakkale ve Manisa'da yabancılar için ikamet izni, çalışma izni ve vatandaşlık süreçlerinde uzman danışmanlık. Evlilik dosyaları ve bakıcı izinlerinde profesyonel çözüm."
        keywords="çanakkale göç idaresi, manisa çalışma izni, yabancı danışmanlık çanakkale, sarıbaş danışmanlık, ikamet izni uzmanı"
        canonicalUrl="https://saribasdanismanlik.com/hakkimizda"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Çanakkale ve Manisa Yabancı Danışmanlık Merkezi
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              2017'den beri Göç İdaresi ve Çalışma İzni süreçlerinde yerel otorite
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6 border-b-2 border-gray-100 pb-2">
              Sarıbaş Danışmanlık: 8 Yıllık Uzmanlık ve Güven
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Sarıbaş Danışmanlık</strong>, 17 Nisan 2017 tarihinden bu yana yabancılar mevzuatı kapsamında kesintisiz hizmet sunmaktadır. Sektördeki derin tecrübemizle, özellikle <strong>Çanakkale ve Manisa</strong> bölgelerindeki Göç İdaresi süreçlerinde başvuru sahiplerinin en güvenilir çözüm ortağıyız.
              </p>
              <p>
                Uzmanlık alanımız sadece genel danışmanlık ile sınırlı değildir. Türk vatandaşı ile evli yabancıların <strong>aile ikamet izni</strong> dosyaları, hasta ve yaşlı bakıcılarının <strong>çalışma izni</strong> süreçleri, otel ve şirket personeli izinleri ile Afgan ve Suriyeli çalışanların yasal statüleri gibi spesifik ve teknik bilgi gerektiren alanlarda profesyonel rehberlik sağlıyoruz.
              </p>
              <p>
                Çanakkale ve Manisa ofislerimizde sunduğumuz yüz yüze hizmetin yanı sıra, Balıkesir ve İzmir gibi çevre illerdeki yabancı misafirlerimize de online süreç yönetimi ile mevzuata tam uyumlu destek sunuyoruz. Amacımız, karmaşık görünen yabancılar mevzuatını başvuru sahipleri için şeffaf, hızlı ve hatasız bir sürece dönüştürmektir.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Misyonumuz</h3>
              <p className="text-gray-700 leading-relaxed">
                Yabancıların Türkiye'deki yasal statülerini korumak için doğru, güncel ve mevzuata uygun bilgi sunarak, Göç İdaresi süreçlerini güvenle tamamlamalarını sağlamak.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Vizyonumuz</h3>
              <p className="text-gray-700 leading-relaxed">
                Şeffaflık ve profesyonellik ilkeleriyle, Ege ve Marmara bölgelerinde yabancılar danışmanlığı denilince akla gelen ilk ve en güvenilir marka olmak.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Uzmanlık</h3>
              <p className="text-gray-700 leading-relaxed">
                Hasta bakıcıdan evlilik ikametine kadar her dosya tipine özel çözümler üreterek, müşteri memnuniyetini en üst düzeyde tutuyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Gallery Section */}
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
              Çanakkale ve Manisa'daki merkezlerimizde profesyonel ekibimizle hizmetinizdeyiz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={image}
                  alt={`Sarıbaş Danışmanlık Çanakkale Manisa Ofisi ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;