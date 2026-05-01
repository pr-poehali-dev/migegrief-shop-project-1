import { useEffect, useState } from "react";
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
  { id: 1, name: "Старт", amount: "100 монет", price: "99₽", bonus: "", icon: "Zap", popular: false },
  { id: 2, name: "Оптимум", amount: "500 монет", price: "399₽", bonus: "+50 бонус", icon: "Star", popular: true },
  { id: 3, name: "Макс", amount: "1200 монет", price: "799₽", bonus: "+200 бонус", icon: "Crown", popular: false },
  { id: 4, name: "VIP", amount: "3000 монет", price: "1799₽", bonus: "+700 бонус", icon: "Diamond", popular: false },
];

const currencies = [
  { from: "RUB", to: "COINS", rate: "1₽ = 10 монет", icon: "ArrowRightLeft" },
  { from: "COINS", to: "GEMS", rate: "100 монет = 1 кристалл", icon: "Gem" },
  { from: "RUB", to: "GEMS", rate: "1₽ = 0.1 кристалл", icon: "TrendingUp" },
];

const reviews = [
  { id: 1, name: "Александр К.", rating: 5, text: "Открыл кейс и сразу выпал легендарный предмет. Быстро, честно, без читов!", avatar: "А" },
  { id: 2, name: "Максим В.", rating: 5, text: "Донат пришёл моментально. Отличный сервис, рекомендую всем друзьям!", avatar: "М" },
  { id: 3, name: "Даниил Р.", rating: 4, text: "Хороший курс валюты, удобный интерфейс. Уже второй раз покупаю.", avatar: "Д" },
  { id: 4, name: "Никита С.", rating: 5, text: "Безопасная оплата, мгновенная доставка. Лучший шоп в своём роде!", avatar: "Н" },
];

const faqs = [
  { q: "Как быстро приходит донат?", a: "Донат зачисляется автоматически в течение 1-3 минут после оплаты." },
  { q: "Какие способы оплаты доступны?", a: "Принимаем карты Visa/MasterCard, СБП, ЮMoney, криптовалюту и другие платёжные системы." },
  { q: "Что делать если донат не пришёл?", a: "Обратитесь в нашу поддержку с чеком об оплате — решим вопрос в течение 30 минут." },
  { q: "Безопасно ли покупать здесь?", a: "Да! Все транзакции защищены SSL-шифрованием. Мы работаем официально и соблюдаем все нормы." },
  { q: "Можно ли вернуть деньги?", a: "Возврат возможен в течение 24 часов при условии, что товар не был использован." },
];

const navItems = ["Главная", "Каталог", "Кейсы", "Донат", "Валюта", "Отзывы", "FAQ"];

export default function Index() {
  const [activeSection, setActiveSection] = useState("Главная");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [rubAmount, setRubAmount] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            const id = (entry.target as HTMLElement).dataset.section;
            if (id) setActiveSection(id);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const coins = parseFloat(rubAmount) > 0 ? (parseFloat(rubAmount) * 10).toLocaleString() : "0";
  const [copied, setCopied] = useState(false);
  const copyIP = () => {
    navigator.clipboard.writeText("188.127.241.27:30045");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background noise">
      {/* NAVBAR */}
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
                onClick={() => scrollTo(item)}
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
                onClick={() => scrollTo(item)}
                className="text-left px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
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
                <div className="text-sm font-rajdhani font-bold text-green-400">Онлайн сейчас: 1,248 игроков</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <h2 className="text-4xl md:text-5xl font-rajdhani gradient-text mb-4">Пополни баланс</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Мгновенное зачисление. Безопасная оплата через ЮKassa и другие системы.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 section-reveal">
            {donates.map((d) => (
              <div key={d.id} className={`relative glow-card rounded-2xl p-6 cursor-pointer ${d.popular ? "border-primary/60" : ""}`}>
                {d.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full font-rajdhani font-bold whitespace-nowrap">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <Icon name={d.icon as "Zap"} size={22} className="text-primary" />
                  </div>
                  <h3 className="font-rajdhani font-bold text-xl mb-1">{d.name}</h3>
                  <div className="text-2xl font-rajdhani font-bold neon-text-cyan mb-1">{d.amount}</div>
                  <div className="h-5 mb-3">
                    {d.bonus && <div className="text-xs text-green-400">{d.bonus}</div>}
                  </div>
                  <div className="text-3xl font-rajdhani font-bold mb-4" style={{ color: "var(--neon-gold)" }}>{d.price}</div>
                  <button className="w-full btn-gradient py-2.5 rounded-xl text-sm">
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

      {/* REVIEWS */}
      <section id="Отзывы" className="py-24">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16" data-section="Отзывы">
            <div className="inline-block px-3 py-1 rounded-full border border-green-500/30 text-green-400 text-xs mb-4">ОТЗЫВЫ</div>
            <h2 className="text-4xl md:text-5xl font-rajdhani gradient-text mb-4">Нам доверяют</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Реальные отзывы наших покупателей.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 section-reveal">
            {reviews.map((r) => (
              <div key={r.id} className="glow-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center font-rajdhani font-bold text-white">
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Icon key={i} name="Star" size={12} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="FAQ" className="py-24 grid-bg">
        <div className="container mx-auto px-4">
          <div className="section-reveal text-center mb-16" data-section="FAQ">
            <div className="inline-block px-3 py-1 rounded-full border border-purple-500/30 text-purple-400 text-xs mb-4">FAQ</div>
            <h2 className="text-4xl md:text-5xl font-rajdhani gradient-text mb-4">Частые вопросы</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Ответы на популярные вопросы наших покупателей.</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-3 section-reveal">
            {faqs.map((faq, i) => (
              <div key={i} className="glow-card rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-lg border border-border flex items-center justify-center transition-transform duration-200 ${openFaq === i ? "rotate-45 border-primary/50 bg-primary/10" : ""}`}>
                    <Icon name="Plus" size={16} className={openFaq === i ? "text-primary" : "text-muted-foreground"} />
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
                <Icon name="Zap" size={16} className="text-white" />
              </div>
              <span className="font-rajdhani font-bold text-xl gradient-text">MigeGrief</span>
              <span className="font-rajdhani text-xl text-muted-foreground">SHOP</span>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <button key={item} onClick={() => scrollTo(item)} className="hover:text-foreground transition-colors">
                  {item}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              {["MessageCircle", "Send", "Youtube"].map((icon) => (
                <button key={icon} className="w-9 h-9 rounded-xl border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:bg-primary/10">
                  <Icon name={icon as "Send"} size={16} />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <span>© 2024 MigeGrief Shop. Все права защищены.</span>
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={14} className="text-green-400" />
              <span>Защищённые платежи</span>
              <span>·</span>
              <Icon name="Lock" size={14} className="text-green-400" />
              <span>SSL шифрование</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}