# Industrial Safety Products Website

A responsive website showcasing industrial safety products with interactive 3D model viewers. Built with Next.js, Three.js, and Tailwind CSS.

## Features

- ✅ **Interactive 3D Product Viewer** - WebGL/Three.js powered 3D model viewer
- ✅ **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ✅ **Fast Loading** - Optimized 3D models with lazy loading
- ✅ **SEO Optimized** - Complete metadata and structured data
- ✅ **Analytics Ready** - Google Analytics integration
- ✅ **Smooth UX** - Rotate, zoom, and inspect products in 3D

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

```bash
npm run build
npm start
```

## 3D Models Setup

### Supported Formats

- **GLB** (recommended) - Binary glTF format
- **OBJ** - Wavefront OBJ format

### Adding 3D Models

1. Place your model files in `/public/models/` directory
2. Update product data in `components/Products.tsx`:

```typescript
{
  id: '1',
  name: 'Product Name',
  modelUrl: '/models/your-model.glb', // Path relative to /public
  modelType: 'glb', // or 'obj'
  // ... other properties
}
```

### Model Optimization

For best performance:

1. **File Size**: Keep under 5MB
2. **Polygon Count**: 10K-50K triangles
3. **Textures**: Use compressed formats (JPEG/WebP)
4. **Compression**: Use DRACO compression for GLB files

### Creating/Converting Models

- **Blender**: Export as GLB with compression
- **Online Converters**: 
  - [glTF Converter](https://products.aspose.app/3d/conversion)
  - [Online 3D Converter](https://www.online-convert.com/)

### Command Line Optimization

```bash
# Install gltf-pipeline
npm install -g gltf-pipeline

# Optimize GLB file
gltf-pipeline -i input.glb -o output.glb -d
```

## SEO Configuration

Update metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
  // ... other metadata
}
```

## Analytics Setup

1. Get your Google Analytics ID
2. Update `app/analytics.tsx`:

```typescript
src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"
gtag('config', 'YOUR-GA-ID', {
  page_path: window.location.pathname,
});
```

## Product Categories

The website showcases:

- **Fencing** - Industrial safety fences
- **Sensors** - Motion detection sensors
- **Locks** - Electronic safety locks
- **Barriers** - Safety barrier gates
- **Surveillance** - Security cameras
- **Warning Systems** - Safety warning lights

## 3D Viewer Controls

- **Rotate**: Click and drag
- **Zoom**: Scroll wheel or pinch
- **Pan**: Right-click and drag
- **Auto-rotate**: Enabled by default

## Project Structure

```
brandLift360/
├── app/
│   ├── layout.tsx       # Root layout with SEO
│   ├── page.tsx         # Main page
│   └── analytics.tsx     # Analytics component
├── components/
│   ├── Product3DViewer.tsx  # 3D model viewer
│   ├── Products.tsx          # Products showcase
│   ├── Hero.tsx              # Hero section
│   └── ...                   # Other components
├── public/
│   └── models/              # 3D model files
└── package.json
```

## Performance Tips

1. **Lazy Load Models**: Models load only when needed
2. **Optimize Assets**: Compress images and 3D models
3. **Use CDN**: Serve static assets from CDN
4. **Enable Caching**: Set proper cache headers

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers with WebGL support

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
