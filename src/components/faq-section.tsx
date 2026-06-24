import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько длится аудит?",
      answer:
        "В среднем от 1 до 3 недель в зависимости от размера компании и объёма данных. По итогу вы получаете отчёт с выводами и пошаговый план действий.",
    },
    {
      question: "Какие данные от меня понадобятся?",
      answer:
        "Управленческая и финансовая отчётность, доступ к CRM и рекламным кабинетам, данные по продажам. Всё работаем под NDA — ваша информация остаётся конфиденциальной.",
    },
    {
      question: "Что я получу в результате?",
      answer:
        "Понятный отчёт без сложных терминов: где бизнес теряет деньги, какие риски есть прямо сейчас и конкретный план — что и в каком порядке исправить.",
    },
    {
      question: "Подойдёт ли аудит моему бизнесу?",
      answer:
        "Мы работаем с малым и средним бизнесом из разных сфер. Если вы чувствуете, что что-то идёт не так, но не можете понять что — аудит как раз для вас.",
    },
    {
      question: "Вы только находите проблемы или помогаете их решить?",
      answer:
        "Аудит — это диагностика и чёткий план. По вашему желанию мы сопровождаем внедрение изменений и контролируем результат на следующих этапах.",
    },
    {
      question: "Сколько стоит аудит?",
      answer:
        "Стоимость зависит от направлений и масштаба бизнеса. Начните с бесплатной диагностики — мы оценим ситуацию и предложим формат под вашу задачу.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы об аудите, сроках и результатах для вашего бизнеса.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}