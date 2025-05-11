
import React from 'react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      {/* Left Section - Red Background with Image */}
      <div className="w-full lg:w-3/5 bg-primary-crimson hero-clip-path min-h-[500px] lg:min-h-[calc(100vh-80px)] relative flex flex-col justify-center items-center p-6 lg:p-16">
        <div className="max-w-md mx-auto lg:mx-0">
          {/* Robot Heart Image */}
          <div className="relative w-full flex justify-center lg:justify-start">
            <img 
              src="/lovable-uploads/cf7acc26-454b-44ba-ac7b-64782c48dadb.png" 
              alt="Robotic hand holding a crystal heart" 
              className="w-64 h-64 md:w-80 md:h-80 object-contain animate-pulse-slow"
            />
          </div>
          
          <div className="text-center lg:text-left mt-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              LIFESYNC
            </h1>
            <p className="mt-2 text-lg">
              Since 2025
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Section - Content */}
      <div className="w-full lg:w-2/5 bg-primary-light min-h-[400px] lg:min-h-[calc(100vh-80px)] flex flex-col justify-center p-8 md:p-12">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
            "Salve vidas. Doe sangue."
          </h2>
          
          <p className="text-gray-600 mb-8 text-center">
            O LifeSync conecta doadores de sangue a centros de coleta de forma rápida e segura. 
            Com tecnologia e solidariedade, ajudamos você a fazer a diferença com um simples 
            gesto: doar sangue.
          </p>
          
          <div className="flex justify-center">
            <Button className="bg-black hover:bg-primary-crimson text-white rounded-full px-8 py-6 text-lg font-medium transition-colors">
              Solicitar Sangue Agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
