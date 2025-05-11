
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function MissionSection() {
  return (
    <section className="py-16 bg-[#F1F1F1]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Nossa Missão</h2>
        <Card className="border-none shadow-sm mb-12">
          <CardContent className="p-6">
            <p className="text-gray-600">
              O LifeSync é uma plataforma inovadora que conecta doadores de sangue a centros de coleta de forma rápida e eficiente. 
              Nossa missão é facilitar o processo de doação, aumentando o número de doadores regulares e ajudando a salvar vidas. 
              Com tecnologia e humanidade trabalhando juntas, queremos criar um futuro onde nunca falte sangue para quem precisa.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-bold mb-8">Nossos Parceiros</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-none shadow-sm h-48 flex items-center justify-center">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold">NGC</h3>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm h-48 flex items-center justify-center">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold">NSS</h3>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm h-48 flex items-center justify-center">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold">YMCA</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
