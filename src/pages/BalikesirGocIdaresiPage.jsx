import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Users, 
  GraduationCap, 
  Briefcase, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  MapPin, 
  Phone, 
  Building,
  HeartHandshake
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const BalikesirGocIdaresiPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const whatsappLink = "https://wa.me/905548743308?text=Merhaba,%20Balıkesir%20Göç%20İdaresi%20ve%20ikamet%20izni%20hakkında%20bilgi%20almak%20istiyorum.";

  const ikametTypes = [
    {
      title: "Aile İkamet İzni (Evlilik)",
      icon: <HeartHandshake className="w-8 h-8 text-rose-500" />,
      desc: "Balıkesir veya ilçelerinde Türk vatandaşı ile evli yabancılar için düzenlenen en avantajlı ikamet iznidir. 3 yılın sonunda Türk vatandaşlığına başvuru imkanı sunar.",
      badge: "Vatandaşlık Hakkı"
    },
    {
      title: "Kısa Dönem İkamet İzni (Taşınmaz / Turizm)",
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      desc: "Ayvalık, Edremit, Altınoluk veya Balıkesir genelinde gayrimenkul satın alan ya da tedavi, ticari amaçla ikamet eden yabancılar için.",
      badge: "Körfez Bölgesi Yoğun"
    },
    {
      title: "Öğrenci İkamet İzni",
      icon: <GraduationCap className="w-8 h-8 text-emerald-500" />,
      desc: "Balıkesir Üniversitesi ve Bandırma Onyedi Eylül Üniversitesi'nde ön lisans, lisans ve lisansüstü eğitim gören yabancı öğrenciler için.",
      badge: "Üniversite Öğrencileri"
    },
    {
      title: "Uzun Dönem (Süresiz) İkamet İzni",
      icon: <Shield className="w-8 h-8 text-amber-500" />,
      desc: "Türkiye'de kesintisiz en az 8 yıl ikamet izni ile yaşamış, kendi geçimini sağlayan yabancılara verilen ömür boyu geçerli oturma izni.",
      badge: "Süresiz Oturma"
    }
  ];

  const districts = [
    { name: "Bandırma", desc: "Sanayi kuruluşları, liman personeli aileleri ve Bandırma Onyedi Eylül Üniversitesi yabancı öğrencileri ikamet işlemleri." },
    { name: "Edremit & Akçay & Altınoluk", desc: "Körfez bölgesinde mülk sahibi yabancılar, yabancı evlilikler ve emekli yabancıların ikamet uzatma başvuruları." },
    { name: "Ayvalık & Cunda", desc: "Taşınmaz sahibi yabancılar, turizm işletmecileri ve Türk vatandaşı ile evli yabancıların oturma izni dosyaları." },
    { name: "Gönen & Manyas", desc: "Tarım, çeltik ve hayvancılık sektöründe çalışan yabancıların ve ailelerinin yasal ikamet/kayıt takibi." },
    { name: "Karesi & Altıeylül (Merkez)", desc: "Balıkesir İl Göç İdaresi'ne yakın merkez ilçelerde ikamet eden yabancıların randevu ve parmak izi koordinasyonu." },
    { name: "Erdek & Burhaniye", desc: "Kıyı şeridinde ikamet eden yabancıların yazlık konut ikametleri ve e-ikamet adres tescil işlemleri." }
  ];

  const faqs = [
    {
      question: "Balıkesir İl Göç İdaresi Müdürlüğü nerededir?",
      answer: "Balıkesir İl Göç İdaresi Müdürlüğü, Karesi ilçesinde (Paşa Alanı Mahallesi civarında) hizmet vermektedir. Bandırma, Edremit, Ayvalık ve diğer tüm ilçelerdeki yabancıların e-ikamet randevu ve dosya teslim işlemleri bu merkezden yürütülür."
    },
    {
      question: "Balıkesir'de e-ikamet randevusu nasıl alınır?",
      answer: "Başvurular Göç İdaresi Başkanlığı'nın resmi e-ikamet portalı (e-ikamet.goc.gov.tr) üzerinden yapılır. Form eksiksiz doldurulduktan sonra randevu belgesi oluşturulur. Randevu gününde hazırlanan evrak dosyası ile İl Göç İdaresi'ne müracaat edilir."
    },
    {
      question: "Edremit veya Ayvalık'ta ev aldım, ikamet izni alabilir miyim?",
      answer: "Evet, taşınmaz (konut) üzerinden kısa dönem ikamet izni başvurusu yapılabilir. Konutun tapusu, SPK lisanslı değerleme raporu, DASK sigortası ve yabancı sağlık sigortası ile başvuru tamamlanır."
    },
    {
      question: "İkamet kartı ne zaman teslim edilir?",
      answer: "Balıkesir İl Göç İdaresi dosya incelemesini tamamlayıp onayladıktan sonra kimlik kartı Ankara'da basılır ve PTT Kargo ile Balıkesir'deki adresinize teslim edilir. Süreç genellikle 30-60 gün sürer."
    },
    {
      question: "İkamet iznim reddedilirse ne yapabilirim?",
      answer: "İkamet izni reddi halinde yabancıya 10 gün içinde Türkiye'den çıkış yapması için tebligat verilir. Reddin gerekçesine göre 60 gün içinde İdare Mahkemesi'nde dava açma veya eksiklikleri gidererek yasal süreler dahilinde yeniden başvuru yapma hakkı bulunur. Bu tür durumlarda gecikmeden danışmanlarımıza başvurmalısınız."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Sarıbaş Danışmanlık - Balıkesir Göç İdaresi ve İkamet İzni Rehberi",
        "description": "Balıkesir İl Göç İdaresi e-ikamet randevu, aile ikameti, taşınmaz ikamet izni ve yabancı evlilik başvurularında profesyonel danışmanlık hizmeti.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Balıkesir",
          "addressRegion": "Marmara",
          "addressCountry": "TR"
        },
        "telephone": "0554 874 3308",
        "url": "https://saribasdanismanlik.com/balikesir-goc-idaresi",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Balıkesir İkamet İzni Hizmetleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Balıkesir e-İkamet Randevu Alma"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Aile İkamet İzni Dosya Hazırlığı"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Taşınmaz İkamet İzni Danışmanlığı"
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
        title="Balıkesir İl Göç İdaresi ve İkamet İzni Rehberi 2026"
        description="Balıkesir İl Göç İdaresi e-ikamet randevusu, aile ikamet izni, taşınmaz ikameti ve oturma izni evrakları. Bandırma, Edremit, Ayvalık ve Gönen uzman danışmanlık."
        keywords="balıkesir göç idaresi, balıkesir ikamet izni, balıkesir oturma izni danışmanlık, bandırma yabancı işlemleri, edremit yabancı ikamet, ayvalık oturma izni, sarıbaş danışmanlık"
        canonicalUrl="https://saribasdanismanlik.com/balikesir-goc-idaresi"
        schema={schemaData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#152a45] to-[#0f1d30] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-blue-200 text-sm font-medium mb-6">
              <Building className="w-4 h-4 text-blue-300" />
              <span>Balıkesir İl Göç İdaresi Rehberi</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Balıkesir Göç İdaresi & <br />
              <span className="text-blue-400">İkamet İzni Danışmanlığı</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Bandırma'dan Edremit'e, Ayvalık'tan Gönen'e kadar Balıkesir genelinde ikamet izni randevusu, aile ikameti ve oturma izni uzatma süreçlerinde %100 profesyonel danışmanlık.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-900/20 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>0554 874 3308 - WhatsApp Bilgi Al</span>
              </a>
              <Link
                to="/balikesir-calisma-izni"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <span>Balıkesir Çalışma İzni Sayfası</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* İkamet İzni Türleri */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Balıkesir'de Sunduğumuz İkamet İzni Hizmetleri
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Yasal kalış gerekçenize en uygun ikamet türünü belirliyor ve evraklarınızı eksiksiz hazırlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ikametTypes.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-50 rounded-xl">{t.icon}</div>
                    <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                      {t.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{t.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{t.desc}</p>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a5f] hover:text-blue-600 transition-colors"
                >
                  <span>Evrak Listesi ve Bilgi Al</span>
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Balıkesir İlçeleri */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Balıkesir'in Tüm İlçelerine Hizmet
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Balıkesir'in hangi ilçesinde olursanız olun, resmi Göç İdaresi sürecinizi eksiksiz yönetiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {districts.map((d, index) => (
              <div key={index} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-200">
                <div className="flex items-center gap-2 font-bold text-lg text-[#1e3a5f] mb-2">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <h4>{d.name}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS Bölümü */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Balıkesir İkamet İzni Sıkça Sorulan Sorular
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Balıkesir'de oturma izni başvurusu yapacak yabancıların en çok sorduğu sorular.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 hover:bg-gray-50 flex justify-between items-center transition-colors focus:outline-none"
                >
                  <span className="font-bold text-lg text-[#1e3a5f] pr-4">{faq.question}</span>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-6 pt-0 text-gray-600 border-t border-gray-100 text-base leading-relaxed">
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

      {/* Alt CTA Bölümü */}
      <section className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Balıkesir'de İkamet İzninizi Riskin Ötesine Taşıyın</h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Hatalı başvuru nedeniyle harç kaybetmeyin ve vize ihlali cezası almayın. Uzman kadromuzla güvenle başvurun.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-lg"
          >
            <Phone className="w-6 h-6" />
            <span>0554 874 3308 - WhatsApp İletişim</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default BalikesirGocIdaresiPage;
