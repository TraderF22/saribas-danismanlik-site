import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatic scroll to top when path changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Anasayfa', path: '/' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    {
      name: 'Hizmetler',
      path: '/hizmetler',
      dropdown: [
        { name: 'Kısa Dönem İkamet İzni', path: '/hizmetler' },
        { name: 'Aile İkamet İzni', path: '/hizmetler' },
        { name: 'Öğrenci İkamet İzni', path: '/hizmetler' },
        { name: 'Uzun Dönem İkamet İzni', path: '/hizmetler' },
        { name: 'Çalışma İzni', path: '/hizmetler' },
        { name: 'Çanakkale Yabancılar ve Göç Danışmanlığı', path: '/canakkale-yabancilar-rehberi' },
        { name: 'Çanakkale Göç İdaresi Rehberi', path: '/canakkale-goc-idaresi' },
        { name: 'Çanakkale Çalışma İzni', path: '/canakkale-calisma-izni' },
        { name: 'Manisa Çalışma İzni', path: '/manisa-calisma-izni' },
        { name: 'Balıkesir Çalışma İzni', path: '/balikesir-calisma-izni' },
        { name: 'Bursa Çalışma İzni', path: '/bursa-calisma-izni' },
        { name: '2026 Çalışma İzni Maliyet Hesaplayıcı', path: '/calisma-izni-maliyet-hesaplama' }
      ]
    },
    { name: 'Maliyet Hesapla', path: '/calisma-izni-maliyet-hesaplama' },
    { name: 'Blog', path: '/blog' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Determine navbar styles based on scroll state
  const navClasses = `
  fixed top-0 w-full z-50
  bg-white text-[#1e3a5f]
  shadow-md
`;

  // For the mobile menu button and logo when scrolled vs not scrolled
  const logoColorClass = 'text-[#1e3a5f]';
  const linkHoverClass = 'hover:text-[#2d5a8f]';
  const activeLinkClass = scrolled ? 'border-[#1e3a5f]' : 'border-white';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className={`flex items-center space-x-2 flex-shrink-0 ${logoColorClass}`}>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.45)]">
                Sarıbaş Danışmanlık
              </div>

            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group h-20 flex items-center">
                  {item.dropdown ? (
                    <div className="relative h-full flex items-center">
                      <Link
                        to={item.path}
                        className={`flex items-center gap-1 transition-colors duration-300
  text-base lg:text-[17px] font-semibold whitespace-nowrap h-full
  ${linkHoverClass}
  ${!scrolled
                            ? '[-webkit-text-stroke:0.6px_rgba(0,0,0,0.55)] [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]'
                            : ''
                          }
  ${isActive(item.path) || item.dropdown.some(sub => isActive(sub.path)) ? `border-b-2 ${activeLinkClass}` : ''}
`}

                      >
                        {item.name}
                        <ChevronDown size={16} />
                      </Link>

                      {/* Dropdown Menu - Always white bg with dark text for readability */}
                      <div className="absolute top-full left-0 w-80 bg-white rounded-b-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block px-4 py-3 text-[15px] lg:text-[16px] text-gray-800 hover:bg-gray-100 hover:text-[#1e3a5f] transition-colors border-b last:border-0 border-gray-100"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center transition-colors duration-300
  text-base lg:text-[17px] font-semibold whitespace-nowrap h-full
  ${linkHoverClass}
  ${!scrolled
                          ? '[-webkit-text-stroke:0.6px_rgba(0,0,0,0.55)] [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]'
                          : ''
                        }
  ${isActive(item.path) ? `border-b-2 ${activeLinkClass}` : ''}
`}

                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button - ALWAYS visible (dark text) on the white background */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-100 text-[#1e3a5f]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Keep dark theme for contrast or consistency */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#1e3a5f] text-white overflow-hidden shadow-xl"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item, index) => (
                  <div key={index}>
                    {item.dropdown ? (
                      <div className="flex flex-col">
                        <div className={`flex items-center justify-between w-full rounded-lg transition-colors duration-300 hover:bg-[#2d5a8f] ${isActive(item.path) ? 'bg-[#2d5a8f]' : ''
                          }`}>
                          <Link
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex-grow py-2 px-4 text-left"
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleDropdown(index);
                            }}
                            className="p-3 focus:outline-none hover:bg-[#3d6a9f] rounded-r-lg transition-colors"
                          >
                            <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                          </button>
                        </div>

                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-[#152a45] rounded-lg overflow-hidden mt-1 ml-4"
                            >
                              {item.dropdown.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block py-2 px-4 text-sm text-gray-300 hover:text-white hover:bg-[#1e3a5f] transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-[#2d5a8f] ${isActive(item.path) ? 'bg-[#2d5a8f]' : ''
                          }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>


      {/* Footer */}
      <footer className="bg-[#1e3a5f] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <p className="text-xl font-bold mb-4">Sarıbaş Danışmanlık</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                2017'den beri yabancılar mevzuatı kapsamında profesyonel danışmanlık hizmeti sunuyoruz.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-lg font-semibold mb-4">Hızlı Bağlantılar</p>
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-lg font-semibold mb-4">İletişim</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Çanakkale: 0554 874 3308</p>
                <p>Manisa: 0541 955 2375</p>
                <p>E-posta: saribas.danismanlik@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Sarıbaş Danışmanlık. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;