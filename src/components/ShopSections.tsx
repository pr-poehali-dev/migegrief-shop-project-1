import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/95c479d9-e6b9-4e9c-ab0b-233b9e341489/files/6b3a2d34-d6b4-4058-b18a-5c75ee965ae8.jpg";
const CASE_IMAGE = "https://cdn.poehali.dev/projects/95c479d9-e6b9-4e9c-ab0b-233b9e341489/files/3f05dfee-1f62-4e0f-8bbc-c762cf678c9e.jpg";
const DONATE_IMAGE = "https://cdn.poehali.dev/projects/95c479d9-e6b9-4e9c-ab0b-233b9e341489/files/0b62314a-1866-4dae-b102-ef141f56bc89.jpg";

const cases = [
  { id: 1, name: "Кейс с Реликами", price: "249₽", chance: "Редкий: 15%", color: "from-purple-600 to-blue-600" },
  { id: 2, name: "Кейс с Валютой", price: "149₽", chance: "Редкий: 8%", color: "from-cyan-600 to-blue-600" },
  { id: 3, name: "Легендарный Кейс", price: "999₽", chance: "Редкий: 40%", color: "from-yellow-500 to-pink-600" },
  { id: 4, name: "Кейс с Китами", price: "699₽", chance: "Редкий: 20%", color: "from-blue-600 to-cyan-500" },
  { id: 5, name: "Кейс Домера", price: "349₽", chance: "Редкий: 12%", color: "from-green-600 to-teal-600" },
  { id: 6, name: "Кейс с Донат Вещами", price: "499₽", chance: "Редкий: 18%", color: "from-pink-600 to-purple-600" },
];

const donates = [
  { id: 1,  name: "Hero",     price: "9₽",    icon: "Zap",     popular: false },
  { id: 2,  name: "Titan",    price: "15₽",   icon: "Shield",  popular: false },
  { id: 3,  name: "Avenger",  price: "25₽",   icon: "Sword",   popular: false },
  { id: 4,  name: "Overlord", price: "30₽",   icon: "Star",    popular: false },
  { id: 5,  name: "Magister", price: "45₽",   icon: "BookOpen",popular: false },
  { id: 6,  name: "Imperator",price: "65₽",   icon: "Crown",   popular: false },
  { id: 7,  name: "Dragon",   price: "99₽",   icon: "Flame",   popular: true  },
  { id: 8,  name: "Tiger",    price: "175₽",  icon: "Zap",     popular: false },
  { id: 9,  name: "Bunny",    price: "225₽",  icon: "Rabbit",  popular: false },
  { id: 10, name: "Rabbit",   price: "325₽",  icon: "Heart",   popular: false },
  { id: 11, name: "Vampire",  price: "500₽",  icon: "Moon",    popular: false },
  { id: 12, name: "Hydra",    price: "700₽",  icon: "Layers",  popular: false },
  { id: 13, name: "Cobra",    price: "925₽",  icon: "Zap",     popular: false },
  { id: 14, name: "God",      price: "999₽",  icon: "Sparkles",popular: false },
  { id: 15, name: "Pegas",    price: "800₽",  icon: "Wind",    popular: false },
  { id: 16, name: "D.Helper", price: "1310₽", icon: "Wrench",  popular: false },
  { id: 17, name: "Winner",   price: "1700₽", icon: "Trophy",  popular: false },
  { id: 18, name: "Sponsor",  price: "1700₽", icon: "Diamond", popular: false },
];

const currencies = [
  { from: "RUB", to: "COINS", rate: "1₽ = 10 монет", icon: "ArrowRightLeft" },
  { from: "COINS", to: "GEMS", rate: "100 монет = 1 кристалл", icon: "Gem" },
  { from: "RUB", to: "GEMS", rate: "1₽ = 0.1 кристалл", icon: "TrendingUp" },
];

interface ShopSectionsProps {
  scrollTo: (id: string) => void;
}

