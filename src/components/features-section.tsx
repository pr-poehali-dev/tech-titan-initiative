import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Видим скрытые риски",
    description: "Находим финансовые дыры, кассовые разрывы и убыточные направления, о которых вы могли не подозревать.",
    icon: "brain",
    badge: "Риски",
  },
  {
    title: "Прозрачные цифры",
    description: "Раскладываем по полочкам отчётность и юнит-экономику, чтобы вы видели реальную картину бизнеса.",
    icon: "lock",
    badge: "Финансы",
  },
  {
    title: "Анализ воронки продаж",
    description: "Находим, на каких этапах вы теряете клиентов и деньги, и где спрятан скрытый потенциал роста.",
    icon: "globe",
    badge: "Продажи",
  },
  {
    title: "Аудит маркетинга",
    description: "Считаем отдачу с каждого канала и убираем бюджеты, которые не приносят прибыль.",
    icon: "zap",
    badge: "Маркетинг",
  },
  {
    title: "Чёткий план действий",
    description: "Вы получаете не отчёт «в стол», а пошаговый план: что и в каком порядке исправить.",
    icon: "link",
    badge: "План",
  },
  {
    title: "Опыт и независимость",
    description: "Свежий взгляд со стороны без внутренней предвзятости — только факты и измеримые выводы.",
    icon: "target",
    badge: "Эксперты",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Превращаем тревогу за бизнес в понятный план действий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}