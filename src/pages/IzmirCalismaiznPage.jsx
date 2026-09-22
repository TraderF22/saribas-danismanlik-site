import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Baby, 
  Tractor, 
  Hotel, 
  Building2, 
  Globe2, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Phone, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  MapPin,
  Compass,
  Factory
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import CalculatorBanner from '@/components/CalculatorBanner';

const IzmirCalismaiznPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const whatsappLink = "https://wa.me/905419552375?text=Merhaba,%20İzmir%20çalışma%20izni%20hakkında%20bilgi%20almak%20istiyorum.";

  const sectors = [
    {
      title: "Sanayi, Fabrika ve OSB Personeli",
      icon: <Factory className="w-10 h-10 text-indigo-600" />,
      color: "from-indigo-50 to-white",
      borderColor: "border-indigo-100",
      districts: "Aliağa, Torbalı, Çiğli AOSB, Kemalpaşa, Menemen, ESBAŞ",
      content: [
        "İzmir'in öncü sanayi bölgelerinde faaliyet gösteren fabrikalar için yabancı mühendis, teknik uzman, usta ve operatör çalışma izinleri.",
        "İşyerinde istihdam edilecek her bir yabancı personel için en az 5 Türk vatandaşı sigortalı çalışan bulunması zorunludur.",
        "Şirketin ödenmiş sermayesinin en az 100.000 TL olması veya brüt satışlarının 800.000 TL'yi, ihracatının 150.000 USD'yi aşması gerekir.",
        "Aliağa petrokimya ve demir-çelik tesisleri, Kemalpaşa makine/lojistik ve Torbalı mobilya sanayi için özel sektör analizleri.",
        "Çalışma ve Sosyal Güvenlik Bakanlığı sisteminde ret riskini ortadan kaldıran profesyonel dosya hazırlığı ve e-imza süreçleri."
      ]
    },
    {
      title: "Hasta ve Yaşlı Bakımı Çalışma İzni",
      icon: <Users className="w-10 h-10 text-rose-500" />,
      color: "from-rose-50 to-white",
      borderColor: "border-rose-100",
      districts: "Karşıyaka, Bornova, Konak, Alsancak, Güzelbahçe, Narlıdere",
      content: [
        "İzmir genelinde evinde bakıma muhtaç yaşlı veya kronik rahatsızlığı bulunan vatandaşlarımız için ev hizmetleri çalışma izni.",
        "Ev hizmetlerinde temizlikçi veya genel ev işçisi adı altında izin verilmemekte, sadece doğrudan bakım işlerine onay çıkmaktadır.",
        "Yaşlı bakımında bakılacak kişinin 65 yaş üzerinde olması veya heyet/doktor raporlu bakım ihtiyacının belgelenmesi esastır.",
        "İşveren ailenin yabancı personelin net asgari ücreti ve SGK primlerini karşılayabilecek resmi gelir durumunu belgelemesi gerekir.",
        "Özbekistan, Türkmenistan, Gürcistan, Azerbaycan ve Filipinler uyruklu tecrübeli bakıcıların yasal izin işlemleri."
      ]
    },
    {
      title: "Turizm, Otelcilik ve Gastronomi",
      icon: <Hotel className="w-10 h-10 text-amber-500" />,
      color: "from-amber-50 to-white",
      borderColor: "border-amber-100",
      districts: "Çeşme, Alaçatı, Urla, Seferihisar, Foça, Selçuk",
      content: [
        "Çeşme, Alaçatı ve Ege kıyılarındaki oteller, butik konaklama tesisleri ve restoranlar için yabancı personel çalışma izinleri.",
        "Kültür ve Turizm Bakanlığı belgeli veya belediye ruhsatlı tesislerde resepsiyonist, servis personeli, şef ve animatör izinleri.",
        "Turizm işletmelerinde yabancı personelin anadili veya ileri seviye yabancı dil bilgisi başvuru kabul şansını katlar.",
        "Sezonluk ve yıllık çalışma izni başvuruları ile işletmenizi yüksek tutarlı kaçak yabancı çalıştırma cezalarından koruyoruz.",
        "Ege bölgesinin yoğun yaz sezonunda hızlı, güvenli ve bürokratik engellere takılmayan dosya yönetimi."
      ]
    },
    {
      title: "Çocuk Bakımı ve Dadı Çalışma İzni",
      icon: <Baby className="w-10 h-10 text-blue-500" />,
      color: "from-blue-50 to-white",
      borderColor: "border-blue-100",
      districts: "Bornova, Karşıyaka, Bostanlı, Bayraklı, Buca, Balçova",
      content: [
        "Evinde 15 yaşından küçük çocuğu bulunan İzmirli aileler için yabancı uyruklu çocuk bakıcısı yasal izin süreci.",
        "Anne veya babanın resmi gelir durumu yabancının maaş ve sigorta primlerini karşılayacak seviyede olmalıdır.",
        "Yabancı adayın Türkiye'de geçerli en az 6 ay süreli ikamet izni olması veya yurt dışından konsolosluk kanalıyla gelmesi gerekir.",
        "İki taraf arasında imzalanacak iş sözleşmesi, evrak hazırlığı ve Çalışma Bakanlığı sistem onayları eksiksiz takip edilir."
      ]
    },
    {
      title: "Şirket Ortağı ve Yabancı Yatırımcı İzni",
      icon: <Building2 className="w-10 h-10 text-emerald-600" />,
      color: "from-emerald-50 to-white",
      borderColor: "border-emerald-100",
      districts: "Konak, Bayraklı Manavkuyu/Adliye Bölgesi, Gaziemir, Çiğli",
      content: [
        "İzmir'de limited veya anonim şirket kuran veya mevcut şirkete ortak olan yabancı yatırımcılar için çalışma izni.",
        "Yabancı ortağın sermaye payının en az 40.000 TL olması veya şirket sermayesinin kanuni limitleri sağlaması gerekmektedir.",
        "Şirkette en az 5 Türk vatandaşı çalışan istihdamı sağlanmalı ve vergi/SGK borcu bulunmamalıdır.",
        "Ticaret Sicil Gazetesi, güncel faaliyet belgesi, bilanço ve vergi levhası incelemeleri ile profesyonel başvuru yönetimi."
      ]
    },
    {
      title: "Yurtdışından İşçi Getirme (Konsolosluk Kanalı)",
      icon: <Globe2 className="w-10 h-10 text-cyan-600" />,
      color: "from-cyan-50 to-white",
      borderColor: "border-cyan-100",
      districts: "Tüm İzmir İl ve İlçeleri",
      content: [
        "İzmir'deki fabrikanız veya ev hizmetiniz için yurt dışında bulunan personeli yasal yollarla Türkiye'ye getirme süreci.",
        "Adayın kendi ülkesindeki Türkiye Cumhuriyeti Büyükelçiliği/Konsolosluğuna yapacağı referans numarası başvurusu organize edilir.",
        "Konsolosluk referans numarası ile 10 gün içinde Türkiye'den Bakanlık sistemine online başvuru eksiksiz yüklenir.",
        "İzin onaylandığında yabancı çalışma vizesiyle İzmir'e gelir, havalimanından giriş yapar ve 30 gün içinde SGK girişi yapılır."
      ]
    }
  ];

  const districts = [
    { name: "Aliağa", desc: "Petrokimya tesisleri, demir-çelik fabrikaları, gemi söküm ve liman lojistiğinde yabancı mühendis ve teknik uzman izinleri." },
    { name: "Torbalı & Pancar OSB", desc: "Mobilya sanayi, makine üretimi, tütün ve gıda işleme tesislerinde nitelikli yabancı iş gücü ve operatör izinleri." },
    { name: "Çiğli & Atatürk OSB", desc: "Tekstil, makine, plastik ve kimya sanayi işletmeleri için 2026 kriterlerine tam uyumlu çalışma izni danışmanlığı." },
    { name: "Kemalpaşa OSB (KOSBİ)", desc: "Lojistik merkezleri, otomotiv yan sanayi, ambalaj ve gıda üretim fabrikaları için kurumsal izin süreçleri." },
    { name: "Çeşme & Alaçatı", desc: "Turizm sezonunda butik oteller, plaj işletmeleri ve restoranlar için yabancı servis, aşçı ve resepsiyon personeli." },
    { name: "Karşıyaka & Bostanlı", desc: "Geniş yerleşim alanlarında evde yaşlı ve hasta bakımı, çocuk bakıcılığı ve yatılı yabancı personel izinleri." },
    { name: "Bornova & Bayraklı", desc: "Plazalar bölgesi, şirket merkezleri, mühendislik ofisleri ve üniversite çevresi yabancı uzman istihdamı." },
    { name: "Gaziemir & ESBAŞ", desc: "Ege Serbest Bölgesi'ndeki uluslararası firmalar, havacılık, yazılım ve ihracatçı sanayi kuruluşları personel izinleri." }
  ];

  const processSteps = [
    "İzmir'deki işletmenizin sektörel yapısı, Türk çalışan sayısı ve mali kriterleri 2026 Bakanlık kriterlerine göre analiz edilir.",
    "Yabancı adayın diploma, denklik, pasaport ve mesleki uzmanlık evrakları mevzuata uygun şekilde kontrol edilir.",
    "İşveren adına Çalışma ve Sosyal Güvenlik Bakanlığı Uluslararası İşgücü e-İzin sistemi üzerinden vekalet yetkilendirmesi açılır.",
    "Bakanlık sistemine doğru meslek kodu, yasal ücret düzeyi ve görev tanımı ile dijital başvuru girişi yapılır.",
    "Değerlendirme süreci adım adım takip edilir; Bakanlıktan gelecek ek açıklama veya belge talepleri anında yanıtlanır.",
    "Onaylanan resmi çalışma izni kimlik kartı PTT Kargo ile doğrudan İzmir'deki işveren adresinize ulaştırılır.",
    "30 günlük yasal süre içerisinde SGK işe giriş bildirgesi verilerek personelin yasal çalışması başlatılır."
  ];

  const faqs = [
    {
      question: "İzmir'de yabancı çalışma izni başvurusu nereden yapılır?",
      answer: "Yabancı çalışma izni başvuruları İzmir İl Göç İdaresi'ne değil, doğrudan Ankara'daki Çalışma ve Sosyal Güvenlik Bakanlığı Uluslararası İşgücü Genel Müdürlüğü'nün merkezi e-izin sistemi üzerinden elektronik imza (e-imza) ile yapılır. Onaylanan çalışma izni kartı, kanunen ikamet (oturma) izni yerine de geçmektedir."
    },
    {
      question: "İzmir'de bir fabrikada yabancı çalıştırmak için 5 Türk şartı zorunlu mu?",
      answer: "Evet, genel kural olarak çalışma izni talep edilen işyerinde çalışacak her bir yabancı için en az 5 Türk vatandaşı sigortalı personelin istihdam edilmesi zorunludur. Ancak yabancı şirket ortaklarında, insani ikamet sahiplerinde veya bilişim/yazılım gibi bazı istisnai alanlarda bu kural esnetilebilmektedir."
    },
    {
      question: "Çeşme veya Alaçatı'daki otelim için yabancı personel iznini ne zaman almalıyım?",
      answer: "Turizm sektöründe çalışma izni onay süreçleri ortalama 3-6 hafta sürebilmektedir. Yaz sezonunda yoğunluk yaşanmaması ve kaçak çalıştırma cezalarından kaçınmak için başvuruların Mart, Nisan veya Mayıs aylarında başlatılması en doğru yaklaşımdır."
    },
    {
      question: "İzmir'de evde hasta bakıcısı çalıştırmak için hangi şartlar aranır?",
      answer: "Bakılacak kişinin 65 yaş üstünde olması veya sağlık kurulu raporu ile belgelenmiş kronik bakım ihtiyacının bulunması gerekir. İşveren ailenin yabancının maaşını ve sigortasını karşılayacak resmi gelirini belgelemesi şarttır. Ev hizmetlerinde temizlik adı altında çalışma izni verilmemektedir."
    },
    {
      question: "Kaçak yabancı çalıştırmanın 2026 yılı cezası ne kadardır?",
      answer: "2026 yılı itibarıyla çalışma izni bulunmayan yabancı çalıştıran işverenlere her bir yabancı için yaklaşık 56.000 TL'yi aşan idari para cezası uygulanmakta; ayrıca yabancının sınır dışı (deport) masrafları da işverenden tahsil edilmektedir."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Sarıbaş Danışmanlık - İzmir Yabancı Çalışma İzni Danışmanlığı",
        "description": "İzmir ve ilçelerinde fabrikalar, şirketler, oteller ve ev hizmetleri için yabancı çalışma izni başvuruları, 2026 kriter analizi ve yasal süreç danışmanlığı.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "İzmir",
          "addressRegion": "Ege",
          "addressCountry": "TR"
        },
        "telephone": "0541 955 2375",
        "url": "https://saribasdanismanlik.com/izmir-calisma-izni",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "İzmir Çalışma İzni Hizmetleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fabrika ve Sanayi Çalışma İzni"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hasta ve Yaşlı Bakımı İzni"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Turizm ve Otelcilik Çalışma İzni"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Yurtdışından İşçi Getirme"
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
        title="İzmir Yabancı Çalışma İzni Danışmanlığı 2026"
        description="İzmir'de yabancı çalışma izni başvurusu, fabrika personeli, hasta bakıcı, turizm ve yurtdışından işçi getirme işlemleri. 2026 kriterleri ile profesyonel süreç takibi."
        keywords="izmir çalışma izni, izmir yabancı çalışma izni 2026, izmir yabancı danışmanlık, aliağa yabancı işçi izni, torbalı yabancı personel, çiğli aosb çalışma izni, çeşme otel yabancı çalışma izni, karşıyaka yabancı bakıcı izni, sarıbaş danışmanlık"
        canonicalUrl="https://saribasdanismanlik.com/izmir-calisma-izni"
        schema={schemaData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#152a45] to-[#0f1d30] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-blue-200 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 text-blue-300" />
              <span>İzmir & Ege Bölgesi Kurumsal İzin Merkezi</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              İzmir Yabancı Çalışma İzni <br />
              <span className="text-blue-400">Danışmanlık Hizmetleri</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Aliağa'dan Torbalı'ya, Çiğli'den Çeşme'ye kadar İzmir genelindeki sanayi tesisleri, oteller ve ev hizmetleri için 2026 kriterlerine tam uyumlu, garantili yabancı çalışma izni süreç takibi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-900/20 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>İzmir Uzmanına WhatsApp'tan Danış</span>
              </a>
              <a
                href="#sektorler"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <span>Sektörleri İncele</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sektörler Bölümü */}
      <section id="sektorler" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              İzmir'de Çalışma İzni Aldığımız Sektörler
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              İzmir'in sanayi, turizm ve ev hizmetleri dinamiklerine uygun yasal çözümler üretiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-b ${sector.color} p-8 rounded-2xl border ${sector.borderColor} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="mb-6">{sector.icon}</div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{sector.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md mb-4 w-fit">
                    <Compass className="w-3.5 h-3.5" />
                    <span>{sector.districts}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {sector.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#1e3a5f] hover:text-blue-700 pt-4 border-t border-gray-100 transition-colors"
                >
                  <span>Bu Sektör İçin Başvuru Yap</span>
                  <ChevronDown className="w-4 h-4 transform -rotate-90" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* İzmir İlçe ve Sanayi Bölgeleri Matrisi */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              İzmir Genelinde Hizmet Verdiğimiz Merkezler
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              İzmir'in tüm ilçelerinde yerel dinamiklere hakim kadromuzla yanınızdayız.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* 2026 Hesaplayıcı Banner */}
      <CalculatorBanner />

      {/* 7 Adımda Süreç Takibi */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              İzmir Çalışma İzni Başvuru Süreci
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Başvurudan onay kartının teslimine kadar tüm aşamaları şeffaf bir şekilde yönetiyoruz.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {processSteps.map((step, idx) => (
                <div key={idx} className="bg-white border border-gray-200/80 rounded-xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 font-medium pt-1 text-base leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sıkça Sorulan Sorular (SSS) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              İzmir Çalışma İzni Sıkça Sorulan Sorular
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              İzmir'deki işverenlerin ve yabancı çalışanların en çok merak ettiği soruların yanıtları.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 bg-white hover:bg-gray-50 flex justify-between items-center transition-colors focus:outline-none"
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
                      <div className="p-6 pt-0 bg-white text-gray-600 border-t border-gray-100 text-base leading-relaxed">
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
          <h2 className="text-3xl font-bold mb-4">İzmir'de Yabancı Personel Çalıştırmak İçin Hemen Başvurun</h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Cezai yaptırımlarla karşılaşmamak ve çalışma izni başvurunuzu sorunsuz sonuçlandırmak için uzman ekibimizle iletişime geçin.
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

export default IzmirCalismaiznPage;
