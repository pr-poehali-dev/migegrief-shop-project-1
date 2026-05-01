import { useState } from "react";
import Icon from "@/components/ui/icon";

const navItems = ["Главная", "Каталог", "Кейсы", "Донат", "Валюта", "Отзывы", "FAQ"];

interface NavbarProps {
  activeSection: string;
  scrollTo: (id: string) => void;
}

export default function Navbar({ activeSection, scrollTo }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (item: string) => {
    scrollTo(item);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border/50" style={{ background: "rgba(8,8,18,0.88)" }}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
            <Icon name="Zap" size={16} className="text-white" />
          </div>
          <span className="font-rajdhani font-bold text-xl gradient-text">MigeGrief</span>
          <span className="font-rajdhani text-xl text-muted-foreground">SHOP</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === item
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="btn-gradient px-4 py-2 rounded-lg text-sm hidden md:flex items-center gap-2">
            <span>Войти</span>
          </button>
          <button className="md:hidden text-muted-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 px-4 py-3 flex flex-col gap-1" style={{ background: "rgba(8,8,18,0.98)" }}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              className="text-left px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
