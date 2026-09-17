import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, Users, GraduationCap, Briefcase, FileText, CheckCircle, ChevronDown, ChevronUp, AlertOctagon, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const CanakkaleGocIdaresiPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const whatsappLink = "https://wa.me/905548743308"; // Assuming standard business number from ContactPage

  const faqs = [
    {
      question: "Çanakkale Göç İdaresi'nden randevu almak zorunlu mu?",
      answer: "Evet, 6458 sayılı YUKK gereğince ikamet izni başvuruları için e-ikamet sistemi üzerinden randevu alınması zorunludur. Randevusuz işlem yapılmamaktadır."
    },
    {
      question: "Yabancı eşim için hangi ikamet iznine başvurmalıyım?",
      answer: "Türk vatandaşı ile evli olan yabancılar için 'Aile İkamet İzni' başvurusu yapılması en uygun yoldur. Bu izin, 3 yılın sonunda vatandaşlık başvuru hakkı sağlar."
    },
    {
      question: "İkamet izni süresi dolarsa ne olur?",
      answer: "İkamet izni süresi dolan yabancılar, 10 gün içinde başvuru yapmazlarsa 'vize ihlali' yapmış sayılırlar ve para cezası ile sınır dışı edilme riskiyle karşılaşabilirler."
    },
    {
      question: "İlçelerde (Biga, Çan, Ezine vb.) ayrı Göç İdaresi birimi var mı?",
      answer: "Hayır, Çanakkale ilindeki tüm yabancı işlemleri merkezde bulunan İl Göç İdaresi Müdürlüğü tarafından yürütülmektedir. İlçelerde sadece Emniyet veya Jandarma birimleri adres tespiti yapabilir."
    }
  ];

  const benefits = [
    "Dosya ve evrak hazırlığında %100 mevzuat uyumu",
    "Reddedilme riskini minimize eden ön inceleme",
    "Randevu ve süreç takibinde profesyonel destek",
    "Çanakkale ve çevre ilçeler için yerel tecrübe"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Sarıbaş Danışmanlık - Çanakkale Ofisi",
        "description": "Çanakkale İl Göç İdaresi işlemlerinde uzman danışmanlık rehberi. İkamet izni, yabancı evlilik ve randevu desteği.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Çanakkale",
          "addressRegion": "Marmara",
          "addressCountry": "TR"
        },
        "telephone": "0554 874 3308",
        "url": "https://saribasdanismanlik.com/canakkale-goc-idaresi",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Göç İdaresi Danışmanlık Hizmetleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "İkamet İzni Dosya Hazırlığı"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Yabancı Evlilik Danışmanlığı"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Çanakkale İl Göç İdaresi Rehberi 2026 - Sarıbaş Danışmanlık"
        description="Çanakkale İl Göç İdaresi, Çanakkale ikamet izni, e-ikamet randevu ve evrak işlemleri. Biga, Çan, Ezine ve tüm ilçeler için profesyonel danışmanlık ve yabancı evlilik desteği."
        keywords="Çanakkale Göç İdaresi, İkamet izni Çanakkale, Çanakkale yabancı danışmanlık, Biga yabancı evlilik işlemleri, Göç idaresi randevu Çanakkale, Çanakkale oturma izni danışmanı"
        canonicalUrl="https://saribasdanismanlik.com/canakkale-goc-idaresi"
        schema={schemaData}
      />

      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1510130987633-2a82b350a9c2)',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/90 to-[#2d5a8f]/80 mix-blend-multiply"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <div className="inline-block px-4 py-1 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium tracking-wide">
            GÖÇ İDARESİ DANIŞMANLIK MERKEZİ
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            Çanakkale İl Göç İdaresi İşlemlerinde<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Profesyonel Çözüm Ortağınız
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            İkamet izni, çalışma izni ve vatandaşlık başvurularında, karmaşık bürokratik süreçleri sizin için yönetiyor,
            Çanakkale'nin her noktasında güvenilir danışmanlık sunuyoruz.
          </p>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_20px_50px_rgba(34,197,94,0.3)] transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            WhatsApp ile Danışın
          </motion.a>
        </motion.div>

        {/* Decorative glass elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
      </section>

      {/* 2. Info Section (6458 Kanunu) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              Çanakkale İl Göç İdaresi Müdürlüğü Görev Alanları
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu (YUKK) çerçevesinde, yabancıların Türkiye’ye girişleri,
              kalışları ve çıkışları ile ilgili tüm iş ve işlemler İl Göç İdaresi Müdürlüğü tarafından yürütülmektedir.
            </p>
          </motion.div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4 border-l-4 border-[#2d5a8f] pl-4">
              İkamet İzni (Oturma İzni) İşlemleri
            </h3>
            <p className="text-gray-600 mb-8">
              Türkiye'de vize veya vize muafiyeti süresinden daha uzun süre kalacak yabancıların (90 günden fazla),
              amaçlarına uygun ikamet izni almaları yasal bir zorunluluktur.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Kısa Dönem İkamet İzni', icon: Briefcase, desc: 'Turistik amaçlı, gayrimenkul sahibi veya ticari görüşme amaçlı gelenler için.' },
                { title: 'Aile İkamet İzni', icon: Users, desc: 'Türk vatandaşları veya çalışma izni sahiplerinin yabancı eş ve çocukları için.' },
                { title: 'Öğrenci İkamet İzni', icon: GraduationCap, desc: 'Çanakkale Onsekiz Mart Üniversitesi (ÇOMÜ) öğrencileri için.' },
                { title: 'Uzun Dönem İkamet İzni', icon: Clock, desc: "Türkiye'de 8 yıldır kesintisiz (6 aydan fazla ara vermeden) ikamet izni ile kalan yabancılar için." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
                >
                  <div className="w-16 h-16 bg-[#eef2f6] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1e3a5f] transition-colors flex-shrink-0">
                    <item.icon className="w-8 h-8 text-[#1e3a5f] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1e3a5f] mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-sm flex-grow">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Critical Warning Box */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-orange-50 border-l-8 border-orange-500 rounded-r-xl p-8 shadow-md flex flex-col md:flex-row gap-6 items-start md:items-center"
          >
            <div className="bg-orange-100 p-4 rounded-full flex-shrink-0">
              <AlertTriangle className="w-10 h-10 text-orange-600" />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-orange-800 mb-2">KRİTİK BİLGİ</h3>
              <p className="text-orange-900/80 mb-4">
                Çanakkale İl Göç İdaresi, <span className="font-bold">Çalışma İzni</span> ve <span className="font-bold">Vatandaşlık</span> başvurularını doğrudan sonuçlandırmaz.
                Bu başvurular Çalışma Bakanlığı ve Nüfus Müdürlüğü koordinasyonunda yürütülür. Yanlış kuruma başvuru yapmak hak kaybına neden olabilir.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/iletisim" className="text-orange-700 font-semibold hover:text-orange-900 hover:underline inline-flex items-center gap-1">
                  Doğru başvuru için bize danışın →
                </Link>
                <Link to="/canakkale-yabancilar-rehberi" className="text-orange-700 font-semibold hover:text-orange-900 hover:underline inline-flex items-center gap-1">
                  Yabancılara verdiğimiz hizmetler için Çanakkale Yabancılar ve Göç Danışmanlığı sayfamızı ziyaret edin →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Local Focus Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">
                Biga, Çan, Ezine ve Lapseki:<br />İlçelerdeki Yabancıların Durumu
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Çanakkale'nin sanayi ve tarım yoğunluklu ilçeleri olan <span className="font-semibold">Biga</span> ve <span className="font-semibold">Çan</span> başta olmak üzere,
                  tüm ilçelerde ikamet eden yabancıların resmi işlemleri Çanakkale Merkez'de bulunan İl Göç İdaresi'nde tamamlanmalıdır.
                </p>
                <p>
                  Özellikle Biga'daki organize sanayi bölgelerinde ve tarım alanlarında çalışan yabancı personellerin çalışma izni süreçleri titizlikle yönetilmelidir.
                  Sarıbaş Danışmanlık olarak, ilçelerden gelen müvekkillerimizin dosya hazırlığını önceden tamamlayarak, merkeze geldiklerinde işlemlerinin tek seferde bitmesini sağlıyoruz.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-[#2d5a8f]" />
                6458 Sayılı Kanun ve '60 Gün' Kuralı
              </h2>
              <p className="text-gray-600 mb-6">
                Yabancılar, sahip oldukları pasaport süresinden en az <span className="font-bold text-red-600">60 gün</span> daha kısa süreli ikamet izni alabilirler.
                Pasaport süresi bitmek üzere olan yabancıların başvuruları kabul edilmez.
              </p>

              <div className="bg-red-50 border border-red-100 p-4 rounded-lg flex gap-4 items-start">
                <AlertOctagon className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-red-700 text-sm mb-1">Sınır Dışı (Deport) Riski</h4>
                  <p className="text-xs text-red-600">
                    Vize ihlali yapan veya sahte evrak kullanan yabancılar hakkında idari gözetim ve sınır dışı kararı alınabilir.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Foreign Marriages Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8fafc] -skew-x-12 transform translate-x-20 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-[#1e3a5f]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                Çanakkale'de Yabancı Evlilikleri ve Aile İkamet İzni
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Çanakkale Belediyeleri nezdinde gerçekleştirilecek yabancı evlilik işlemlerinde, bekarlık belgesi ve doğum belgesi gibi evrakların apostilli ve tercümeli olması şarttır.
                Evlilik sonrası alınacak Aile İkamet İzni, yabancı eşe sosyal güvence ve ileride Türk Vatandaşlığı yolunu açar.
              </p>
              <Link to="/iletisim" className="text-[#2d5a8f] font-bold text-lg hover:underline decoration-2 underline-offset-4">
                Evlilik işlemleri desteği için tıklayın →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1e3a5f]">Sıkça Sorulan Sorular (SSS)</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-[#1e3a5f] pr-4">{faq.question}</span>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-[#2d5a8f]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600 border-t border-gray-100 pt-3">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1e3a5f] rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Neden Sarıbaş Danışmanlık'ı<br />Tercih Etmelisiniz?
                </h2>
                <p className="text-blue-200 mb-8 text-lg">
                  Göç İdaresi süreçleri hataya gelmez. Uzman ekibimizle işlemlerinizi riske atmadan, en hızlı şekilde sonuçlandırın.
                </p>
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-green-500 rounded-full p-1 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/90 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
                <FileText className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Hemen Başlayalım</h3>
                <p className="text-blue-100 mb-8">
                  Vakit kaybetmeden dosyanızı hazırlayalım, randevunuzu oluşturalım.
                </p>
                <Link to="/iletisim" className="block w-full bg-white text-[#1e3a5f] py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
                  İletişime Geçin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-8">
            Profesyonel Destek ile Süreçlerinizi Güvenceye Alın
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/iletisim"
              className="bg-[#1e3a5f] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#152a45] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Sarıbaş Danışmanlık – Uzman Desteği Alın
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              WhatsApp ile Hemen Sorun
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CanakkaleGocIdaresiPage;