import { keyFeatures } from '@/lib/data'
import React from 'react'

const KeyFeytures = () => {
    return (
        <section className="py-20 px-4 bg-foreground/90">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Fonctionnalités Clés
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {keyFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1A2E] p-6 rounded-lg shadow-[0_0_15px_rgba(98,44,108,0.3)] hover:shadow-[0_0_20px_rgba(172,70,231,0.4)] transition-shadow"
                        >
                            <div className="text-[#AC46E7] mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-white/70">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default KeyFeytures