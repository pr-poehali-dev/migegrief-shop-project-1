import { useState } from "react";
import Icon from "@/components/ui/icon";

const navItems = ["Главная", "Каталог", "Кейсы", "Донат", "Валюта", "Отзывы", "FAQ"];

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

interface SocialSectionsProps {
  scrollTo: (id: string) => void;
}

export default function SocialSections({ scrollTo }: SocialSectionsProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
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
    </>
  );
}
