'use client'

import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Star, CheckCircle, Play, Target, Award } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const courseData = {
  1: {
    title: "Reto 30 Días: Fuerza Total",
    description: "Desarrolla fuerza funcional con entrenamientos progresivos diseñados para principiantes.",
    longDescription: "Este programa completo de 30 días está diseñado específicamente para personas que quieren desarrollar fuerza funcional desde cero. Cada día incluye entrenamientos estructurados que progresivamente aumentan en intensidad, asegurando que tu cuerpo se adapte de manera segura y efectiva.",
    price: "€49",
    originalPrice: "€89",
    duration: "30 días",
    difficulty: "Principiante",
    rating: 4.8,
    students: 1240,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format",
    videoUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&auto=format",
    tags: ["Fuerza", "Sin equipo"],
    includes: [
      "30 entrenamientos progresivos",
      "Guía de nutrición básica",
      "Videos explicativos de cada ejercicio",
      "Planificador de entrenamientos",
      "Acceso a comunidad privada",
      "Soporte por email"
    ],
    whatYoullLearn: [
      "Técnica correcta de ejercicios básicos",
      "Principios de progresión en fuerza",
      "Cómo estructurar tus entrenamientos",
      "Prevención de lesiones",
      "Fundamentos de nutrición deportiva"
    ]
  },
  2: {
    title: "Quema Grasa en 21 Días",
    description: "Rutinas de alta intensidad para maximizar la quema de grasa y mejorar tu condición física.",
    longDescription: "Un programa intensivo de 21 días diseñado para acelerar tu metabolismo y quemar grasa de manera eficiente. Combina entrenamientos HIIT con estrategias nutricionales probadas.",
    price: "€69",
    originalPrice: "€120",
    duration: "21 días",
    difficulty: "Intermedio",
    rating: 4.9,
    students: 2150,
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop&auto=format",
    videoUrl: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=400&fit=crop&auto=format",
    tags: ["Cardio", "HIIT"],
    includes: [
      "21 entrenamientos HIIT",
      "Plan de alimentación detallado",
      "Calculadora de macros",
      "Videos de técnica",
      "Recetas saludables",
      "Grupo de apoyo"
    ],
    whatYoullLearn: [
      "Entrenamientos HIIT efectivos",
      "Estrategias de quema de grasa",
      "Planificación de comidas",
      "Control de porciones",
      "Hábitos de vida saludable"
    ]
  }
}

const difficultyColors = {
  "Principiante": "bg-green-100 text-green-800",
  "Intermedio": "bg-yellow-100 text-yellow-800",
  "Avanzado": "bg-red-100 text-red-800"
}

export default function ProductPage() {
  const params = useParams()
  const courseId = params.id as string
  const [quantity, setQuantity] = useState(1)

  // Get course data or use first course as fallback
  const course = courseData[courseId as unknown as keyof typeof courseData] || courseData["1"]

  const handleAddToCart = () => {
    // Placeholder for cart functionality
    alert('¡Producto añadido al carrito! (Funcionalidad de demostración)')
  }

  const discountPercentage = course.originalPrice
    ? Math.round((1 - parseInt(course.price.slice(1)) / parseInt(course.originalPrice.slice(1))) * 100)
    : 0

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left Column - Media */}
            <div className="space-y-6">
              {/* Main Video/Image */}
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <img
                  src={course.videoUrl}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                  Vista previa del curso
                </div>
              </div>

              {/* Course Images */}
              <div className="grid grid-cols-3 gap-4">
                <img src={course.image} alt="Preview 1" className="aspect-video object-cover rounded-lg" />
                <img src={course.image} alt="Preview 2" className="aspect-video object-cover rounded-lg opacity-70" />
                <img src={course.image} alt="Preview 3" className="aspect-video object-cover rounded-lg opacity-70" />
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-6">

              {/* Title and Basic Info */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Badge className={difficultyColors[course.difficulty as keyof typeof difficultyColors]}>
                    {course.difficulty}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
                <p className="text-lg text-gray-600 mb-6">{course.description}</p>

                {/* Rating */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-gray-500">({course.students.toLocaleString()} estudiantes)</span>
                </div>
              </div>

              {/* Pricing Card */}
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl font-bold text-blue-600">{course.price}</span>
                        {course.originalPrice && (
                          <span className="text-xl text-gray-500 line-through">{course.originalPrice}</span>
                        )}
                        {discountPercentage > 0 && (
                          <Badge className="bg-red-500 text-white">
                            -{discountPercentage}%
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Pago único, acceso de por vida</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium">Cantidad:</span>
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-x">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    className="w-full h-12 text-lg font-semibold"
                  >
                    Añadir al Carrito - {course.price}
                  </Button>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-600">✅ Garantía de 30 días</p>
                    <p className="text-sm text-gray-600">✅ Acceso inmediato</p>
                    <p className="text-sm text-gray-600">✅ Soporte incluido</p>
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Course Details Tabs */}
          <div className="mt-16 space-y-8">

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Descripción del Curso</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{course.longDescription}</p>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Qué Incluye</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.includes.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Lo Que Aprenderás</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {course.whatYoullLearn.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-blue-100 rounded-full p-1 mt-1">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}