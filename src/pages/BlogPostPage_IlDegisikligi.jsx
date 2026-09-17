import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Link2, Flag, AlertTriangle, CheckCircle2, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import SEOHead from '@/components/SEOHead';

const BlogPostPage_IlDegisikligi = () => {
  const publishDate = "2026-02-25";
  const readTime = "8 dk";
  const author = "Sarıbaş Danışmanlık Uzman Kadrosu";

  const handleShare = (platform) => {
    toast({
      title: "Paylaşıldı!",
      description: `Bu makale ${platform} üzerinden başarıyla paylaşıldı (Simülasyon).`,
    });
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Bağlantı Kopyalandı!",
      description: "Makale bağlantısı panoya kopyalandı.",
    });
  };

  return (
    <>
      <SEOHead 
        title="İnsani İkamet, Uluslararası Koruma ve Geçici Koruma: Farklı Şehirde Çalışabilir mi?"
        description="Hatay'da kayıtlı geçici koruma sahibi Manisa, Çanakkale veya İzmir'de çalışabilir mi? 7 iş günü kuralı, il kotası ve yasal prosedürler."
        canonicalUrl="https://saribasdanismanlik.com/blog/il-degisikligi-calisma-izni"
      />

      <div className="bg-slate-50 min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex mb-8 text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap pb-2">
            <Link to="/" className="hover:text-[#1e3a5f] transition-colors">Anasayfa</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-[#1e3a5f] transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1e3a5f] truncate">İl Değişikliği ve Çalışma İzni</span>
          </nav>

          <article className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
            {/* Hero Section */}
            <header className="p-8 md:p-12 border-b border-slate-50 bg-gradient-to-br from-white to-slate-50">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-blue-100 text-[#1e3a5f] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Çalışma İzni
                </span>
                <div className="flex items-center text-slate-400 text-sm gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {publishDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {readTime}
                  </span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1e3a5f] leading-tight mb-8">
                İnsani İkamet, Uluslararası Koruma ve Geçici Koruma: Farklı Şehirde Çalışabilir mi?
              </h1>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div>
                  <p className="text-slate-900 font-bold">{author}</p>
                  <p className="text-slate-500 text-sm">Göç ve Çalışma Mevzuatı Birimi</p>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="px-8 md:px-12 pt-8">
              <div className="w-full rounded-2xl overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1593519619064-69fe41155c9a" 
                  alt="insani-ikamet-uluslararasi-koruma-calisma-izni" 
                  className="w-full max-h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-12">
              {/* Section 2 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
                  Geçici Koruma Statüsü Nedir ve Şehir Değişikliğinde Hangi Kurallar Geçerlidir?
                </h2>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
                  <p>
                    Geçici koruma altındaki yabancılar için şehir değişikliği, sadece fiziksel bir yer değişimi değil, aynı zamanda çalışma izni ve yasal hakların devamlılığı açısından kritik bir süreçtir. Türkiye'deki yasal düzenlemeler, yabancıların kayıtlı oldukları iller dışında çalışmalarını belirli şartlara ve kotalara bağlamıştır. Bu rehberde, özellikle deprem bölgesi (Hatay gibi) illerinden Manisa, Çanakkale ve İzmir gibi sanayi/tarım merkezlerine geçiş süreçlerini inceleyeceğiz.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
                  Hatay'da Kayıtlı Geçici Koruma Sahibi Manisa veya Çanakkale'de Çalışabilir mi?
                </h2>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    Geçici Koruma Altındaki Yabancılar İçin Temel Kural
                  </h3>
                  <blockquote className="border-l-4 border-red-500 bg-red-50/50 p-6 rounded-r-xl shadow-sm italic text-slate-700 text-lg">
                    "Geçici koruma altındaki yabancılar (Suriye vatandaşları), kural olarak kayıtlı oldukları (geçici koruma kimlik belgesini aldıkları) ilde ikamet etmek ve çalışmak zorundadırlar."
                  </blockquote>
                  <p className="text-slate-600 leading-relaxed">
                    Bu kuralın istisnası, çalışılacak ildeki işverenin <Link to="/services" className="text-blue-600 font-semibold underline underline-offset-4 decoration-blue-200">çalışma izni</Link> başvurusunda bulunması ve Bakanlığın bu izni onaylamasıdır. İzin onaylandığı an, yabancı için yasal şehir değişikliği süreci başlar.
                  </p>

                  <h3 className="text-xl font-bold text-[#1e3a5f] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    İl Dışı Çalışma İzni Başvurusu Adımları
                  </h3>
                  <ol className="grid gap-4 list-none pl-0">
                    {[
                      { step: "1", title: "İşveren Başvurusu", desc: "Yeni ildeki işveren, Çalışma ve Sosyal Güvenlik Bakanlığı üzerinden başvuru yapar." },
                      { step: "2", title: "Göç İdaresi Onayı", desc: "Bakanlık, ilgili ilin Göç İdaresi'nden görüş alarak yabancının dosyasını değerlendirir." },
                      { step: "3", title: "Kota ve İhtiyaç Analizi", desc: "Manisa, İzmir gibi illerdeki yabancı çalışan kotası ve işin niteliği kontrol edilir." }
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <span className="flex-shrink-0 w-8 h-8 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold">{item.step}</span>
                        <div>
                          <p className="font-bold text-[#1e3a5f]">{item.title}</p>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>

                  <h3 className="text-xl font-bold text-[#1e3a5f] flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    Çanakkale, İzmir ve Diğer İllerde Çalışma Koşulları
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Çanakkale ve İzmir gibi iller, stratejik konumları ve gelişmiş sanayileri nedeniyle il dışından gelen yabancı işgücü için belirli kısıtlamalar uygulayabilmektedir. Sarıbaş Danışmanlık olarak biz, bu illerdeki güncel kotaları anlık takip ederek başvurularınızın reddedilme riskini minimize ediyoruz.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="bg-blue-50/30 p-8 rounded-3xl border border-blue-100">
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">İnsani İkamet ve Uluslararası Koruma Sahipleri İçin Şehir Değişikliği</h2>
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-blue-800">Çalışma İzni İkamet Yerine Geçer</h3>
                  <blockquote className="border-l-4 border-orange-400 bg-orange-50/50 p-6 rounded-r-xl italic text-slate-700">
                    "6735 Sayılı Uluslararası İşgücü Kanunu uyarınca, alınan çalışma izni resmi olarak ikamet izni yerine de geçer."
                  </blockquote>
                  <p className="text-slate-600">
                    Bu durum, özellikle uluslararası koruma ve insani ikamet sahipleri için büyük bir avantajdır. Ancak şehir değişikliği yapıldığında, bu durumun mutlaka yeni ildeki kurumlara bildirilmesi gerekir.
                  </p>
                </div>
              </section>

              {/* Section 5 - Critical Warning */}
              <section className="bg-red-50 p-8 rounded-3xl border border-red-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <AlertTriangle className="w-32 h-32 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  ⚠️ DİKKAT: İl Değişikliğinde 7 İş Günü Kuralı (KRİTİK)
                </h2>
                <div className="space-y-6 relative z-10">
                  <h3 className="text-lg font-bold text-red-900">Bildirim Yükümlülüğü Nedir?</h3>
                  <blockquote className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-600">
                    <p className="font-bold text-red-700">
                      Yabancı kişi, çalışma izni çıktıktan sonra bir şehirden başka bir şehre taşınacaksa, 7 iş günü içinde bağlı olduğu (yeni taşındığı yerdeki) İl Göç İdaresi Müdürlüğü'ne giderek adres beyanında bulunmalı ve kayıtlarını güncellemelidir.
                    </p>
                  </blockquote>
                  <div className="grid gap-4 md:grid-cols-2 mt-4">
                    <div className="bg-white/60 p-4 rounded-xl">
                      <p className="font-bold text-[#1e3a5f] mb-2">AKS Neden Önemlidir?</p>
                      <p className="text-sm text-slate-600">Adres Kayıt Sistemi'ndeki uyuşmazlıklar, çalışma izninin iptal edilmesine neden olabilir.</p>
                    </div>
                    <div className="bg-white/60 p-4 rounded-xl">
                      <p className="font-bold text-[#1e3a5f] mb-2">Gecikme Sonuçları</p>
                      <blockquote className="text-sm text-red-600 font-semibold">
                        "7 iş günlük bildirim süresinin geçirilmesi, ağır idari para cezalarına ve sınır dışı (deport) riskine yol açabilir."
                      </blockquote>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 - FAQ */}
              <section>
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8">Sık Sorulan Sorular (FAQ)</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-slate-200">
                    <AccordionTrigger className="text-[#1e3a5f] font-semibold hover:no-underline">Hatay'da kayıtlı bir Suriyeli, Manisa'da çalışmaya başlayabilir mi?</AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Evet, ancak öncelikle Manisa'daki işverenin Bakanlıktan çalışma izni onayı alması gerekir. İzin onaylanmadan çalışmaya başlamak yasaktır.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-slate-200">
                    <AccordionTrigger className="text-[#1e3a5f] font-semibold hover:no-underline">Çalışma izni alındıktan sonra başka bir ile taşınabilir miyim?</AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Çalışma izni hangi ildeki işveren için alındıysa o ilde taşınabilir. Eğer başka bir ilde iş değişikliği yapılacaksa, süreç baştan başlamalıdır.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-slate-200">
                    <AccordionTrigger className="text-[#1e3a5f] font-semibold hover:no-underline">İzmir'de çalışma izni alıp Çanakkale'ye taşıyabilir miyim?</AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Hayır, çalışma izni "işveren ve adres" bazlıdır. Şehir değişikliği iş değişikliği anlamına geliyorsa yeni izin şarttır.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-slate-200">
                    <AccordionTrigger className="text-[#1e3a5f] font-semibold hover:no-underline">7 iş günü kuralını kaçırırsam ne olur?</AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      İdari para cezası uygulanır ve daha da önemlisi yabancının dosyası "olumsuz" statüsüne geçerek sınır dışı riski oluşur.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="border-slate-200">
                    <AccordionTrigger className="text-[#1e3a5f] font-semibold hover:no-underline">Geçici koruma kimlik belgesi ile başka şehirde çalışabilir miyim?</AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Hayır, sadece kimlik belgesi çalışma hakkı vermez. Mutlaka geçerli bir çalışma izni kartınızın olması gerekir.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              {/* Section 7 & 8 - CTA */}
              <section className="bg-gradient-to-r from-[#1e3a5f] to-blue-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-blue-200">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Neden Profesyonel Danışmanlık Almalısınız?</h2>
                    <p className="mb-6 text-blue-100">
                      Göç politikaları sürekli güncellenmektedir. Hatalı bir bildirim, hem işveren hem de çalışan için geri dönülemez hukuki sorunlara yol açabilir.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {["Yasal prosedür yönetimi", "7 iş günü kuralı takibi", "Göç İdaresi koordinasyonu", "Hızlı başvuru süreci"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-blue-50 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-blue-400" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
                    <p className="text-xl font-bold mb-6 italic">"Sarıbaş Danışmanlık ile Güvenli Çalışma İzni Süreci"</p>
                    <Button 
                      asChild
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-8 rounded-xl w-full text-lg shadow-lg hover:scale-[1.02] transition-all"
                    >
                      <a href="https://wa.me/905419552375?text=Merhaba,%20il%20değişikliği%20çalışma%20izni%20hakkında%20bilgi%20almak%20istiyorum.">
                        Şimdi Ücretsiz Danışın
                      </a>
                    </Button>
                  </div>
                </div>
              </section>

              {/* Section 9 - Legal Basis */}
              <section className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-red-50 p-3 rounded-xl">
                    <Flag className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#1e3a5f]">Yasal Dayanak ve Güven Sinyali</h2>
                    <p className="text-sm text-slate-500">6458 Sayılı YUKK ve 6735 Sayılı Kanunlara uygun süreç yönetimi.</p>
                  </div>
                </div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Resmi Mevzuat Takibi ile Güncel Bilgi
                </div>
              </section>
            </div>

            {/* Share Section */}
            <footer className="bg-slate-50 p-8 border-t border-slate-200">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[#1e3a5f] font-bold flex items-center gap-2">
                  <Share2 className="w-5 h-5" /> Bu makaleyi paylaşın
                </p>
                <div className="flex gap-4">
                  <button onClick={() => handleShare('Facebook')} className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleShare('Twitter')} className="w-10 h-10 bg-sky-400 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button onClick={copyLink} className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                    <Link2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </footer>
          </article>

          {/* Related Articles */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8">İlginizi Çekebilecek Diğer Yazılar</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Çanakkale Yabancı İşlemleri Rehberi", link: "/canakkale-yabancilar-rehberi" },
                { title: "Manisa Çalışma İzni Başvurusu", link: "/manisa-calisma-izni" },
                { title: "Çanakkale Çalışma İzni Şartları", link: "/canakkale-calisma-izni" }
              ].map((item, i) => (
                <Link 
                  key={i} 
                  to={item.link}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <h3 className="text-[#1e3a5f] font-bold group-hover:text-blue-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-blue-600 font-bold mt-4 flex items-center gap-1 uppercase tracking-wider">
                    Okumaya Başla <ArrowLeft className="w-3 h-3 rotate-180" />
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage_IlDegisikligi;