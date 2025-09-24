'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { IconCheck, IconMail, IconTrophy, IconHeart, IconLeaf, IconTarget, IconGift, IconStar } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'

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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-2xl">
            <CardHeader className="pb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <IconCheck className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-heading text-primary">¡Perfecto!</CardTitle>
              <CardDescription className="font-body text-muted-foreground">
                Tu programa gratuito está en camino
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 font-body">
                Revisa tu correo electrónico en los próximos minutos. Te hemos enviado el primer módulo de tu programa gratuito de bienestar.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                ¿No lo ves? Revisa tu carpeta de spam
              </p>
              <div className="flex items-center justify-center space-x-2 text-primary font-medium">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <span className="ml-2">Redirigiendo a nuestros programas premium...</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-16 gradient-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <IconGift className="w-8 h-8 text-primary" />
            </div>

            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
              🎁 Programa Gratuito por Tiempo Limitado
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-heading">
              Transforma Tu <span className="text-primary">Bienestar</span> en 7 Días
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-body">
              Descubre un enfoque integral de la salud que combina nutrición consciente,
              movimiento suave y mindfulness para crear cambios duraderos en tu vida.
            </p>

            {/* Video Preview */}
            <div className="relative max-w-3xl mx-auto mb-16">
              <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm shadow-2xl">
                <div className="aspect-video relative">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqUGCzfYuM6Bu5OCIJLm03qUkBFUo8ICA6Q&s"
                    alt="Preview del programa de bienestar"
                    className="w-full h-full object-cover"
                  />

                  {/* Free Badge */}
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <IconGift className="w-4 h-4" />
                    <span>GRATIS</span>
                  </div>

                  {/* Course Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Programa de Bienestar
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-primary border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Email Capture Form */}
      <div className="py-16 bg-background">
        <div className="max-w-lg mx-auto px-4">
          <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconMail className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-heading text-foreground">Accede GRATIS Ahora</CardTitle>
              <CardDescription className="font-body">
                Únete a más de 15,000 personas que ya están transformando su bienestar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <IconMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Tu mejor correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-lg font-body transition-all"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-heading"
                >
                  Quiero Mi Programa GRATIS ✨
                </Button>
              </form>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <IconCheck className="w-4 h-4 text-primary" />
                  <span>Sin spam</span>
                </div>
                <div className="flex items-center space-x-1">
                  <IconCheck className="w-4 h-4 text-primary" />
                  <span>Acceso inmediato</span>
                </div>
                <div className="flex items-center space-x-1">
                  <IconCheck className="w-4 h-4 text-primary" />
                  <span>100% Gratis</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
              Lo Que Incluye Tu Programa Gratuito
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              Un enfoque integral para transformar tu bienestar en solo 7 días
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconHeart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 font-heading text-foreground">Rutina de Bienestar de 7 Días</h3>
                    <p className="text-muted-foreground font-body">Un programa holístico que combina movimiento suave, respiración consciente y prácticas de mindfulness</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconLeaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 font-heading text-foreground">Nutrición Consciente</h3>
                    <p className="text-muted-foreground font-body">Aprende a nutrir tu cuerpo con alimentos que te den energía y vitalidad de forma natural</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconTarget className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 font-heading text-foreground">Hábitos Sostenibles</h3>
                    <p className="text-muted-foreground font-body">Técnicas probadas para crear cambios duraderos que se integren naturalmente en tu rutina diaria</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconTrophy className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 font-heading text-foreground">Mentalidad de Bienestar</h3>
                    <p className="text-muted-foreground font-body">Descubre cómo desarrollar una relación positiva y sostenible con tu salud y bienestar</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-20 gradient-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-heading">
              Lo Que Dicen Nuestros Miembros
            </h2>
          </div>

          <Card className="max-w-2xl mx-auto border-0 bg-card/50 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="w-6 h-6 text-primary fill-primary" />
                ))}
              </div>
              <blockquote className="text-lg text-muted-foreground mb-6 italic font-body">
                &ldquo;En solo una semana mi energía cambió completamente. El enfoque integral me ayudó a crear hábitos que realmente funcionan para mi estilo de vida.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">MG</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground font-heading">María González</p>
                  <p className="text-sm text-muted-foreground">Transformó su bienestar en 7 días</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <IconGift className="w-8 h-8 text-white" />
          </div>

          <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2">
            ⏰ Oferta por Tiempo Limitado
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Comienza Tu Transformación Hoy
          </h2>
          <p className="text-xl text-white/90 mb-8 font-body max-w-2xl mx-auto">
            Este programa normalmente cuesta €97. Hoy es completamente GRATIS.
          </p>
          <Button
            onClick={() => (document.querySelector('input[type="email"]') as HTMLInputElement)?.focus()}
            size="lg"
            className="h-14 px-8 text-xl font-semibold bg-white text-primary hover:bg-white/90 font-heading"
          >
            Sí, Quiero Mi Programa GRATIS
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}