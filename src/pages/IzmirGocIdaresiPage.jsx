import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  Users, 
  GraduationCap, 
  Briefcase, 
  FileText, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Clock,
  MapPin,
  Phone,
  HelpCircle,
  Building,
  HeartHandshake
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const IzmirGocIdaresiPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const whatsappLink = "https://wa.me/905419552375?text=Merhaba,%20İzmir%20Göç%20İdaresi%20ve%20ikamet%20izni%20hakkında%20bilgi%20almak%20istiyorum.";

  const ikametTypes = [
    {
      title: "Aile İkamet İzni (Evlilik)",
      icon: <HeartHandshake className="w-8 h-8 text-rose-500" />,
      desc: "Türk vatandaşı veya Türkiye'de yasal ikameti olan yabancı ile evli olanlar için en güvenli ikamet türüdür. 3 yıl kesintisiz evlilik sonrasında Türk vatandaşlığına başvuru hakkı sağlar.",
      badge: "En Yüksek Onay Oranı"
    },
    {
      title: "Kısa Dönem İkamet İzni (Taşınmaz / Turizm)",
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      desc: "İzmir'de gayrimenkul (konut) satın alan yabancılar veya ticari bağlantı, tedavi, bilimsel araştırma amaçlı kalan yabancılar için düzenlenen oturma iznidir.",
      badge: "Değerleme Raporu Gerekir"
    },
    {
      title: "Öğrenci İkamet İzni",
      icon: <GraduationCap className="w-8 h-8 text-emerald-500" />,
      desc: "Ege Üniversitesi, Dokuz Eylül, İzmir Yüksek Teknoloji (İYTE), İzmir Ekonomi ve Yaşar Üniversitesi'nde ön lisans, lisans veya yüksek lisans eğitimi gören yabancı öğrenciler için.",
      badge: "Öğrenci Belgesi Şart"
    },
    {
      title: "Uzun Dönem (Süresiz) İkamet İzni",
      icon: <Shield className="w-8 h-8 text-amber-500" />,
      desc: "Türkiye'de en az 8 yıl kesintisiz yasal ikamet izni ile yaşamış, son 3 yılda sosyal yardım almamış ve düzenli gelire sahip yabancılara verilen ömür boyu geçerli oturma iznidir.",
      badge: "Süresiz Oturma Hakkı"
    }
  ];

  const gocBuildings = [
    {
      name: "İzmir İl Göç İdaresi Müdürlüğü (Harmandalı / Çiğli)",
      address: "Cumhuriyet Mah. Anadolu Cad. No:1005 Çiğli / İZMİR",
      desc: "İzmir'deki tüm yabancıların ilk başvuru, parmak izi verme, ikamet uzatma, adres tescili ve idari işlemlerinin yürütüldüğü ana merkez binasıdır.",
      phone: "0232 402 44 62"
    },
    {
      name: "Konak İrtibat ve Çalışma Hizmet Birimi",
      address: "Konak / İZMİR (Tarihi Çarşı / Kemeraltı Yakını)",
      desc: "Merkez ilçelerde ikamet eden yabancılara yönelik belirli bilgilendirme ve dosya teslim koordinasyon hizmetleri verilmektedir.",
      phone: "157 (YİMER Çağrı Merkezi)"
    }
  ];

  const faqs = [
    {
      question: "İzmir Göç İdaresi'nden randevu almak zorunlu mu?",
      answer: "Evet, 6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu (YUKK) uyarınca ikamet izni başvuruları e-ikamet sistemi (e-ikamet.goc.gov.tr) üzerinden randevu alınarak yapılır. Randevusuz şahsen başvuru kabul edilmemektedir."
    },
    {
      question: "İzmir'de yabancı eşim için aile ikamet izni başvurusu nasıl yapılır?",
      answer: "Türk vatandaşı eş ile resmi evlilik tamamlandıktan sonra e-ikamet üzerinden Aile İkamet İzni randevusu oluşturulur. Randevu gününde evlilik cüzdanı, Türk eşin adli sicil kaydı, vukuatlı nüfus kayıt örneği, gelir belgesi ve yabancı eşin geçerli pasaportu ile İzmir İl Göç İdaresi'ne dosya teslim edilir."
    },
    {
      question: "İkamet izni başvurusu onaylandıktan sonra kartım nasıl teslim edilir?",
      answer: "Dosyanız İzmir İl Göç İdaresi tarafından incelenip onaylandıktan sonra, ikamet izni kimlik kartınız Ankara'daki Darphane'de basılarak PTT Kargo aracılığıyla sistemde beyan ettiğiniz İzmir adresinize 'Barkod Numarası' ile teslim edilir."
    },
    {
      question: "Vize süresi veya ikamet süresi biterse ne yapmalıyım?",
      answer: "Yasal kalış süresini aşan yabancılar vize ihlali (kaçak durum) durumuna düşer. Bu durumda her geçen gün için para cezası birikir ve sınır dışı (deport) tahdidi konulabilir. Ceza miktarını en aza indirmek ve yasal çıkış/giriş veya af kapsamı için derhal danışmanlarımızla görüşmelisiniz."
    },
    {
      question: "İzmir'deki yabancı öğrenciler öğrenci ikametini nasıl uzatır?",
      answer: "Öğrenci ikameti uzatma başvurusu, mevcut ikamet izninin bitmesine 60 gün kala yapılabilir. Üniversitenin öğrenci işlerinden alınan güncel öğrenci belgesi, geçerli pasaport ve sağlık sigortası ile başvuru tamamlanır."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Sarıbaş Danışmanlık - İzmir Göç İdaresi ve İkamet İzni Rehberi",
        "description": "İzmir İl Göç İdaresi randevu alma, aile ikamet izni, yabancı evlilik, öğrenci ikameti ve oturma izni dosya hazırlığında profesyonel danışmanlık rehberi.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "İzmir",
          "addressRegion": "Ege",
          "addressCountry": "TR"
        },
        "telephone": "0541 955 2375",
        "url": "https://saribasdanismanlik.com/izmir-goc-idaresi",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "İzmir İkamet İzni Hizmetleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "İzmir e-İkamet Randevu Alma"
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
        title="İzmir İl Göç İdaresi ve İkamet İzni Rehberi 2026"
        description="İzmir İl Göç İdaresi randevu alma, ikamet izni çeşitleri, evlilik ikameti ve oturma izni evrakları. Bornova, Konak, Karşıyaka ve tüm ilçeler için uzman danışmanlık."
        keywords="izmir göç idaresi randevu, izmir ikamet izni, izmir yabancı danışmanlık, izmir oturma izni danışmanı, harmandalı göç idaresi, izmir aile ikameti, yabancı evlilik işlemleri izmir, sarıbaş danışmanlık"
        canonicalUrl="https://saribasdanismanlik.com/izmir-goc-idaresi"
        schema={schemaData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#152a45] to-[#0f1d30] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-blue-200 text-sm font-medium mb-6">
              <Building className="w-4 h-4 text-blue-300" />
              <span>İzmir İl Göç İdaresi Danışmanlık Rehberi</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              İzmir Göç İdaresi & <br />
              <span className="text-blue-400">İkamet İzni İşlemleri</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              İzmir İl Göç İdaresi e-ikamet randevusu, aile ikameti, yabancı evlilik dosyası hazırlığı ve oturma izni uzatma süreçlerinde ret riskini sıfıra indiren kurumsal danışmanlık.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-900/20 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>İzmir İkamet Uzmanına WhatsApp'tan Yazın</span>
              </a>
              <Link
                to="/calisma-izni-maliyet-hesaplama"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <span>2026 İzin Hesaplayıcı</span>
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
              İzmir'de Başvuru Yaptığımız İkamet İzni Türleri
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Türkiye'deki kalış amacınıza en uygun yasal ikamet iznini belirleyip dosyanızı hazırlıyoruz.
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
                  <span>Bu İzin İçin Evrak Listesini Al</span>
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İzmir İl Göç İdaresi Binaları */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              İzmir İl Göç İdaresi Müdürlüğü Hizmet Binaları
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              İkamet randevusu ve parmak izi işlemlerinizin gerçekleştirileceği merkezler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {gocBuildings.map((b, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200/80 p-8 rounded-2xl">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[#1e3a5f]">{b.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{b.address}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{b.desc}</p>
                <div className="text-xs font-semibold text-gray-700 bg-white px-3 py-2 rounded-lg border border-gray-200 inline-block">
                  Telefon: {b.phone}
                </div>
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
              İzmir İkamet İzni Sıkça Sorulan Sorular
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              İzmir'de yaşayan yabancıların oturma izni hakkında en sık yönelttiği sorular.
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
          <h2 className="text-3xl font-bold mb-4">İzmir'de İkamet İzni Başvurunuzu Güvenle Yapın</h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Hatalı belge veya yanlış başvuru türü nedeniyle ikametinizin reddedilmesini önleyin. 2017'den beri edindiğimiz tecrübe ile yanınızdayız.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-lg"
          >
            <Phone className="w-6 h-6" />
            <span>0541 955 2375 - WhatsApp İletişim</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default IzmirGocIdaresiPage;
