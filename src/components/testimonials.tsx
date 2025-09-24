import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-4xl font-medium lg:text-5xl">Vidas Transformadas</h2>
                    <p>Descubre cómo nuestro tratamiento ha ayudado a personas a recuperar su salud y transformar sus vidas completamente.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader>
                            
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">&ldquo;Bajé 17 kg en un mes. El diagnóstico era cáncer con daños en hígado y riñones. Tenía creatinina en 2.5, era prospecto para diálisis. <br /><br />No podía ni dormir por los dolores impresionantes. No podía caminar solo, tenía que salir agarrado de mis hijos. Estaba amarillo. <br /><br />En dos meses, sin medicamentos, solo con vitaminas y dieta: la creatinina bajó a 0.9, los riñones y el hígado están perfectamente bien. Hoy me dicen &apos;te ves fenomenal, a todo dar.&apos; Soy otro.&rdquo;</p>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <cite className="text-sm font-medium">Javier Rosendo</cite>
                                        <span className="text-muted-foreground block text-sm">Cáncer, Falla Renal, Desnutrición</span>
                                    </div>
                                    <a 
                                        href="https://youtube.com/watch?v=javier-testimonial" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
                                    >
                                        Ver video completo
                                    </a>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">En las noches no me podía ni dormir. Ahora tengo la piel mejor y la memoria ha mejorado mucho.</p>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <cite className="text-sm font-medium">Jaime Hernández</cite>
                                        <span className="text-muted-foreground block text-sm">Psoriasis, Neuropatía Periférica, Pérdida de Memoria, Insomnio</span>
                                    </div>
                                    <a 
                                        href="https://youtube.com/watch?v=jaime-testimonial" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
                                    >
                                        Ver video
                                    </a>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Sentía que ya me iba, que ya me estaba muriendo. <br /><br />Con las vitaminas y el tratamiento salí del hospital en 3 días. Hicieron lo que no pudieron hacer las transfusiones.</p>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <cite className="text-sm font-medium">Génesis Peña</cite>
                                        <span className="text-muted-foreground block text-sm">Desnutrición, Enfermedad Autoinmune</span>
                                    </div>
                                    <a 
                                        href="https://youtube.com/watch?v=genesis-testimonial" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
                                    >
                                        Ver video completo
                                    </a>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                   
                   
                </div>
            </div>
        </section>
    )
}
