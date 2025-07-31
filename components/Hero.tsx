'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const tracks = [
    { title: "Blinding Lights", artist: "The Weeknd" },
    { title: "Watermelon Sugar", artist: "Harry Styles" },
    { title: "Levitating", artist: "Dua Lipa" },
    { title: "Good 4 U", artist: "Olivia Rodrigo" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentTrack((prev) => (prev + 1) % tracks.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, tracks.length]);

  const MusicVisualization = () => (
    <div className="flex items-center justify-center space-x-1 h-12">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`music-bar ${isPlaying ? 'animate-wave' : ''}`}
          style={{
            animationDelay: `${i * 0.1}s`,
            height: isPlaying ? `${Math.random() * 40 + 10}px` : '10px',
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-green-900 opacity-80"></div>
      
      {/* Floating music notes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">♪</div>
        <div className="absolute top-40 right-20 text-4xl animate-float opacity-20" style={{animationDelay: '2s'}}>♫</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-float opacity-20" style={{animationDelay: '4s'}}>♬</div>
        <div className="absolute bottom-20 right-10 text-3xl animate-float opacity-20" style={{animationDelay: '1s'}}>♩</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Music for
          <span className="block gradient-text">everyone</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Millions of songs and podcasts. No credit card needed.
        </p>

        {/* Music player mockup */}
        <div className="glass rounded-2xl p-6 max-w-md mx-auto mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Volume2 className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-lg font-semibold text-white">
                {tracks[currentTrack].title}
              </h3>
              <p className="text-gray-400">
                {tracks[currentTrack].artist}
              </p>
            </div>
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              size="sm"
              className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-400 text-black"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </Button>
          </div>
          <MusicVisualization />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            size="lg"
            className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-full animate-pulse-glow"
          >
            Get Spotify Free
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full"
          >
            View Premium Plans
          </Button>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          Get 1 month free, then $9.99/month after. Cancel anytime.
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}