import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { IconClock, IconStar, IconTarget, IconUsers, IconHeart, IconLeaf } from '@tabler/icons-react'
import Link from 'next/link'
import Footer from '@/components/footer'

const courses = [
  {
    id: 1,
    title: "Transformación Saludable 30 Días",
    description: "Un programa integral de bienestar que combina ejercicio suave, mindfulness y nutrición consciente para transformar tu vida.",
    price: "€67",
    originalPrice: "€97",
    duration: "30 días",
    difficulty: "Principiante",
    rating: 4.9,
    students: 2340,
    image: "https://images.unsplash.com/photo-1506629905607-95d45842c4a6?w=500&h=400&fit=crop&auto=format",
    tags: ["Bienestar", "Mindfulness", "Nutrición"],
    icon: "IconHeart"
  },
  {
    id: 2,
    title: "Nutrición Intuitiva & Energía",
    description: "Descubre cómo alimentar tu cuerpo de forma natural y sostenible mientras aumentas tu vitalidad diaria.",
    price: "€89",
    originalPrice: "€129",
    duration: "45 días",
    difficulty: "Intermedio",
    rating: 4.8,
    students: 1820,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=400&fit=crop&auto=format",
    tags: ["Nutrición", "Energía", "Sostenible"],
    icon: "IconLeaf"
  },
  {
    id: 3,
    title: "Equilibrio Mental & Físico",
    description: "Programa avanzado que integra técnicas de meditación, yoga restaurativo y ejercicio funcional para el equilibrio total.",
    price: "€115",
    originalPrice: "€165",
    duration: "60 días",
    difficulty: "Avanzado",
    rating: 4.9,
    students: 980,
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500&h=400&fit=crop&auto=format",
    tags: ["Equilibrio", "Meditación", "Yoga"],
    icon: "IconTarget"
  }
]

const difficultyColors = {
  "Principiante": "bg-primary/10 text-primary",
  "Intermedio": "bg-primary/20 text-primary",
  "Avanzado": "bg-primary/30 text-primary"
}

export default function RetosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <div className="pt-24 pb-16 gradient-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <IconHeart className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Programas de Bienestar
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Transforma tu vida con nuestros programas integrales de salud y bienestar.
              Cada programa incluye seguimiento personalizado y comunidad de apoyo.
            </p>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Icon Overlay */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  {course.icon === 'IconHeart' && <IconHeart className="w-6 h-6 text-white" />}
                  {course.icon === 'IconLeaf' && <IconLeaf className="w-6 h-6 text-white" />}
                  {course.icon === 'IconTarget' && <IconTarget className="w-6 h-6 text-white" />}
                </div>

                {/* Difficulty Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={difficultyColors[course.difficulty as keyof typeof difficultyColors] + " font-medium"}>
                    {course.difficulty}
                  </Badge>
                </div>

                {/* Discount Badge */}
                {course.originalPrice && (
                  <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -{Math.round((1 - parseInt(course.price.slice(1)) / parseInt(course.originalPrice.slice(1))) * 100)}% OFF
                  </div>
                )}
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-heading text-foreground group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-body leading-relaxed">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Course Info */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <IconClock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <IconUsers className="w-4 h-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <IconStar
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-primary fill-primary' : 'text-muted'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">{course.rating}</span>
                    <span className="text-sm text-muted-foreground">({course.students.toLocaleString()})</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary border-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary font-heading">{course.price}</span>
                      {course.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">{course.originalPrice}</span>
                      )}
                    </div>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href={`/retos/${course.id}`}>
                        Ver Programa
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="gradient-primary py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <IconHeart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            ¿Listo para transformar tu bienestar?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-body max-w-2xl mx-auto">
            Comienza con nuestro programa gratuito y descubre el poder de un enfoque integral de la salud
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
            <Link href="/gratis">
              Comenzar Gratis
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}