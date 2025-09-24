import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { ChevronRight, CirclePlay } from 'lucide-react'
import Image from 'next/image'
import MeshBackground from './mesh-background'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className="relative">
                    <MeshBackground />
                    <div className="relative py-36">
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <div className="md:w-1/2">
                                <div>
                                    <h1 className="max-w-md text-balance text-5xl font-medium md:text-6xl">Recupera Tu <span className="text-primary">Salud</span> Naturalmente</h1>
                                    <p className="text-muted-foreground my-8 max-w-2xl text-balance text-xl">Descubre un tratamiento integral que ha ayudado a miles de personas a recuperarse de enfermedades crónicas usando nutrición y medicina natural.</p>

                                    <div className="flex items-center gap-3">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="pr-4.5 bg-primary hover:bg-primary/90">
                                            <Link href="/gratis">
                                                <span className="text-nowrap">Comenzar Gratis</span>
                                                <ChevronRight className="opacity-50" />
                                            </Link>
                                        </Button>
                                        <Button
                                            key={2}
                                            asChild
                                            size="lg"
                                            variant="outline"
                                            className="pl-5 border-primary/20 hover:bg-primary/5">
                                            <Link href="/retos">
                                                <CirclePlay className="fill-primary/25 stroke-primary" />
                                                <span className="text-nowrap">Ver Programas</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <p className="text-muted-foreground">Resultados comprobados:</p>
                                    <div className="mt-6 grid max-w-sm grid-cols-3 gap-6">
                                        <div className="flex items-center">
                                            <span className="text-sm font-medium text-primary">1000+</span>
                                            <span className="ml-1 text-xs text-muted-foreground">Recuperados</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-sm font-medium text-primary">15+</span>
                                            <span className="ml-1 text-xs text-muted-foreground">Años</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-sm font-medium text-primary">98%</span>
                                            <span className="ml-1 text-xs text-muted-foreground">Éxito</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="perspective-near mt-24 translate-x-12 md:absolute md:-right-6 md:bottom-16 md:left-1/2 md:top-40 md:mt-0 md:translate-x-0">
                            <div className="before:border-foreground/5 before:bg-foreground/5 relative h-full before:absolute before:-inset-x-4 before:bottom-7 before:top-0 before:skew-x-6 before:rounded-[calc(var(--radius)+1rem)] before:border">
                                <div className="bg-background rounded-(--radius) shadow-foreground/10 ring-foreground/5 relative h-full -translate-y-12 skew-x-6 overflow-hidden border border-transparent shadow-md ring-1">
                                    <Image
                                        src="https://plus.unsplash.com/premium_photo-1667762241847-37471e8c8bc0?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="app screen"
                                        width="2880"
                                        height="1842"
                                        className="object-top-left size-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
