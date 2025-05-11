
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CollectionPoints = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Pontos de Coleta</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-center text-lg mb-8">
              Encontre os pontos de coleta de sangue mais próximos de você
            </p>
            {/* Placeholder for future map implementation */}
            <div className="h-64 bg-gray-200 rounded flex items-center justify-center mb-6">
              <p className="text-gray-500">Mapa será implementado em breve</p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-bold">Centro de Doação {item}</h3>
                  <p className="text-sm text-gray-500">Av. Exemplo, 123 - Cidade</p>
                  <p className="text-sm text-gray-500">Horário: 8h às 17h</p>
                  <p className="text-sm text-gray-500">Tel: (00) 0000-0000</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CollectionPoints;
