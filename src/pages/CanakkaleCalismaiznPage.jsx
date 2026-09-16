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
  FileCheck
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import WhatsAppButton from '@/components/WhatsAppButton';

const CanakkaleCalismaiznPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const whatsappLink = "https://wa.me/905548743308?text=Merhaba,%20Çanakkale%20çalışma%20izni%20hakkında%20bilgi%20almak%20istiyorum.";

  const sectors = [
    {
      title: "Hasta ve Yaşlı Bakımı Çalışma İzni",
      icon: <Users className="w-10 h-10 text-rose-500" />,
      color: "from-rose-50 to-white",
      borderColor: "border-rose-100",
      content: [
        "Ev hizmetlerinde çalışacak yabancılar sadece hasta, yaşlı ve çocuk bakımı işlerinde çalıştırılabilir.",
        "Temizlikçi ve Ev Hizmetleri olarak çalışma izni alınması mümkün değildir.",
        "İşveren ve yaşlı kişinin yeterli seviyede gelir düzeyi olmalıdır. ( her yıl tutar değişmektedir )",
        "Yaşlı bakımında, bakılacak kişinin 65 yaş üstü olması genel kuraldır.",
        "İşveren, bakıma muhtaç kişinin birinci derece yakını olmak zorunda değildir."
      ]
    },
    {
      title: "Çocuk Bakımı Çalışma İzni",
      icon: <Baby className="w-10 h-10 text-blue-500" />,
      color: "from-blue-50 to-white",
      borderColor: "border-blue-100",
      content: [
        "15 yaşından küçük çocuğu olan aileler yabancı bakıcı çalıştırabilir.",
        "Annenin çalışıyor olması veya çalışamayacak durumda olduğunu belgelemesi başvuru şansını artırır.",
        "Bakıcının çocukla iletişim kurabilecek düzeyde dil bilgisine sahip olması önemlidir.",
        "Ailenin yeterli seviyede gelir düzeyi olmalıdır."
      ]
    },
    {
      title: "Tarım ve Hayvancılık Sektörü",
      icon: <Tractor className="w-10 h-10 text-green-600" />,
      color: "from-green-50 to-white",
      borderColor: "border-green-100",
      content: [
        "Çanakkale ilçeleri Bayramiç, Ezine, Yenice ve Biga başta olmak üzere yabancı afgan çoban ve yabancı tarım işçisi talepleri fazladır.",
        "Hayvanların bulunduğu yere ait sigorta dosyası olmalıdır.",
        "Tarım işletmesinin belirli büyüklükte araziye veya hayvan sayısına sahip olması gerekir.",
        "Geçici koruma kapsamındaki Suriyeliler için tarım çalışma izni muafiyetleri mevcuttur.",
        "Hayvancılık yapacaksalar, işverenlerin hayvan listeleri güncel olmalıdır."
      ]
    },
    {
      title: "Turizm ve Otelcilik",
      icon: <Hotel className="w-10 h-10 text-amber-500" />,
      color: "from-amber-50 to-white",
      borderColor: "border-amber-100",
      content: [
        "Çanakkale Ayvacık, Assos, Gökçeada ve Bozcaada otellerinde yabancı çalışma izni talepleri yaz sezonunda ortaya çıkmaktadır.", 
        "Turizm işletme belgeli otellerde ve tatil köylerinde yabancı personel çalıştırılabilir.",
        "Çalışan Türk sigortalı sayısı 5 olmalıdır. ( yabancının durumuna göre bu sayı 3’e inebilmektedir)",
        "İşyeri adresi ile sigorta dosyasının adresi  güncel ve doğru olmalıdır.",
        "Yabancının yapacağı işin yasal gereklilikleri bilinmeli ve doğru tanımlanması gerekmektedir."
      ]
    },
    {
      title: "Şahıs İşyeri / Şirket Çalışma İzni",
      icon: <Building2 className="w-10 h-10 text-indigo-600" />,
      color: "from-indigo-50 to-white",
      borderColor: "border-indigo-100",
      content: [
        "Çanakkale’de şahıs işyeri / şirket işyerinde çalışacak yabancı çalışma izni işlemleri için doğru başvuru çok önemlidir.",
        "Yabancı Türkiye’de ise mutlaka en az 6 ay süreli ikamet izni olmalıdır.",
        "İşyerine ait işyeri açma ve çalıştırma ruhsatı olmalıdır.",
        "Çalışan Türk sigortalı sayısı 5 olmalıdır. ( yabancının durumuna göre bu sayı 3’e inebilmektedir)",
        "Yabancının yapacağı işin yasal gereklilikleri bilinmeli ve doğru tanımlanması gerekmektedir."
      ]
    },
    {
      title: "Yurtdışı Yabancı Çalışma İzni",
      icon: <Globe2 className="w-10 h-10 text-cyan-600" />,
      color: "from-cyan-50 to-white",
      borderColor: "border-cyan-100",
      content: [
        "Yabancı henüz Türkiye'ye gelmemişse, Çanakkale'den yurtdışı çalışma izni evrakları hazırlanır. ",
        "Hazırlanan evraklar kendiisne gönderilir ve kendi ülkesindeki Türk Konsolosluğuna başvurur.",
        "Konsolosluktan alınan referans numarası ile yurtdışı çalışma izni başvurusu sistemde tamamlanır.",
        "Süreç yurt içi başvurulara göre daha uzun sürebilir (2-3 ay).",
        "Onay alındıktan sonra yabancı, çalışma vizesi ile Türkiye'ye giriş yapar."
      ]
    }
  ];

  const processSteps = [
    "Yabancının ve işletmenin durumuna göre dosyamız için gerekli olan belgeler toplanır.",
    "Yapılacak işin niteliğine göre yabancı ve işveren arasında geçerli olacak iş sözleşmesi tarafımızca hazırlanır.",
    "Uluslararası İşgücü Genel Müdürlüğü sistemi üzerinden işvereni temsilen elektronik imza ile adımıza vekalet alınır.",
    "Vekalet alındıktan sonra İşveren adına çalışma izni başvurumuz yapılır.",
    "1-2 ay içerisinde başvuru sonuçlanır. (Bakanlık yoğunluğuna göre değişebilir)",
    "Yurtdışı çalışma izni başvurularında bu süreç 2-3 ay olabilmektedir.",
    "Olumlu sonuçlanan başvuru için sigorta işlemleri yapılır ve kart teslim alınır."
  ];

  const faqs = [
    {
      question: "Çanakkale'de yabancı çalışma izni kaç günde çıkar?",
      answer: "Uluslararası İşgücü Genel Müdürlüğü'nün yapılan yabancı çalışma izni başvurularına cevap verme süresi 30 gündür. Başvuru dosyasının,işyerinin ve yabancının statüsüne göre ek evrak talep etme hakkına sahiptirler. Her ek evrak talebinde evrak müdürlüğe iletildikten sonra tekrar 30 günlük değerlendirme süresi başlar. Bu nedenle yabancı çalışma izni süreci genel olarak 1-2 ay sürmektedir."
    },
    {
      question: "İşverenim değişirse çalışma iznim ne olur?",
      answer: "Yabancı çalışma izinleri işyerine özel çıkmaktadır. Yabancının iş değiştirmesi durumunda tekrardan yeni işveren üzerinden çalışma izni alması gerekir."
    },
    {
      question: "Çalışma izni alan yabancı istediği her işte çalışabilir mi?",
      answer: "Çalışma izni alan yabancı istediği her işte çalışamaz. Sadece çalışma izni çıkartan işveren'in başvuruda belirttiği işyerinde çalışabilir."
    },
    {
      question: "İşveren, çalışma izni olan yabancının ücret ödemesini elden yapsa olur mu?",
      answer: "4857 sayılı İş Kanunu ve ilgili yönetmelikler çerçevesinde yabancının çalıştığı işyerinde 5 ve üzeri sigortalı çalışan var ise ücret elden ödenmek zorundadır. 4 ve aşağısında çalışan var ise elden verilebilir. Fakat ispat sorunu doğar. Bu nedenle bankadan yatırılması işverenin hukuki sorumluluğu açısından önemlidir. Hasta ve yaşlı bakımında çalışan yabancı çalışan veya çocuk bakıcılığı yapan yabancı çalışanların işverenleri de ileride hukuk karşısında ispat yükümlülüğü ile karşılaşmamak için yabancıların aylık ücret ödemelerini bankadan yapmaları daha sağlıklıdır. Yabancı açısından da ileride gelir belgesi sunmak adına bankadan aylık ödemelerini almaları avantajlıdır."
    },
    {
      question: "Yabancı çalışanın ve işverenin hakları nelerdir?",
      answer: "Türkiye'de yabancı çalışanlar ve işverenlerin hak ve yükümlülükleri temel olarak 6735 sayılı Uluslararası İşgücü Kanunu ve 4857 sayılı İş Kanunu ile düzenlenmiştir. İş kanunun'nda Türk vatandaşı çalışanların işverene karşı yükümlülüğü ne ise yabancıların da aynıdır."
    },
    {
      question: "Çalışma izni ücretini yabancı mı öder, işveren mi?",
      answer: "Çalışma izni ücretinin kim tarafından ödeneceği 6735 sayılı Uluslararası İşgücü Kanunu ve 4857 sayılı İş Kanunu kanunlarda ve yasaların yönetmeliklerde belirtilmemiştir. O nedenle yasal olarak sorumluluk işveren veya yabancı çalışan üzerindedir diye bir durum bulunmamaktadır. Genelde işveren ve işçinin bu konu üzerindeki anlaşmasına bağlıdır. Bazı işyerlerinde yabancı çalışma izni ücretini işveren öderken bazı durumlarda ise yabancı çalışan ödemektedir. Çanakkale'de yabancı çalışma izni için hazırladığımız bazı dosyalarda ise yabancı çalışma izni ücretini yarı yarıya yapan işveren ve çalışanlar da mevcutttur."
    }
  ];

  return (
    <>
      <SEOHead
        title="Çanakkale Çalışma İzni: 2026 Başvuru Rehberi ve Danışmanlık"
        description="Çanakkale'de yabancı çalışma izni nasıl alınır? Ev hizmetleri, tarım, turizm ve şirketler için çalışma izni başvuru şartları, gerekli belgeler ve 2026 danışmanlık ücretleri."
        keywords="Çanakkale çalışma izni, yabancı çalışma izni 2026, çalışma izni başvurusu Çanakkale, bakıcı çalışma izni, şirket çalışma izni"
      />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3)',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/95 via-[#2d5a8f]/80 to-black/60 mix-blend-multiply"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 mb-6 border border-white/20 rounded-full bg-white/10 backdrop-blur-md text-blue-100 text-sm font-medium tracking-wider shadow-lg">
            SARIBAŞ DANIŞMANLIK
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            Çanakkale Çalışma İzni:<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-100">
              2026 Başvuru Rehberi
            </span>
          </h1>
          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            Yabancı personelleriniz için yasal çalışma izni süreçlerini profesyonelce yönetiyoruz.
            Eksiksiz başvuru, hızlı sonuç ve yasal güvence için yanınızdayız.
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
            Ücretsiz Danışın
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
            className="bg-blue-50/50 p-8 md:p-12 rounded-3xl border border-blue-100 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Çanakkale'de Yabancı Çalışma İzni Nedir?</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Çanakkale çalışma izni, yabancıların şehirdeki işletmelerde yasal olarak çalışabilmesi için Uluslararası İşgücü Genel Müdürlüğü’nden alınan resmi belgedir.
              Çalışma izni olmadan bir yabancı çalıştırmak suçtur ve cezaları vardır.Çanakkale çalışma izni başvuruları için internet üzerinden işveren kaydı oluşturularak bu işveren üzerinden başvuru yapılmaktadır.
              Sarıbaş Danışmanlık olarak Çanakkale merkezli ofisimizle;
              Çanakkale çalışma izinlerinin alınmasında, hasta ve yaşlı bakımı, çocuk bakımı, tarım, sanayi,kendi işyerini açmak isteyen yabancılara ve turizm sektörlerinde yabancı personel çalıştırmak isteyen işverenlere profesyonel başvuru desteği sağlıyoruz.
            </p>
          </motion.div>
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
              Sektörlere Göre Çalışma İzni Türleri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              İhtiyacınız olan çalışma izni türünü seçin ve detayları inceleyin.
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
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-4 min-h-[56px] flex items-center">
                  {sector.title}
                </h3>
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
                  Detaylı Bilgi Al
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                  Gerekli Temel Belgeler
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">E-İmza (Elektronik İmza)</h4>
                    <p className="text-gray-600 text-sm mt-1">İşverene ait elektronik imza olmak zorundadır. Başvurular e-imza ile sisteme girilir.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Geçerli Pasaport</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Yabancıya ait geçerlilik tarihi olan pasaport gereklidir. (Pasaport süresi talep edilen çalışma izni süresinden en az 60 gün daha uzun olmalıdır).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Biyometrik Fotoğraf</h4>
                    <p className="text-gray-600 text-sm mt-1">Yabancıya ait son 6 ay içinde çekilmiş, arka fonu beyaz biyometrik fotoğraf.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors">
                  <AlertTriangle className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Ek Belgeler</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Diğer evraklar ise yabancının (diploma vb.) ve yapılacak işin statüsüne (vergi levhası, faaliyet belgesi, bilanço vb.) göre değişiklik göstermektedir.
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
              Adım Adım Başvuru Süreci
            </h2>
            <p className="text-gray-600">Sizin için süreci 7 adımda özetledik.</p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
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

      {/* International Labor Directorate Info */}
      <section className="py-16 bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Globe2 className="w-8 h-8 text-blue-300" />
                Uluslararası İşgücü Genel Müdürlüğü
              </h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Çalışma izinleri, Ankara'da bulunan Çalışma ve Sosyal Güvenlik Bakanlığı'na bağlı Uluslararası İşgücü Genel Müdürlüğü tarafından onaylanmaktadır.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <Building2 className="w-6 h-6 text-blue-300 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Merkez Adresi</h4>
                    <p className="text-blue-100 text-sm">İnönü Bulvarı no:42 Emek Mahallesi Çankaya/ ANKARA</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <Phone className="w-6 h-6 text-blue-300 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">İletişim Kanalları</h4>
                    <p className="text-blue-100 text-sm">ALO 170 (Çağrı merkezinde 6'ya basınız)</p>
                    <p className="text-blue-100 text-sm">0 (312) 296 66 00</p>
                    <p className="text-blue-100 text-sm mt-1">eizindestek@csgb.gov.tr</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
               {/* Decorative map placeholder or relevant image */}
               <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000" 
                alt="Ofis Çalışması" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-light italic">
                  "Çalışma izni başvuruları tamamen dijital ortamda, e-devlet ve e-izin sistemi üzerinden yürütülmektedir."
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
              Çalışma İzni Olmadan Yabancı Çalıştırmanın Cezası
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              İzinsiz yabancı çalıştırmak (kaçak işçi), hem işveren hem de yabancı şahıs için ciddi idari para cezaları gerektirir. Ayrıca yabancı şahsın sınır dışı edilmesi ve Türkiye'ye giriş yasağı alması söz konusu olabilir. 2026 yılı güncel ceza tutarlarını öğrenmek için blog yazımızı inceleyebilirsiniz.
            </p>
            <a 
              href="https://saribasdanismanlik.com/blog/2026-yabanci-calisma-izni-manisa-canakkale"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 hover:underline"
            >
              2026 Kaçak Çalıştırma Cezaları Hakkında Detaylı Bilgi →
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
              Sıkça Sorulan Sorular
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

export default CanakkaleCalismaiznPage;