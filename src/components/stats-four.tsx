export default function StatsSection() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <h2 className="sr-only">Estadísticas de salud</h2>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div className="space-y-0.5 md:text-center">
                            <div className="text-primary text-4xl font-bold">1000+</div>
                            <p className="text-muted-foreground">Vidas Transformadas</p>
                        </div>
                        <div className="space-y-0.5 md:text-center">
                            <div className="text-primary text-4xl font-bold">98%</div>
                            <p className="text-muted-foreground">Tasa de Éxito</p>
                        </div>
                        <div className="col-span-2 border-t pt-4 md:border-l md:border-t-0 md:pl-12 md:pt-0">
                            <p className="text-muted-foreground text-balance text-lg">Miles de personas han recuperado su salud usando nuestro tratamiento integral basado en nutrición natural y medicina funcional.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