export default function ShopSections({ scrollTo }: ShopSectionsProps) {
  const [rubAmount, setRubAmount] = useState("");
  const coins = parseFloat(rubAmount) > 0 ? (parseFloat(rubAmount) * 10).toLocaleString() : "0";

  return (
    <>
      {/* CATALOG */}
      <section id="Каталог" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16" data-section="Каталог">
            <div className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 text-cyan-400 text-xs mb-4">КАТАЛОГ</div>
            <h2 className="text-4xl md:text-5xl font-rajdhani gradient-text mb-4">Что мы предлагаем</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Три направления — кейсы, донат и валюта. Всё в одном месте.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 section-reveal">
            {[
              { icon: "Package", title: "Кейсы", desc: "Открывай кейсы с реальными шансами. Честная система, прозрачная статистика.", img: CASE_IMAGE, color: "from-purple-600 to-blue-600", section: "Кейсы" },
              { icon: "Gem", title: "Донат", desc: "Мгновенное пополнение баланса в любимой игре. Безопасно и быстро.", img: DONATE_IMAGE, color: "from-pink-600 to-purple-600", section: "Донат" },
              { icon: "Coins", title: "Валюта", desc: "Выгодный обмен игровой валюты. Лучший курс на рынке.", img: HERO_IMAGE, color: "from-cyan-600 to-blue-600", section: "Валюта" },
            ].map((item) => (
              <div key={item.title} className="glow-card rounded-2xl overflow-hidden cursor-pointer group" onClick={() => scrollTo(item.section)}>
                <div className="relative h-44 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon name={item.icon as "Package"} size={28} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-rajdhani font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="Кейсы" className="py-24 grid-bg">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16" data-section="Кейсы">
            <div className="inline-block px-3 py-1 rounded-full border border-purple-500/30 text-purple-400 text-xs mb-4">КЕЙСЫ</div>
            <h2 className="text-4xl md:text-5xl font-rajdhani gradient-text mb-4">Открой свой кейс</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Честные шансы, реальные призы. Каждый кейс уникален.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 section-reveal">
            {cases.map((c) => (
              <div key={c.id} className="glow-card rounded-2xl overflow-hidden group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={CASE_IMAGE} alt={c.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-b ${c.color} opacity-50`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-3xl" style={{ animation: "float 4s ease-in-out infinite" }}>
                      📦
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-cyan-400">
                    {c.chance}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-rajdhani font-bold text-lg mb-3">{c.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-rajdhani font-bold neon-text-purple">{c.price}</span>
                    <button className="btn-gradient px-4 py-2 rounded-lg text-sm">
                      <span>Открыть</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="Донат" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img src={DONATE_IMAGE} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="section-reveal text-center mb-16" data-section="Донат">
            <div className="inline-block px-3 py-1 rounded-full border border-pink-500/30 text-pink-400 text-xs mb-4">ДОНАТ</div>
            <h2 className="text-4xl md:text-5xl font-rajdhani gradient-text mb-4">Донат</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Мгновенное зачисление. Безопасная оплата через ЮKassa и другие системы.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 section-reveal">
            {donates.map((d) => (
              <div key={d.id} className={`relative glow-card rounded-2xl p-4 cursor-pointer ${d.popular ? "border-primary/60" : ""}`}>
                {d.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-0.5 rounded-full font-rajdhani font-bold whitespace-nowrap">
                    ХИТ
                  </div>
                )}
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-3">
                    <Icon name={d.icon as "Zap"} size={18} className="text-primary" />
                  </div>
                  <h3 className="font-rajdhani font-bold text-base mb-2 leading-tight">{d.name}</h3>
                  <div className="text-xl font-rajdhani font-bold mb-3" style={{ color: "var(--neon-gold)" }}>{d.price}</div>
                  <button className="w-full btn-gradient py-2 rounded-lg text-xs">
                    <span>Купить</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENCY */}
      <section id="Валюта" className="py-24 grid-bg">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16" data-section="Валюта">
            <div className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 text-cyan-400 text-xs mb-4">ВАЛЮТА</div>
            <h2 className="text-4xl md:text-5xl font-rajdhani gradient-text mb-4">Калькулятор валюты</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Выгодный курс обмена. Считай, сколько монет получишь за рубли.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start section-reveal">
            <div className="glow-card rounded-2xl p-8">
              <h3 className="font-rajdhani text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Calculator" size={22} className="text-primary" />
                Калькулятор
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Введите сумму в рублях</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={rubAmount}
                      onChange={(e) => setRubAmount(e.target.value)}
                      placeholder="0"
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-lg font-rajdhani focus:outline-none focus:border-primary transition-colors pr-12 text-foreground"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">₽</span>
                  </div>
                </div>
                <div className="flex items-center justify-center py-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <Icon name="ArrowDownUp" size={18} className="text-primary" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Получишь монет</label>
                  <div className="w-full bg-secondary border border-primary/30 rounded-xl px-4 py-3 text-lg font-rajdhani neon-text-cyan">
                    {coins} монет
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-rajdhani text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="TrendingUp" size={22} className="text-primary" />
                Актуальные курсы
              </h3>
              <div className="space-y-4">
                {currencies.map((c) => (
                  <div key={c.from + c.to} className="glow-card rounded-xl p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                      <Icon name={c.icon as "Gem"} size={18} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <span>{c.from}</span>
                        <Icon name="ChevronRight" size={14} />
                        <span>{c.to}</span>
                      </div>
                      <div className="font-rajdhani font-bold neon-text-cyan">{c.rate}</div>
                    </div>
                    <div className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-lg">Актуально</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
