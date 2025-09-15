'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Mail, Users, Trophy, Calendar } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function GratisPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would integrate with your email service
      console.log('Email submitted:', email)
      // Redirect to /retos after 2 seconds
      setTimeout(() => {
        router.push('/retos')
      }, 2000)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <CardTitle className="text-2xl text-green-800">¡Perfecto!</CardTitle>
            <CardDescription>
              Tu curso gratuito está en camino
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Revisa tu correo electrónico en los próximos minutos. Te hemos enviado el primer módulo de tu curso gratuito.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              ¿No lo ves? Revisa tu carpeta de spam
            </p>
            <p className="text-blue-600 font-medium">
              Redirigiendo a nuestros cursos premium...
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforma Tu <span className="text-blue-600">Físico</span> en 7 Días
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Descubre los secretos que usan los profesionales para obtener resultados rápidos y duraderos.
            <strong> Curso gratuito por tiempo limitado.</strong>
          </p>

          {/* Video Preview */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqUGCzfYuM6Bu5OCIJLm03qUkBFUo8ICA6Q&s"
                alt="Preview del curso"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                🔴 GRATIS
              </div>
              <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded text-sm font-semibold">
                Curso Gratuito
              </div>
            </div>
          </div>
        </div>

        {/* Email Capture Form */}
        <div className="max-w-md mx-auto mb-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Accede GRATIS Ahora</CardTitle>
              <CardDescription>
                Únete a más de 10,000 personas que ya están transformando su físico
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Tu mejor correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    required
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700">
                  Quiero Mi Curso GRATIS 🚀
                </Button>
              </form>
              <p className="text-xs text-gray-500 text-center mt-3">
                Sin spam. Puedes cancelar cuando quieras. Respetamos tu privacidad.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What You'll Learn */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Lo Que Aprenderás en Este Curso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <Trophy className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Rutina de 7 Días Probada</h3>
                <p className="text-gray-600">La rutina exacta que uso con mis clientes VIP para ver resultados desde la primera semana</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Nutrición Simplificada</h3>
                <p className="text-gray-600">Qué comer y cuándo comerlo para maximizar tus resultados sin dietas complicadas</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Plan de Seguimiento</h3>
                <p className="text-gray-600">Cómo mantener la motivación y hacer del ejercicio un hábito que dure para siempre</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Errores Comunes</h3>
                <p className="text-gray-600">Los 5 errores que comete el 90% de la gente y que sabotean sus resultados</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">⭐</span>
              ))}
            </div>
            <p className="text-gray-600 mb-4 italic">
              &ldquo;En solo una semana ya noté cambios increíbles. El curso es súper fácil de seguir y los resultados hablan por sí solos.&rdquo;
            </p>
            <p className="font-semibold">María González, 32 años</p>
            <p className="text-sm text-gray-500">Perdió 3kg en la primera semana</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <p className="text-red-600 font-semibold mb-4">⚠️ Oferta por tiempo limitado</p>
          <p className="text-gray-600 mb-8">Este curso normalmente cuesta $97. Hoy es completamente GRATIS.</p>
          <Button
            onClick={() => (document.querySelector('input[type="email"]') as HTMLInputElement)?.focus()}
            size="lg"
            className="h-14 px-8 text-xl font-semibold bg-green-600 hover:bg-green-700"
          >
            Sí, Quiero Mi Curso GRATIS
          </Button>
        </div>
      </div>
    </div>
  )
}