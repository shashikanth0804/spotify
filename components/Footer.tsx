import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For the Record</a></li>
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h3 className="text-white font-semibold mb-4">Communities</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">For Artists</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advertising</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vendors</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Player</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Free Mobile App</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-black transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-black transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-black transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-black transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold gradient-text mb-4 md:mb-0">
              Spotify
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Legal</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Center</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
              <a href="#" className="hover:text-white transition-colors">About Ads</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
          
          <div className="text-center md:text-right mt-6">
            <p className="text-gray-400 text-sm">
              © 2024 Spotify AB. This is a redesign concept.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}