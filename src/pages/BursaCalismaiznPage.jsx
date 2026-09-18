import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Baby, 
  Tractor, 
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
  Factory,
  Scissors
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import CalculatorBanner from '@/components/CalculatorBanner';

const BursaCalismaiznPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const whatsappLink = "https://wa.me/905548743308?text=Merhaba,%20Bursa%20çalışma%20izni%20hakkında%20bilgi%20almak%20istiyorum.";

  const sectors = [
    {
      title: "Tekstil ve Konfeksiyon Sanayi",
      icon: <Scissors className="w-10 h-10 text-violet-600" />,
      color: "from-violet-50 to-white",
      borderColor: "border-violet-100",
      districts: "Yıldırım (Vişne Caddesi), Osmangazi, Demirtaş OSB (DOSAB)",
      content: [
        "Bursa'nın lokomotifi olan bebe ve çocuk konfeksiyonu (Vişne Caddesi), dokuma ve iplik fabrikalarında yabancı personel istihdamı.",
        "İhracat odaklı tekstil işletmelerinde yabancı pazar uzmanı, tasarımcı ve nitelikli usta izinleri.",
        "İşletmede her bir yabancı çalışan için en az 5 Türk vatandaşı sigortalı şartının doğru planlanması.",
        "Tekstil sektöründeki teşvikler ve 2026 Çalışma Bakanlığı değerlendirme kriterlerine tam uyumlu dosya hazırlığı.",
        "İzinsiz kaçak işçi çalıştırma denetimlerine karşı yasal güvence ve sıfır ceza riski."
      ]
    },
    {
      title: "İnegöl Mobilya ve Ağaç İşleri",
      icon: <Factory className="w-10 h-10 text-amber-600" />,
      color: "from-amber-50 to-white",
      borderColor: "border-amber-100",
      districts: "İnegöl Mobilya İhtisas OSB, Ağaç İşleri Sanayi",
      content: [
        "Türkiye'nin mobilya başkenti İnegöl'deki imalat atölyeleri ve büyük fabrikalar için yabancı usta, montajcı ve döşemeci izinleri.",
        "Mobilya ihracatında kritik rol oynayan Arapça, Rusça ve İngilizce bilen yabancı satış/pazarlama personeli başvuruları.",
        "Şirketin ödenmiş sermayesi ve ciro kriterlerine göre en uygun başvuru tipinin belirlenmesi.",
        "İnegöl mobilya üreticilerinin bürokratik yükünü sıfıra indiren anahtar teslim dosya yönetimi."
      ]
    },
    {
      title: "Otomotiv Yan Sanayi ve Makine İmalatı",
      icon: <Building2 className="w-10 h-10 text-blue-600" />,
      color: "from-blue-50 to-white",
      borderColor: "border-blue-100",
      districts: "Nilüfer (NOSAB), Bursa OSB (BTSO), Hasanağa OSB",
      content: [
        "Otomotiv ana ve yan sanayi tedarikçisi fabrikalar için yabancı mühendis, Ar-Ge uzmanı ve teknik montaj elemanı izinleri.",
        "Yurtiçi veya yurtdışından transfer edilecek teknik personelin diploma denklik ve uzmanlık dosyasının Bakanlık standartlarında hazırlanması.",
        "Kurumsal şirketlerin toplu çalışma izni ve izin uzatma (yenileme) süreçlerinin takibi.",
        "Çalışma Bakanlığı sisteminde e-imza ile vekaletli başvuru ve hızlı sonuç takibi."
      ]
    },
    {
      title: "Hasta, Yaşlı ve Çocuk Bakımı",
      icon: <Users className="w-10 h-10 text-rose-500" />,
      color: "from-rose-50 to-white",
      borderColor: "border-rose-100",
      districts: "Nilüfer, Mudanya, Bademli, Osmangazi",
      content: [
        "Bursa'nın elit yerleşim bölgelerinde (Bademli, Balat, Mudanya) ev hizmetleri kapsamında yabancı hasta ve yaşlı bakıcısı izinleri.",
        "15 yaşından küçük çocukları olan çalışan aileler için yabancı yatılı veya gündüzlü dadı çalışma izinleri.",
        "Özbekistan, Türkmenistan, Gürcistan ve Filipinler uyruklu bakıcıların yasal izin ve oturma hakları.",
        "Ev işverenlerinin gelir yeterliliği ve bakıma muhtaç kişinin sağlık raporu ile eksiksiz başvuru oluşturma."
      ]
    },
    {
      title: "Tarım ve Hayvancılık Sektörü",
      icon: <Tractor className="w-10 h-10 text-green-600" />,
      color: "from-green-50 to-white",
      borderColor: "border-green-100",
      districts: "Karacabey, Mustafakemalpaşa, Yenişehir, İznik",
      content: [
        "Karacabey ve Mustafakemalpaşa ovalarında domates, mısır ve sebze tarımında çalışacak yabancı tarım işçisi izinleri.",
        "Yenişehir ve dağ ilçelerindeki büyükbaş/küçükbaş süt ve besi çiftliklerinde yabancı çoban ve besici istihdamı.",
        "Tarım işletmesinin ÇKS (Çiftçi Kayıt Sistemi) belgesi ve hayvan küpe varlığına göre kota planlaması.",
        "Afgan çobanlar ve yabancı işçiler için kırsal bölge yasal çalışma izin dosyasının hazırlanması."
      ]
    },
    {
      title: "Yurtdışından İşçi Getirme (Konsolosluk Kanalı)",
      icon: <Globe2 className="w-10 h-10 text-cyan-600" />,
      color: "from-cyan-50 to-white",
      borderColor: "border-cyan-100",
      districts: "Tüm Bursa İl ve İlçeleri",
      content: [
        "Türkiye'de bulunmayan yabancı nitelikli işçi veya uzmanların kendi ülkelerindeki Türk Konsolosluğuna başvuru süreci.",
        "Konsolosluk referans numarası alındıktan sonra Bursa'daki işveren adına sistemden başvurunun tamamlanması.",
        "Çalışma vizesi ile Türkiye'ye yasal giriş ve onaylanan çalışma kartıyla resmi SGK başlangıcı.",
        "Fabrikaların kalifiye eleman açığını yurtdışından yasal yolla kapatan profesyonel danışmanlık."
      ]
    }
  ];

  const districts = [
    { name: "Nilüfer (NOSAB & Görükle)", desc: "Otomotiv sanayi, ileri teknoloji imalatı, üniversite bölgesi yabancı uzmanlar ve elit konutlarda evde bakım izinleri." },
    { name: "İnegöl", desc: "Türkiye'nin mobilya başkenti; mobilya fabrikaları, ağaç işleri, ihracat pazarlama personeli ve yabancı usta izinleri." },
    { name: "Osmangazi & Yıldırım", desc: "Tekstil ve bebe konfeksiyonu (Vişne Ticaret Bölgesi), döküm sanayi, yabancı işçi ve Göç İdaresi işlemleri." },
    { name: "Karacabey & M.Kemalpaşa", desc: "Geniş tarım arazileri, salça ve gıda fabrikaları, büyükbaş süt-besi hayvancılığı ve yabancı çoban izinleri." },
    { name: "Demirtaş (DOSAB) & BTSO OSB", desc: "Bursa'nın dev organize sanayi bölgelerinde faaliyet gösteren fabrikalarda yabancı mühendis ve teknik kadro izinleri." },
    { name: "Mudanya & Bademli", desc: "Sahil şeridi ve lüks konutlarda yabancı çocuk bakıcısı (dadı), yaşlı ve hasta refakatçisi ev hizmetleri izinleri." },
    { name: "Yenişehir & İznik", desc: "Havalimanı lojistiği, zeytincilik, meyve üretimi ve kırsal kalkınma yabancı tarım işçisi izinleri." },
    { name: "Gürsu & Kestel", desc: "Tekstil dokuma tesisleri, meyve-sebze soğuk hava depoları ve sanayi personeli yasal izin süreçleri." }
  ];

  const processSteps = [
    "Bursa'daki fabrikanız, atölyeniz, çiftliğiniz veya evinizin durumuna göre yasal evrak listesi tespit edilir.",
    "2026 Çalışma Bakanlığı asgari ücret katsayılarına ve iş tanımına uygun resmi iş sözleşmesi tarafımızca düzenlenir.",
    "İşveren e-imzası ile Uluslararası İşgücü Genel Müdürlüğü sistemi üzerinden yetkilendirme alınır.",
    "Bakanlık sistemine (e-izin) tüm veriler eksiksiz girilerek başvuru resmi kayda alınır.",
    "Bakanlık değerlendirme aşaması adım adım izlenir; olası ek evrak talepleri anında karşılanır.",
    "Onaylanan çalışma izni kimlik kartı işyerinize veya ev adresinize kargo ile teslim edilir.",
    "Yasal 30 günlük süre içerisinde yabancının SGK işe giriş bildirgesi verilerek yasal süreç tamamlanır."
  ];

  const faqs = [
    {
      question: "Bursa'da yabancı çalışma izni başvurusu nereye yapılır?",
      answer: "Yabancı çalışma izni başvuruları Çalışma ve Sosyal Güvenlik Bakanlığı Uluslararası İşgücü Genel Müdürlüğü'nün merkezi e-izin portalı üzerinden dijital olarak yapılır. Bursa İl Göç İdaresi sadece ikamet (oturma) izinleriyle ilgilenir; çalışma izni çıktığında bu belge kanunen ikamet izni yerine de geçer."
    },
    {
      question: "Bursa fabrikalarında yabancı mühendis veya işçi çalıştırmak için 5 Türk şartı zorunlu mu?",
      answer: "Evet. Şirketlerde istihdam edilecek her 1 yabancı için aynı işyerinde en az 5 Türk vatandaşı sigortalı çalışması genel kuraldır. Ancak şirket sermayesi, ciro veya ihracat büyüklüğü gibi belirli kriterleri sağlayan bazı nitelikli teknik pozisyonlar için Bakanlıkça istisnalar değerlendirilebilmektedir."
    },
    {
      question: "İnegöl'deki mobilya atölyemize yabancı usta için çalışma izni alabilir miyiz?",
      answer: "İşletmenizin aktif vergi levhası, esnaf veya ticaret odası kaydı ve en az 5 Türk sigortalı çalışanı bulunuyorsa yabancı mobilya ustası veya döşemeci için çalışma izni alınabilir. Ayrıca yabancı personelin mesleki yeterliliği veya bonservisi dosyanın onay şansını güçlendirir."
    },
    {
      question: "Nilüfer veya Bademli'de evde hasta/yaşlı bakıcısı çalışma izni nasıl alınır?",
      answer: "Bakılacak kişinin 65 yaş ve üzeri olması ya da hekim raporuyla onaylı bakım ihtiyacının bulunması gerekir. İşverenin (veya birinci derece yakınının) yabancı bakıcının maaşı ve SGK primlerini karşılayabilecek resmi gelire sahip olması zorunludur."
    },
    {
      question: "Karacabey veya Yenişehir'de çiftlikte yabancı çoban çalıştırma şartları nelerdir?",
      answer: "İşletmeye ait aktif SGK dosyası, Çiftçi Kayıt Sistemi (ÇKS) belgesi ve İlçe Tarım Müdürlüğü'ne kayıtlı belirlenen asgari hayvan varlığı (küpe kaydı) bulunmalıdır. Şartları taşıyan çiftlik sahipleri yabancı çoban için başvuru yapabilir."
    },
    {
      question: "Bursa'da kaçak yabancı işçi çalıştırmanın 2026 yılı cezası ne kadardır?",
      answer: "Çalışma izni olmaksızın yabancı çalıştıran işverenlere 2026 yılı idari para cezası tarifesine göre yabancı başına çok yüksek tutarlarda para cezası uygulanır. Ayrıca yabancının sınır dışı edilme masrafları ve Türkiye'ye giriş yasağı giderleri de işverenden tahsil edilir."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Bursa Yabancı Çalışma İzni Danışmanlığı",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Sarıbaş Danışmanlık",
          "telephone": "0554 874 3308",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bursa",
            "addressRegion": "Marmara",
            "addressCountry": "TR"
          }
        },
        "areaServed": [
          "Bursa",
          "Nilüfer",
          "İnegöl",
          "Osmangazi",
          "Yıldırım",
          "Demirtaş",
          "Karacabey",
          "Mustafakemalpaşa",
          "Mudanya",
          "Yenişehir"
        ],
        "description": "Bursa tekstil, İnegöl mobilya, otomotiv sanayi, Karacabey tarım-hayvancılık ve evde hasta/yaşlı bakımı yabancı çalışma izni danışmanlığı."
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
        title="Bursa Çalışma İzni: 2026 Başvuru Rehberi ve Danışmanlık"
        description="Bursa'da yabancı çalışma izni nasıl alınır? Tekstil sanayi, İnegöl mobilya fabrikaları, Nilüfer otomotiv, evde hasta/yaşlı bakımı ve tarım-hayvancılık 2026 başvuru rehberi."
        keywords="bursa çalışma izni, bursa yabancı çalışma izni 2026, inegöl mobilya çalışma izni, bursa tekstil yabancı işçi izni, nilüfer bakıcı çalışma izni, bursa göç idaresi yabancı danışmanlık, bursa oturma izni, sarıbaş danışmanlık"
        canonicalUrl="https://saribasdanismanlik.com/bursa-calisma-izni"
        schema={schemaData}
      />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600)',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/95 via-[#162a45]/90 to-black/75 mix-blend-multiply"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 mb-6 border border-white/20 rounded-full bg-white/10 backdrop-blur-md text-blue-100 text-sm font-medium tracking-wider shadow-lg">
            SARIBAŞ DANIŞMANLIK • BURSA BÖLGE HİZMETİ
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            Bursa Çalışma İzni:<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-amber-200">
              2026 Başvuru ve Danışmanlık Rehberi
            </span>
          </h1>
          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            Tekstil atölyelerinden İnegöl mobilya üreticilerine, Nilüfer sanayi fabrikalarından evde bakıcı izinlerine kadar tüm yabancı çalışma izni süreçlerinde yasal güvence sunuyoruz.
          </p>
          
          <motion.a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all duration-300 ring-4 ring-green-500/20"
          >
            <Phone className="w-6 h-6 fill-current" />
            Bursa İçin Ücretsiz Danışın
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Introduction / Definition Snippet */}
      <section className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50/60 p-8 md:p-12 rounded-3xl border border-blue-100 shadow-sm"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-6">
              Bursa'da Yabancı Çalışma İzni ve Profesyonel Danışmanlık
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Türkiye sanayisinin ve ihracatının kalbi olan Bursa; tekstil, otomotiv, makine imalatı ve İnegöl mobilya sektörüyle yabancı işgücü istihdamının en yoğun olduğu metropollerdendir.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Sarıbaş Danışmanlık</strong> olarak; Bursa genelindeki sanayi tesislerinin, KOBİ'lerin, tarım-hayvancılık işletmelerinin ve ev işverenlerinin Çalışma ve Sosyal Güvenlik Bakanlığı izin süreçlerini eksiksiz yönetiyor, yüksek para cezası ve başvuru reddi risklerini ortadan kaldırıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Districts Breakdown Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-blue-800 font-semibold text-sm tracking-wider uppercase mb-2">
              <Compass className="w-4 h-4" />
              Bursa ve İlçelerinde Tam Kapsam
            </div>
            <h2 className="text-3xl font-bold text-[#1e3a5f]">
              Bursa Sanayi Havzaları ve İlçelerine Özel Çalışma İzni Alanları
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {districts.map((d, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-[#1e3a5f]">{d.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectoral Information Blocks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
              Bursa Sektörlerine Göre Çalışma İzni Çözümlerimiz
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              İşletmenizin faaliyet alanına özel hazırlanan yasal başvuru modellerimiz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group bg-gradient-to-b ${sector.color} border ${sector.borderColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full`}
              >
                <div className="mb-6 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2 min-h-[56px] flex items-center">
                  {sector.title}
                </h3>
                <div className="mb-4 inline-block text-xs font-semibold px-2.5 py-1 bg-blue-100/70 text-blue-900 rounded-md">
                  Bölge: {sector.districts}
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {sector.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                      <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-[#1e3a5f]/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full mt-auto bg-white border border-gray-200 text-[#1e3a5f] font-semibold py-3 rounded-xl hover:bg-[#1e3a5f] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  Bursa Dosyanız İçin Danışın
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Hesaplayıcı Banner */}
      <CalculatorBanner cityName="Bursa" />

      {/* Required Documents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1e3a5f] rounded-3xl p-1 md:p-2 shadow-2xl overflow-hidden">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <FileText className="w-8 h-8 text-[#1e3a5f]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f]">
                  Bursa Başvurularında İstenen Temel Belgeler
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">İşverenin E-İmzası (Elektronik İmza)</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Şirket imza sirkülerindeki yetkili adına veya ev işvereninin şahsına ait aktif e-imza zorunludur.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Geçerli Pasaport & Biyometrik Fotoğraf</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Yabancıya ait pasaport süresi talep edilen izin süresinden en az 60 gün daha uzun olmalı ve son 6 aya ait biyometrik fotoğraf eklenmelidir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Şirket Resmi Belgeleri & Bilanço</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Son yıla ait vergi dairesi onaylı bilanço ve gelir tablosu, güncel ticaret sicil gazetesi ve faaliyet belgesi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                  <AlertTriangle className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Mesleki Diploma veya Uzmanlık Belgesi</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Mühendis, uzman, tasarımcı veya teknik kadrolar için noter onaylı Türkçe tercümeli diploma veya bonservis belgeleri gereklidir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              Bursa'da Adım Adım Başvuru Prosedürü
            </h2>
            <p className="text-gray-600">Süreci sizin adınıza bürokrasiye takılmadan 7 adımda tamamlıyoruz.</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full">
                    <div className={`bg-white p-6 rounded-2xl shadow-md border-l-4 ${index % 2 === 0 ? 'border-blue-500 text-right' : 'border-green-500 text-left'}`}>
                      <span className="text-5xl font-black text-gray-100 absolute -mt-10 mx-4 opacity-50 select-none">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 font-medium relative z-10">{step}</p>
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10 shrink-0">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bursa İl Göç İdaresi Bilgisi Section */}
      <section className="py-16 bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-blue-300" />
                Bursa İl Göç İdaresi Müdürlüğü Bilgileri
              </h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Yabancı uyrukluların ilk ikamet müracaatları, adres bildirimleri ve kayıt güncellemeleri Bursa İl Göç İdaresi tarafından yürütülür. Çalışma izni onaylandığında ise bu kart yasal olarak oturma izni yerine geçer.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <MapPin className="w-6 h-6 text-blue-300 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Müdürlük Adresi</h4>
                    <p className="text-blue-100 text-sm">Veysel Karani Mah. Sevilen Sok. No:2 Osmangazi / BURSA</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <Phone className="w-6 h-6 text-blue-300 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">İletişim & Santral</h4>
                    <p className="text-blue-100 text-sm">0 (224) 252 64 64 / 65</p>
                    <p className="text-blue-100 text-sm mt-1">bursa@goc.gov.tr</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" 
                alt="Bursa Danışmanlık ve Çalışma İzni" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-light italic">
                  "Bursa sanayisinde yabancı çalışanlarınızın yasal izin süreçlerini güvenle takip ediyoruz."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Penalties Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-red-500"
          >
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Bursa'da İzinsiz Yabancı Çalıştırmanın Cezai Sorumluluğu
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Bursa'da SGK ve Emniyet denetimlerinde çalışma izinsiz yabancı çalıştırdığı tespit edilen fabrikalara ve atölyelere kişi başına on binlerce liralık idari para cezası kesilir. Yabancı çalışan sınır dışı edilir ve işletmenin ilerleyen dönemlerdeki çalışma izni başvuruları risk altına girer.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 hover:underline"
            >
              Ceza Riski Almadan Personelinizi Yasal Hale Getirin →
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1e3a5f] flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8" />
              Bursa Çalışma İzni Sıkça Sorulan Sorular
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-[#1e3a5f] pr-4">{faq.question}</span>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600 border-t border-gray-200 pt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BursaCalismaiznPage;
