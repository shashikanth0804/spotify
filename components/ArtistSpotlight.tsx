'use client';

import { useState } from 'react';
import { Play, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ArtistSpotlight() {
  const [selectedArtist, setSelectedArtist] = useState(0);

  const artists = [
    {
      id: 1,
      name: "Taylor Swift",
      genre: "Pop",
      monthlyListeners: "94.1M",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400",
      topSong: "Anti-Hero",
      bio: "American singer-songwriter known for her narrative songwriting and genre versatility.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      name: "The Weeknd",
      genre: "R&B",
      monthlyListeners: "87.5M",
      image: "https://images.pexels.com/photos/1694000/pexels-photo-1694000.jpeg?auto=compress&cs=tinysrgb&w=400",
      topSong: "Blinding Lights",
      bio: "Canadian singer, songwriter, and record producer known for his dark R&B sound.",
      gradient: "from-red-600 to-orange-600"
    },
    {
      id: 3,
      name: "Bad Bunny",
      genre: "Reggaeton",
      monthlyListeners: "82.3M",
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400",
      topSong: "Me Porto Bonito",
      bio: "Puerto Rican rapper and singer who helped bring reggaeton to global mainstream.",
      gradient: "from-green-600 to-blue-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Artist Spotlight</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the artists shaping today's music scene
          </p>
        </div>

        {/* Artist selector */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-full p-2">
            {artists.map((artist, index) => (
              <button
                key={artist.id}
                onClick={() => setSelectedArtist(index)}
                className={`px-6 py-3 rounded-full mx-1 transition-all duration-300 ${
                  selectedArtist === index
                    ? 'bg-green-500 text-black font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {artist.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected artist display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Artist info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 text-xs font-semibold bg-green-500 text-black rounded-full">
                  {artists[selectedArtist].genre}
                </span>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{artists[selectedArtist].monthlyListeners} monthly listeners</span>
                </div>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold gradient-text">
                {artists[selectedArtist].name}
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                {artists[selectedArtist].bio}
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3 text-white">Popular Track</h4>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${artists[selectedArtist].gradient} flex items-center justify-center`}>
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white">{artists[selectedArtist].topSong}</p>
                  <p className="text-gray-400 text-sm">{artists[selectedArtist].name}</p>
                </div>
                <Button
                  size="sm"
                  className="bg-green-500 hover:bg-green-400 text-black rounded-full"
                >
                  <Play className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 rounded-full"
              >
                Follow Artist
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black px-8 rounded-full"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Profile
              </Button>
            </div>
          </div>

          {/* Artist image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={artists[selectedArtist].image}
                alt={artists[selectedArtist].name}
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${artists[selectedArtist].gradient} opacity-40`}></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">
                  {artists[selectedArtist].monthlyListeners}
                </p>
                <p className="text-sm text-gray-400">Monthly Listeners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}