'use client';

import { useState } from 'react';
import { Play, Heart, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FeaturedPlaylists() {
  const [hoveredPlaylist, setHoveredPlaylist] = useState<number | null>(null);

  const playlists = [
    {
      id: 1,
      title: "Today's Top Hits",
      description: "The most played songs right now.",
      cover: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=300",
      gradient: "from-red-500 to-pink-500",
      songs: "50 songs"
    },
    {
      id: 2,
      title: "RapCaviar",
      description: "New music from Drake, Travis Scott and more.",
      cover: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300",
      gradient: "from-purple-500 to-indigo-500",
      songs: "65 songs"
    },
    {
      id: 3,
      title: "Rock Classics",
      description: "Rock legends & epic songs that continue to inspire.",
      cover: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300",
      gradient: "from-orange-500 to-red-500",
      songs: "100 songs"
    },
    {
      id: 4,
      title: "Chill Hits",
      description: "Kick back to the best new and recent chill hits.",
      cover: "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=300",
      gradient: "from-blue-500 to-cyan-500",
      songs: "75 songs"
    },
    {
      id: 5,
      title: "Indie Mix",
      description: "The best indie tracks old and new.",
      cover: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=300",
      gradient: "from-green-500 to-teal-500",
      songs: "45 songs"
    },
    {
      id: 6,
      title: "Electronic Vibes",
      description: "The pulse of electronic music.",
      cover: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300",
      gradient: "from-purple-500 to-pink-500",
      songs: "80 songs"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Playlists</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover curated playlists made by our music experts and AI algorithms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="group relative"
              onMouseEnter={() => setHoveredPlaylist(playlist.id)}
              onMouseLeave={() => setHoveredPlaylist(null)}
            >
              <div className="glass rounded-2xl p-6 hover-scale cursor-pointer transition-all duration-300">
                {/* Cover Image */}
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={playlist.cover}
                    alt={playlist.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${playlist.gradient} opacity-60`}></div>
                  
                  {/* Play button overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredPlaylist === playlist.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <Button
                      size="lg"
                      className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-400 text-black shadow-2xl"
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </Button>
                  </div>
                </div>

                {/* Playlist Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-200">
                    {playlist.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {playlist.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-gray-500">{playlist.songs}</span>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-red-400 p-2"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white p-2"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-8 py-3 rounded-full"
          >
            View All Playlists
          </Button>
        </div>
      </div>
    </section>
  );
}