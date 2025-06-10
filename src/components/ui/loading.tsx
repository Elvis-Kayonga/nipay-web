
import React, { useEffect, useState } from 'react';

const NiPayLoading = () => {
  const [cashNotes, setCashNotes] = useState<Array<{ id: number; x: number; delay: number; value: string }>>([]);
  
  useEffect(() => {
    // Generate random cash notes
    const notes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3000,
      value: ['100', '500', '1K', '2K', '5K'][Math.floor(Math.random() * 5)]
    }));
    setCashNotes(notes);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-nipay-green via-nipay-dark-green to-emerald-900 z-50 flex items-center justify-center overflow-hidden">
      {/* Shop building silhouette */}
      <div className="absolute bottom-0 w-full h-1/3 bg-black/20 clip-path-shop"></div>
      
      {/* Cash notes animation */}
      <div className="absolute inset-0">
        {cashNotes.map((note) => (
          <div
            key={note.id}
            className="absolute animate-cash-fall"
            style={{
              left: `${note.x}%`,
              animationDelay: `${note.delay}ms`,
              animationDuration: '4s'
            }}
          >
            <div className="w-16 h-8 bg-green-200 border border-green-400 rounded-sm shadow-lg flex items-center justify-center text-xs font-bold text-green-800 transform rotate-12">
              {note.value} RWF
            </div>
          </div>
        ))}
      </div>

      {/* Shop container that fills with cash */}
      <div className="relative w-96 h-96 mx-auto">
        {/* Shop outline */}
        <div className="absolute inset-x-8 bottom-0 h-64 border-4 border-white/30 rounded-t-lg bg-black/10">
          {/* Shop roof */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-20 border-r-20 border-b-8 border-l-transparent border-r-transparent border-b-white/30"></div>
          
          {/* Cash accumulation inside shop */}
          <div className="absolute bottom-0 left-0 right-0 h-full overflow-hidden rounded-t-lg">
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-300 via-green-200 to-transparent animate-cash-fill"></div>
          </div>
          
          {/* Shop door */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-brown-600 border-2 border-brown-700 rounded-t-lg">
            <div className="absolute right-1 top-6 w-1 h-1 bg-yellow-400 rounded-full"></div>
          </div>
        </div>

        {/* NiPay Logo */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="inline-flex items-center">
            <span className="text-3xl font-bold text-white">Ni</span>
            <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-lg ml-1 shadow-lg">Pay</span>
          </div>
          <p className="text-white/80 text-sm mt-2 font-medium">Filling your business with cash...</p>
        </div>
      </div>

      {/* Floating cash symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-400 text-2xl animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 500}ms`,
              animationDuration: '3s'
            }}
          >
            💰
          </div>
        ))}
      </div>
    </div>
  );
};

export default NiPayLoading;
