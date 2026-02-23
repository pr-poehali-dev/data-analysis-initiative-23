import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Что входит в ремонт под ключ?",
    answer:
      "Мы берём на себя весь цикл: разработку дизайн-проекта, закупку и доставку материалов, все виды отделочных работ, установку сантехники, электрику, а также финальную уборку и расстановку мебели. Вы получаете готовую квартиру — просто заезжайте.",
  },
  {
    question: "Сколько времени занимает ремонт?",
    answer:
      "Сроки зависят от площади и уровня отделки. Однокомнатная квартира в среднем занимает 2–3 месяца, двухкомнатная — 3–4 месяца. Точные сроки фиксируются в договоре и являются обязательными для нас.",
  },
  {
    question: "Как формируется стоимость?",
    answer:
      "После осмотра объекта мы составляем детальную смету по каждому виду работ и материалам. Стоимость фиксируется в договоре и не меняется в процессе — никаких неожиданных доплат.",
  },
  {
    question: "Какая гарантия на работы?",
    answer:
      "Мы даём письменную гарантию на все виды выполненных работ. Если в гарантийный период что-то пойдёт не так — мы устраняем это за свой счёт. Все условия прописаны в договоре.",
  },
  {
    question: "Вы работаете только в Воронеже?",
    answer:
      "Основные объекты — в Воронеже и Воронежской области. При необходимости рассматриваем проекты в близлежащих городах — уточните при обращении.",
  },
  {
    question: "Как начать работу?",
    answer:
      "Позвоните или напишите нам — приедем на бесплатный замер, обсудим ваши пожелания и уровень отделки. По итогам встречи подготовим смету и договор. Всё быстро и без обязательств.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}