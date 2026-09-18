import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const CalculatorBanner = ({ 
  title = "2026 Yabancı Çalışma İzni Maliyet ve Kriter Hesaplayıcı",
  subtitle = "İşletmeniz veya eviniz için yabancı personel çalıştırma kriterlerini karşılıyor musunuz? 2026 resmî harçlarını, maaş katsayılarını ve aylık SGK maliyetlerini saniyeler içinde ücretsiz hesaplayın.",
  cityName = ""
}) => {
  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e3a5f] via-[#1b3557] to-[#0f233d] p-8 md:p-12 shadow-2xl border border-blue-400/20 text-white"
        >
          {/* Background Decorative Glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-4 tracking-wide">
                <Sparkles className="w-4 h-4" />
                Ücretsiz Online Hesaplama Aracı
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 text-white">
                {cityName ? `${cityName} İçin ` : ''}
                {title}
              </h3>

              <p className="text-blue-100/90 text-base sm:text-lg mb-6 leading-relaxed max-w-2xl font-light">
                {subtitle}
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>2026 Resmî Harçları</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>5 Türk Şartı & Kriter Kontrolü</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Net Maaş & SGK Tablosu</span>
                </div>
              </div>
            </div>

            {/* Right Action Button Column */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-4">
              <Link
                to="/calisma-izni-maliyet-hesaplama"
                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-lg px-8 py-5 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <Calculator className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Hemen Hesapla</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-1.5 text-xs text-blue-200/80 text-center">
                <ShieldCheck className="w-4 h-4 text-blue-300" />
                <span>Kayıt gerektirmez, anında sonuç verir</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorBanner;
