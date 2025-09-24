import { Heart, Shield, Users, Award } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Metodología Probada</h2>
                            <p className="mt-6">Nuestro enfoque integral combina nutrición natural, suplementación específica y acompañamiento personalizado para lograr resultados extraordinarios.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Heart className="size-5 text-primary" />
                                Tratamiento natural y seguro
                            </li>
                            <li>
                                <Shield className="size-5 text-primary" />
                                Seguimiento médico especializado
                            </li>
                            <li>
                                <Users className="size-5 text-primary" />
                                Comunidad de apoyo activa
                            </li>
                            <li>
                                <Award className="size-5 text-primary" />
                                15+ años de experiencia comprobada
                            </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
