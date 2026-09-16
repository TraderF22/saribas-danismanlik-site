import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 'calisma-izni-degerlendirme-kriterleri',
      title: 'Çalışma İzni Değerlendirme Kriterleri 2026: Sermaye, İstihdam ve Mali Yeterlilik Şartları',
      excerpt: "2026 yılı güncel çalışma izni değerlendirme kriterleri: 500.000 TL sermaye şartı, 1'e 5 istihdam kuralı, şirket ortağı yabancılar için özel kriterler ve Manisa-Çanakkale işverenleri için pratik rehber.",
      category: 'Çalışma İzni',
      date: '2026-03-08',
      readTime: '10 dk',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
      altText: 'calisma-izni-degerlendirme-kriterleri-2026-sermaye-istihdam-mali-yeterlilik',
      slug: 'calisma-izni-degerlendirme-kriterleri-2026'
    },
    {
      id: 'il-degisikligi-calisma-izni',
      title: 'İnsani İkamet, Uluslararası Koruma ve Geçici Koruma: Farklı Şehirde Çalışabilir mi?',
      excerpt: "Hatay'da kayıtlı geçici koruma sahibi Manisa, Çanakkale veya İzmir'de çalışabilir mi? 7 iş günü kuralı, il kotası ve yasal prosedürler.",
      category: 'Çalışma İzni',
      date: '2026-02-25',
      readTime: '8 dk',
      image: 'https://images.unsplash.com/photo-1593519619064-69fe41155c9a',
      altText: 'insani-ikamet-uluslararasi-koruma-calisma-izni',
      slug: 'il-degisikligi-calisma-izni'
    },
    {
      id: 1,
      title: 'Manisa ve Çanakkale Yabancı Çalışma İzni Rehberi 2026: Güncel Cezalar ve Yasal Yükümlülükler',
      excerpt: "6735 Sayılı Kanun uyarınca 2026 yılında çalışma izni olmayan yabancı çalıştıran işverenlere uygulanan 102.503 TL'lik rekor ceza ve sınır dışı maliyetleri hakkında bilmeniz gereken her şey.",
      category: 'Çalışma İzni',
      date: '2026-01-19',
      readTime: '9 dk',
      image: 'https://images.unsplash.com/photo-1595847902982-f20169d4ddad',
      slug: '2026-yabanci-calisma-izni-manisa-canakkale'
    },
    {
      id: 2,
      title: 'Çalışma İzni Başvurusu Nasıl Yapılır?',
      excerpt: "Türkiye'de çalışma izni alma sürecinin tüm detaylarını, gerekli belgeleri ve başvuru aşamalarını adım adım keşfedin.",
      category: 'Çalışma İzni',
      date: '2026-01-05',
      readTime: '5 dk',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
      slug: 'calisma-izni-basvurusu-nasil-yapilir'
    },
    {
      id: 3,
      title: 'İkamet İzni Türleri Nelerdir?',
      excerpt: "Kısa dönem, aile, öğrenci ve uzun dönem ikamet izinleri arasındaki farkları ve başvuru kriterlerini öğrenin.",
      category: 'İkamet İzni',
      date: '2026-01-03',
      readTime: '7 dk',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
      slug: 'ikamet-izni-turleri-nelerdir'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Blog - Yabancılar Mevzuatı ve Çalışma İzni Rehberi | Sarıbaş Danışmanlık"
        description="Manisa ve Çanakkale başta olmak üzere Türkiye'deki yabancılar mevzuatı, çalışma izni süreçleri ve ikamet izni hakkında güncel bilgiler."
      />

      <div className="pt-20">
        <section className="bg-[#1e3a5f] py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Bilgi Merkezi & Blog
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 max-w-2xl mx-auto"
            >
              Yabancılar hukuku ve çalışma izinleri konusundaki en güncel yasal düzenlemeler ve rehber içerikler.
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.altText || post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#1e3a5f] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('tr-TR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-[#1e3a5f] mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#1e3a5f] font-bold hover:text-blue-600 transition-colors"
                    >
                      Devamını Oku <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;