
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Sobre Nós</h1>
          <div className="prose lg:prose-xl">
            <p>
              A LifeSync é uma plataforma inovadora que utiliza tecnologia avançada para conectar doadores 
              de sangue com centros de coleta.
            </p>
            <p>
              Nossa missão é facilitar o processo de doação de sangue, tornando-o mais acessível e 
              eficiente. Através de nossa plataforma, doadores podem encontrar rapidamente centros de 
              coleta próximos, agendar doações e acompanhar o impacto de suas contribuições.
            </p>
            <p>
              Fundada em 2025, a LifeSync já ajudou a salvar milhares de vidas ao aumentar significativamente 
              o número de doações de sangue em todo o país.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
