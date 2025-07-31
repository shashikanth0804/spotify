# Spotify Clone - Modern Music Streaming Platform

A beautiful, responsive Spotify-inspired music streaming platform built with Next.js, TypeScript, and Tailwind CSS. This project showcases modern web development practices with stunning UI/UX design and smooth animations.

## 🎵 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Spotify-inspired dark theme with glassmorphism effects
- **Interactive Components**: 
  - Dynamic music player mockup with visualization
  - Artist spotlight with smooth transitions
  - Featured playlists with hover effects
  - Premium pricing plans comparison
- **Smooth Animations**: 
  - Floating music notes
  - Pulse effects and hover states
  - Music visualization bars
  - Gradient text effects
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **Accessible**: Proper semantic HTML and keyboard navigation support

## 🚀 Tech Stack

- **Framework**: Next.js 14.2.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Animations**: CSS animations + Tailwind utilities
- **Build Tool**: Next.js built-in bundler

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd spotify-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Features

### Color Palette
- **Primary Green**: #1DB954 (Spotify's signature green)
- **Background**: Pure black (#000000) with gradient overlays
- **Text**: White (#FFFFFF) with gray variations for hierarchy
- **Accents**: Purple, blue, and orange gradients for visual interest

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: Clear typographic scale from 5xl headings to small captions
- **Readability**: Optimized line heights and spacing

### Animations
- **Floating Elements**: Subtle floating animations for music notes
- **Hover Effects**: Scale transforms and color transitions
- **Music Visualization**: Animated bars that respond to play state
- **Gradient Text**: Dynamic gradient effects on key headings

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Customization

### Adding New Playlists
Edit `components/FeaturedPlaylists.tsx` and add to the `playlists` array:

```typescript
{
  id: 7,
  title: "Your Playlist Name",
  description: "Your description",
  cover: "https://your-image-url.jpg",
  gradient: "from-color-500 to-color-600",
  songs: "X songs"
}
```

### Modifying Artists
Update `components/ArtistSpotlight.tsx` in the `artists` array:

```typescript
{
  id: 4,
  name: "Artist Name",
  genre: "Genre",
  monthlyListeners: "XX.XM",
  image: "https://your-image-url.jpg",
  topSong: "Song Title",
  bio: "Artist biography",
  gradient: "from-color-600 to-color-600"
}
```

### Styling Changes
- Global styles: `app/globals.css`
- Component styles: Individual component files
- Tailwind config: `tailwind.config.ts`

## 🌟 Key Components

1. **Navigation** - Responsive navbar with scroll effects
2. **Hero** - Interactive music player with animations
3. **FeaturedPlaylists** - Grid of curated playlists
4. **ArtistSpotlight** - Interactive artist showcase
5. **PremiumPlans** - Pricing comparison cards
6. **Footer** - Links and social media

## 📸 Screenshots

The application features:
- Stunning hero section with animated music player
- Beautiful playlist cards with hover effects
- Interactive artist spotlight section
- Professional pricing plans layout
- Responsive design across all devices

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project is configured for static export and can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is for educational and portfolio purposes. Spotify is a trademark of Spotify AB.

## 🙏 Acknowledgments

- **Spotify** for design inspiration
- **Pexels** for high-quality stock images
- **Radix UI** for accessible component primitives
- **Tailwind CSS** for utility-first styling
- **Lucide** for beautiful icons

## 📞 Contact

Feel free to reach out if you have any questions or suggestions!

---

**Note**: This is a design concept and not affiliated with Spotify AB. All trademarks belong to their respective owners.