# Deploying your TerriaMap
Until now you've been building and accessing the TerriaMap you've made as a local server, but you can publish your TerriaMap so it is globally available.   Normally we'd deploy a TerriaMap as a Node.js server-backed application for the following benefits:
- Proxy service
- Share service
- Conversion service (to visualise shapefiles and other vector data formats that can be converted to GeoJSON with GDAL)

But static hosting is so easy and free with tool like Surge.sh and Netlify so we'll stick to static hosting for this workshop. We'll point to existing Terria services to make up for the missing Node.js server. Note that:
- share data (including story text) will be stored in plaintext in a Terria-owned S3 bucket when you don't set up your own server with sharing
- the proxy server we point to doesn't support

To