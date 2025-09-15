import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Star, Target, Users } from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    id: 1,
    title: "Reto 30 Días: Fuerza Total",
    description: "Desarrolla fuerza funcional con entrenamientos progresivos diseñados para principiantes.",
    price: "€49",
    originalPrice: "€89",
    duration: "30 días",
    difficulty: "Principiante",
    rating: 4.8,
    students: 1240,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format",
    tags: ["Fuerza", "Sin equipo"]
  },
  {
    id: 2,
    title: "Quema Grasa en 21 Días",
    description: "Rutinas de alta intensidad para maximizar la quema de grasa y mejorar tu condición física.",
    price: "€69",
    originalPrice: "€120",
    duration: "21 días",
    difficulty: "Intermedio",
    rating: 4.9,
    students: 2150,
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop&auto=format",
    tags: ["Cardio", "HIIT"]
  },
  {
    id: 3,
    title: "Masa Muscular Avanzada",
    description: "Programa intensivo para atletas experimentados que buscan maximizar su desarrollo muscular.",
    price: "€99",
    originalPrice: "€150",
    duration: "45 días",
    difficulty: "Avanzado",
    rating: 4.7,
    students: 890,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop&auto=format",
    tags: ["Hipertrofia", "Pesas"]
  },
  {
    id: 4,
    title: "Flexibilidad y Movilidad",
    description: "Mejora tu rango de movimiento y previene lesiones con ejercicios de flexibilidad.",
    price: "€39",
    originalPrice: "€65",
    duration: "28 días",
    difficulty: "Principiante",
    rating: 4.6,
    students: 980,
    image: "https://images.unsplash.com/photo-1506629905607-95d45842c4a6?w=400&h=300&fit=crop&auto=format",
    tags: ["Yoga", "Estiramiento"]
  },
  {
    id: 5,
    title: "Reto Funcional en Casa",
    description: "Entrenamientos funcionales completos que puedes hacer desde la comodidad de tu hogar.",
    price: "€55",
    originalPrice: "€85",
    duration: "35 días",
    difficulty: "Intermedio",
    rating: 4.8,
    students: 1560,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format",
    tags: ["Funcional", "Casa"]
  },
  {
    id: 6,
    title: "Nutrición Deportiva Pro",
    description: "Aprende a optimizar tu alimentación para maximizar tus resultados en el gimnasio.",
    price: "€75",
    originalPrice: "€110",
    duration: "60 días",
    difficulty: "Intermedio",
    rating: 4.9,
    students: 1890,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop&auto=format",
    tags: ["Nutrición", "Dieta"]
  }
]

const difficultyColors = {
  "Principiante": "bg-green-100 text-green-800",
  "Intermedio": "bg-yellow-100 text-yellow-800",
  "Avanzado": "bg-red-100 text-red-800"
}

export default function RetosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <div className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nuestros Retos
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Programas estructurados diseñados para llevarte al siguiente nivel.
              Cada reto incluye guía completa, seguimiento y comunidad de apoyo.
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                Todos
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                Principiante
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                Intermedio
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                Avanzado
              </Badge>
            </div>
            <div className="text-sm text-gray-600">
              {courses.length} retos disponibles
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={difficultyColors[course.difficulty as keyof typeof difficultyColors]}>
                    {course.difficulty}
                  </Badge>
                </div>
                {course.originalPrice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    -{Math.round((1 - parseInt(course.price.slice(1)) / parseInt(course.originalPrice.slice(1))) * 100)}%
                  </div>
                )}
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl leading-tight">{course.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Course Info */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-sm text-gray-500">({course.students})</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                      {course.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                      )}
                    </div>
                    <Button asChild>
                      <Link href={`/retos/${course.id}`}>
                        Ver Reto
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
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Target className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            ¿No sabes por dónde empezar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Prueba nuestro curso gratuito y descubre qué reto es perfecto para ti
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/gratis">
              Comenzar Gratis
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}