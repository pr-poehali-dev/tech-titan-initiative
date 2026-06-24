import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Елена Соколова",
    role: "Владелец сети кофеен",
    avatar: "/professional-woman-scientist.png",
    content:
      "Я чувствовала, что бизнес буксует, но не понимала почему. Аудит показал, где утекали деньги — за 3 месяца вышли в плюс на 18%.",
  },
  {
    name: "Дмитрий Воронов",
    role: "Собственник производственной компании",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Думал, проблема в продажах, а оказалось — в маркетинговом бюджете. Перераспределили каналы и снизили стоимость клиента почти вдвое.",
  },
  {
    name: "Анна Лебедева",
    role: "Директор онлайн-школы",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Получила не сухой отчёт, а чёткий план действий по пунктам. Впервые увидела реальные цифры по воронке и убрала слабые места.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Результаты наших клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Владельцы бизнеса о том, что изменилось после аудита
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}