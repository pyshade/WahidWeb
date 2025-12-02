import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gleamy-black border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[119px]">


          {/* Logo - Center */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="WahidWeb Logo" className="h-12 md:h-16 w-auto" />
          </Link>

          {/* Menu - Right */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 hover:text-gleamy-orange transition-colors"
            >
              <span className="hidden sm:inline text-sm uppercase tracking-wider">
                Menu
              </span>
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-[119px] left-0 right-0 bg-gleamy-black border-b border-white/10 py-8">
          <nav className="container mx-auto px-4 lg:px-8">
            <ul className="space-y-6">
              <li>
                <a
                  href="#home"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl hover:text-gleamy-orange transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl hover:text-gleamy-orange transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl hover:text-gleamy-orange transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl hover:text-gleamy-orange transition-colors"
                >
                  Portfolio
                </a>
              </li>
            </ul>

          </nav>
        </div>
      )}
    </header>
  );
}
