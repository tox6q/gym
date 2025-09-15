import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { IconMail, IconPhone, IconMapPin, IconHeart, IconClock, IconMessageCircle } from '@tabler/icons-react'
import Link from 'next/link'
import Footer from '@/components/footer'

export default function ContactoPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Header Section */}
            <div className="pt-24 pb-16 gradient-secondary">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                            <IconMessageCircle className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
                            ¿Cómo Podemos Ayudarte?
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
                            Estamos aquí para acompañarte en tu camino hacia el bienestar.
                            Contáctanos y encontraremos la mejor forma de apoyar tus objetivos de salud.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-5">

                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* General Contact */}
                            <Card className="p-6 border-0 bg-card/50 backdrop-blur-sm">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <IconHeart className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold font-heading mb-2">Consultas Generales</h3>
                                        <Link
                                            href="mailto:hola@vidasana.com"
                                            className="text-primary text-lg hover:underline block mb-2">
                                            hola@vidasana.com
                                        </Link>
                                        <div className="flex items-center space-x-2 text-muted-foreground">
                                            <IconPhone className="w-4 h-4" />
                                            <span className="text-sm">+34 900 123 456</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* Support Contact */}
                            <Card className="p-6 border-0 bg-card/50 backdrop-blur-sm">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <IconMessageCircle className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold font-heading mb-2">Soporte Técnico</h3>
                                        <Link
                                            href="mailto:soporte@vidasana.com"
                                            className="text-primary text-lg hover:underline block mb-2">
                                            soporte@vidasana.com
                                        </Link>
                                        <div className="flex items-center space-x-2 text-muted-foreground">
                                            <IconClock className="w-4 h-4" />
                                            <span className="text-sm">Lun-Vie 9:00-18:00</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* Office Location */}
                            <Card className="p-6 border-0 bg-card/50 backdrop-blur-sm">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <IconMapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold font-heading mb-2">Nuestra Ubicación</h3>
                                        <p className="text-muted-foreground">
                                            Calle del Bienestar 123<br />
                                            28001 Madrid, España
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            {/* Social Media */}
                            <Card className="p-6 border-0 bg-card/50 backdrop-blur-sm">
                                <h3 className="text-lg font-semibold font-heading mb-4">Síguenos</h3>
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/>
                                        </svg>
                                    </Link>

                                    <Link
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="TikTok"
                                        className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"/>
                                        </svg>
                                    </Link>

                                    <Link
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                        className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/>
                                        </svg>
                                    </Link>

                                    <Link
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="X/Twitter"
                                        className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"/>
                                        </svg>
                                    </Link>

                                    <Link
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                        className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
                                        </svg>
                                    </Link>
                                </div>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <form className="lg:col-span-3">
                            <Card className="p-8 sm:p-12 border-0 bg-card/50 backdrop-blur-sm">
                                <h3 className="text-2xl font-semibold font-heading mb-2">Envíanos un Mensaje</h3>
                                <p className="text-muted-foreground mb-8 font-body">
                                    ¿Tienes preguntas sobre nuestros programas? ¿Necesitas ayuda personalizada?
                                    Completa el formulario y nos pondremos en contacto contigo.
                                </p>

                                <div className="space-y-6">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="nombre">Nombre</Label>
                                            <Input
                                                id="nombre"
                                                placeholder="Tu nombre"
                                                className="focus:ring-primary focus:border-primary"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="apellido">Apellido</Label>
                                            <Input
                                                id="apellido"
                                                placeholder="Tu apellido"
                                                className="focus:ring-primary focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Correo Electrónico</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="tu@email.com"
                                            className="focus:ring-primary focus:border-primary"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="asunto">Asunto</Label>
                                        <Select>
                                            <SelectTrigger className="focus:ring-primary focus:border-primary">
                                                <SelectValue placeholder="Selecciona un tema" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="programas">Consulta sobre Programas</SelectItem>
                                                <SelectItem value="soporte">Soporte Técnico</SelectItem>
                                                <SelectItem value="colaboracion">Colaboración</SelectItem>
                                                <SelectItem value="prensa">Prensa</SelectItem>
                                                <SelectItem value="otro">Otro</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="mensaje">Mensaje</Label>
                                        <Textarea
                                            id="mensaje"
                                            placeholder="Cuéntanos cómo podemos ayudarte..."
                                            rows={6}
                                            className="focus:ring-primary focus:border-primary"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                                    >
                                        Enviar Mensaje
                                    </Button>
                                </div>
                            </Card>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}