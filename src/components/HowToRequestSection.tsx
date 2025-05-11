
import React from 'react';

export default function HowToRequestSection() {
  const steps = [
    {
      number: 1,
      title: "Cadastre-se na plataforma",
      description: "Crie uma conta na LifeSync com seus dados pessoais e de contato."
    },
    {
      number: 2,
      title: "Indique o tipo sanguíneo",
      description: "Informe o tipo sanguíneo necessário e a quantidade aproximada de bolsas."
    },
    {
      number: 3,
      title: "Aguarde doadores",
      description: "Nossa plataforma notificará doadores compatíveis na sua região."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Como solicitar sangue?</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-12 md:space-y-0 md:space-x-12">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div className="w-64 h-64 bg-white rounded-full shadow-lg flex flex-col justify-center items-center p-8 relative z-10">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary-crimson rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
                <div className="text-center space-y-4">
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
              
              {step.number === 2 && (
                <div className="hidden md:block absolute top-1/2 left-[45%] transform -translate-y-1/2">
                  <svg width="120" height="50" viewBox="0 0 120 50" className="text-primary-crimson">
                    <path d="M0,25 Q60,0 120,25 Q60,50 0,25" stroke="currentColor" fill="none" strokeWidth="2" />
                    <circle cx="60" cy="25" r="8" fill="currentColor" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
