import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, FileText, Landmark, Calendar, FileCheck, UserCheck, Check, ChevronDown } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const CanakkaleYabancilarPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const services = [
    "İkamet İzni (Oturma İzni) Başvuruları",
    "Çalışma İzni Danışmanlığı",
    "Aile İkamet İzni ve Evlilik İşlemleri",
    "Öğrenci İkamet İzni Başvuruları",
    "Türk Vatandaşlığı Başvurusu",
    "Deport (Sınırdışı) Kararı İtirazları"
  ];

  const processSteps = [
    {
      title: "Ön Değerlendirme ve Randevu",
      description: "Durumunuz uzmanlarımızca analiz edilir ve Çanakkale Göç İdaresi'nden adınıza randevu oluşturulur.",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      title: "Evrak Hazırlığı ve Sigorta",
      description: "Gerekli tüm belgeler (tapu, kira kontratı, sağlık sigortası vb.) mevzuata uygun şekilde hazırlanır.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Başvuru ve Mülakat",
      description: "Dosyanız eksiksiz olarak teslim edilir ve mülakat sürecinde size rehberlik edilir.",
      icon: <UserCheck className="w-8 h-8" />
    },
    {
      title: "Sonuç Takibi ve Teslim",
      description: "Başvurunuzun durumu düzenli olarak takip edilir ve ikamet kartınızın teslim süreci yönetilir.",
      icon: <FileCheck className="w-8 h-8" />
    }
  ];

  const commonProblems = [
    "Yanlış ikamet izni türüne başvuru",
    "Eksik veya hatalı evrak",
    "Adres ve konaklama belgelerinde uyumsuzluk",
    "Süre kaçırma ve yanlış randevu planlaması",
    "Çalışma izni sürecinde yanlış başvuru yapılması,eksik dosya hazırlanması"
  ];

  const faqs = [
    {
      question: "Başvurular ne kadar sürede sonuçlanır?",
      answer: "Çanakkale Göç İdaresi'nde yapılan ikamet izni başvuruları, eksiksiz ve mevzuata uygun dosyalar için genel olarak ortalama 30 gün içinde sonuçlanmaktadır. Ancak yasal olarak Göç İdaresi'nin değerlendirme süresi 90 güne kadar uzayabilmektedir. Başvuru yoğunluğu, dosya içeriği ve ek belge talepleri bu süreyi etkileyebilir."
    },
    {
      question: "İkamet izni kimlik kartı ne zaman gelir?",
      answer: "İkamet izni başvurunuz Çanakkale Göç İdaresi tarafından onaylandıktan sonra, kimlik kartınız ortalama 30 gün içinde başvuruda beyan edilen ikamet adresinize PTT kargo aracılığıyla teslim edilir. Teslim süresi, adres doğruluğu ve kargo yoğunluğuna göre değişkenlik gösterebilir."
    },
    {
      question: "Başvuru sonucunu nasıl öğrenebilirim?",
      answer: "Başvuru sonucunuz, dosyanızda kayıtlı olan telefon numarasına SMS yoluyla bildirilir. Gönderilen mesajda başvurunuzun durumu \"olumlu\" veya \"olumsuz\" olarak belirtilir. Ayrıca başvuru durumunuzu, e-İkamet sistemi üzerinden de kontrol edebilirsiniz: https://e-ikamet.goc.gov.tr/Ikamet/DevamEdenBasvuruGiris"
    }
  ];

  return (
    <>
      <SEOHead
        title="Sarıbaş Danışmanlık | Çanakkale İkamet İzni ve Çalışma İzni Danışmanlığı"
        description="Çanakkale'de ikamet izni ve çalışma izni başvuruları için danışmanlık hizmeti sunuyoruz. Göç İdaresi randevu, evrak hazırlığı ve başvuru takibi süreçlerinde destek veriyoruz."
        keywords="Çanakkale ikamet izni, Çanakkale çalışma izni, Çanakkale göç idaresi randevu, Çanakkale yabancı danışmanlık, Çanakkale oturma izni"
      />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1550600633-1782a0e926df)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/90 to-[#2d5a8f]/70 mix-blend-multiply"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            Çanakkale Yabancılar ve <br /> Göç Danışmanlığı
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-3xl mx-auto drop-shadow-md">
            Çanakkale'de ikamet izni, çalışma izni ve vatandaşlık işlemlerinizde güvenilir çözüm ortağınız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/iletisim"
              className="bg-white text-[#1e3a5f] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
            >
              Hemen Randevu Alın
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Consulting Topics */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
              Çanakkale'de Hangi Konularda <br/> Danışmanlık Veriyoruz?
            </h2>
            <div className="w-24 h-1 bg-[#1e3a5f] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-full group-hover:bg-[#1e3a5f] transition-colors duration-300">
                    <Check className="w-6 h-6 text-[#1e3a5f] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-lg font-semibold text-gray-800 group-hover:text-[#1e3a5f] transition-colors duration-300 pt-2">
                    {service}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-[#1e3a5f] text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Başvuru Süreci Nasıl İlerliyor?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Karmaşık bürokratik işlemleri sizin için 4 kolay adıma indirgiyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-white/20 mb-4 absolute top-4 right-6">
                  {index + 1}
                </div>
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-8 h-8 text-amber-500" />
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f]">
                      Çanakkale'de En Sık <br /> Karşılaşılan Sorunlar
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Çanakkale'de yapılan başvurularda en sık karşılaşılan problemler şunlardır:
                  </p>
                  
                  <ul className="space-y-4 mb-6">
                    {commonProblems.map((problem, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 min-w-[20px]">
                          <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          </div>
                        </div>
                        <span className="text-gray-700 font-medium">{problem}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-600">
                    Bu tür sorunlar başvurunun reddedilmesine veya sürecin uzamasına neden olabilir. Danışmanlık hizmeti, bu riskleri en baştan azaltmayı amaçlar.
                  </p>
                </motion.div>
              </div>
              
              <div className="bg-gray-100 relative min-h-[400px] lg:min-h-full">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Çanakkale Ofis Danışmanlık" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1e3a5f]/40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow-sm"
          >
            <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mx-auto mb-6">
              <Landmark className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Resmî Kurum Bilgilendirmesi</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Çanakkale İl Göç İdaresi Müdürlüğü, yabancıların ikamet ve çalışma izni başvurularını değerlendiren yetkili mercidir. Başvuruların eksiksiz, doğru ve yasal süresi içinde yapılması, sürecin olumlu sonuçlanması açısından hayati önem taşır. Sarıbaş Danışmanlık olarak, tüm işlemlerinizi güncel Göç İdaresi mevzuatına ve prosedürlerine tam uygunluk çerçevesinde yürütmekteyiz. Sarıbaş Danışmanlık, resmî bir devlet kurumu değildir; danışmanlık hizmeti sunmaktadır.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f]">Sıkça Sorulan Sorular</h2>
            <div className="w-16 h-1 bg-[#1e3a5f] mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-[#1e3a5f] text-lg pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180 text-[#1e3a5f]' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CanakkaleYabancilarPage;