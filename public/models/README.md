# 3D Models Directory

This directory contains 3D models for industrial safety products.

## Supported Formats

- **GLB** (recommended) - Binary glTF format, optimized for web
- **OBJ** - Wavefront OBJ format

## Model Optimization Tips

1. **File Size**: Keep models under 5MB for fast loading
2. **Polygon Count**: Aim for 10K-50K triangles for good performance
3. **Textures**: Use compressed textures (JPEG/WebP) with reasonable resolution
4. **Compression**: Use DRACO compression for GLB files to reduce file size

## Adding Models

1. Place your model files in this directory (`/public/models/`)
2. Update the `modelUrl` in the product data in `components/Products.tsx`
3. Ensure the file path is relative to `/public/` (e.g., `/models/product.glb`)

## Example Model Structure

```
public/
  models/
    fence.glb
    sensor.glb
    lock.glb
    barrier.glb
    camera.glb
    warning-light.glb
```

## Creating/Converting Models

### From Blender:
1. Export as GLB format
2. Enable compression if available
3. Optimize mesh (decimate if needed)

### From Other Software:
- Use online converters like:
  - [glTF Converter](https://products.aspose.app/3d/conversion)
  - [Online 3D Converter](https://www.online-convert.com/)

### Using Command Line Tools:
```bash
# Install gltf-pipeline for optimization
npm install -g gltf-pipeline

# Optimize a GLB file
gltf-pipeline -i input.glb -o output.glb -d
```

## Testing Models

Models are loaded dynamically. If a model fails to load, a placeholder geometry will be displayed. Check the browser console for loading errors.

