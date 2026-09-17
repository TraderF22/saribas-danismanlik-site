import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import SEOHead from '@/components/SEOHead';
const ServicesPage = () => {
  const services = [{
    title: 'Evlilik Yoluyla Aile İkamet İzni',
    description: 'Türk vatandaşı ile evli yabancılar için aile ikamet izni süreçlerinde Çanakkale ve Manisa ofislerimizde uzman desteği sunuyoruz. Dosya hazırlığı, mülakat hazırlığı ve Göç İdaresi randevu takibinde %100 profesyonel danışmanlık.'
  }, {
    title: 'Hasta, Yaşlı ve Çocuk Bakımı Çalışma İzni',
    description: 'Ev hizmetlerinde çalışacak yabancı personeller (hasta bakıcı, yaşlı bakıcı, çocuk bakıcısı) için gerekli olan çalışma izni başvurularını yasal mevzuata tam uyumlu şekilde yönetiyoruz. İşveren ve personel arasındaki yasal köprüyü kuruyoruz.'
  }, {
    title: 'Kurumsal ve Sektörel Çalışma İzinleri',
    description: 'Şirketler, oteller ve tarım işletmeleri için profesyonel çalışma izni çözümleri. Otel personeli, şirket çalışanları, Afgan çobanlar ve Suriyeli çalışanlar için özel çalışma izni süreçleri ile işletmenizin yasal altyapısını koruyoruz.'
  }, {
    title: 'Kısa Dönem (Turizm) Oturma İzni',
    description: 'Türkiye\'ye yasal yollarla giriş yapmış ve turizm amaçlı kalış süresini uzatmak isteyen yabancılar için kısa dönem ikamet izni başvurularını yapıyoruz. Ege bölgesindeki en hızlı ve güvenilir başvuru süreci.'
  }, {
    title: 'Uluslararası Koruma & Özel İzinler',
    description: 'Uluslararası koruma kapsamındaki çalışma izinleri ve özel statülü yabancı personeller için danışmanlık sağlıyoruz. Çanakkale ve çevre illerdeki karmaşık dosya süreçlerinde yanınızdayız.'
  }, {
    title: 'Yurt Dışından Çalışma İzni Danışmanlığı',
    description: 'Yurtdışından Türkiye\'ye çalışma izni ile gelmek isteyen yabancıların çalışma izni süreçlerinde danışmanlık veriyoruz. Çanakkale ve Manisa başta olmak üzere diğer tüm şehirlerimize çalışma izni danışmanlığı vermekteyiz.'
  }];
  return <>
      <SEOHead title="Çanakkale & Manisa İkamet ve Çalışma İzni Ofisi" description="Çanakkale ve Manisa'da Türk vatandaşı ile evlilik ikameti, bakıcı ve şirket personeli çalışma izni, Afgan ve Suriyeli çalışan izinleri ile yurt dışı çalışma danışmanlığı." keywords="çanakkale evlilik ikamet izni, hasta bakıcı çalışma izni, manisa otel çalışanı izni, afgan çoban çalışma izni, suriyeli çalışma izni çanakkale, yurt dışı çalışma izni" canonicalUrl="https://saribasdanismanlik.com/hizmetler" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Profesyonel İkamet ve Çalışma İzni Danışmanlığı
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">2017'den beri Çanakkale ve Manisa'da göç idaresi izinleri, yabancı ile evlilik dosyalarından bakıcı çalışma izinlerine kadar her aşamada yanınızdayız.</p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => <ServiceCard key={index} service={service} index={index} />)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              Hangi Süreci Başlatmak İstiyorsunuz?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Evlilik ikameti, bakıcı izinleri veya şirket dosyalarınız için uzman ekibimizle görüşün.
            </p>
            <a href="/iletisim" className="inline-block bg-[#1e3a5f] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#152a45] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Ücretsiz Ön Görüşme Yapın
            </a>
          </motion.div>
        </div>
      </section>
    </>;
};
export default ServicesPage;