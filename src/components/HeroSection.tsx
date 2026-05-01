import { useState } from "react";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText("188.127.241.27:30045");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="Главная" className="relative min-h-screen flex items-center grid-bg pt-16 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: "var(--neon-purple)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: "var(--neon-cyan)" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--neon-pink)" }} />

      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs mb-6 animate-slide-up-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Магазин работает 24/7
          </div>

          <h1 className="text-5xl md:text-7xl font-rajdhani font-bold leading-tight mb-6 animate-slide-up-2">
            <span className="gradient-text">MigeGrief</span>
            <br />
            <span className="text-foreground">SHOP</span>
          </h1>

          <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed animate-slide-up-3">
            Кейсы, донат и игровая валюта с мгновенной доставкой. Безопасные платежи, честные шансы, поддержка 24/7.
          </p>

          <div className="flex flex-wrap gap-3 animate-slide-up-4">
            <button onClick={() => scrollTo("Каталог")} className="btn-gradient px-6 py-3 rounded-xl text-base flex items-center gap-2">
              <span>Открыть каталог</span>
              <Icon name="ArrowRight" size={18} />
            </button>
            <button onClick={() => scrollTo("Кейсы")} className="btn-outline-neon px-6 py-3 rounded-xl text-base flex items-center gap-2">
              <Icon name="Package" size={18} />
              <span>Кейсы</span>
            </button>
          </div>

          <div className="flex gap-8 mt-10 animate-slide-up-5">
            {[["10к+", "Покупателей"], ["99.8%", "Успешных"], ["< 3мин", "Доставка"]].map(([val, label]) => (
              <div key={label}>
                <div className="text-2xl font-rajdhani font-bold neon-text-purple">{val}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center animate-float">
          <div className="relative flex flex-col items-center justify-center gap-6">
            <div className="glow-card rounded-2xl px-8 py-6 text-center neon-border-purple">
              <div className="text-xs text-muted-foreground mb-1 uppercase tracking-widest">Сервер</div>
              <div className="text-2xl font-rajdhani font-bold neon-text-cyan">MigeGrief</div>
              <div className="text-lg font-rajdhani text-foreground mt-1">188.127.241.27:30045</div>
              <button
                onClick={copyIP}
                className="mt-4 flex items-center gap-2 mx-auto btn-outline-neon px-4 py-2 rounded-lg text-sm transition-all"
              >
                <Icon name={copied ? "Check" : "Copy"} size={14} />
                <span>{copied ? "Скопировано!" : "Скопировать IP"}</span>
              </button>
            </div>
            <div className="glow-card rounded-xl px-5 py-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <div className="text-sm font-rajdhani font-bold text-green-400">Онлайн сейчас: 3-6 игроков</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
