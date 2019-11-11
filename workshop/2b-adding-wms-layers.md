# Adding Web Map Service layers
Terria's format support is far wider than just CSV. Let's add some WMS layers from an open data portal.

1. Find a dataset with a WMS url on https://catalogue.data.govt.nz/dataset?q=rail&res_format=OGC+WMS&sort=score+desc%2C+metadata_modified+desc (you could search for "trees", "rail" or similar)
2. Add one of them to your catalog by adding the following catalog json:
```json
{
"type": "wms-group",
"name": "Marlborough District Council - Notable Trees",
"url": "https://gis.marlborough.govt.nz/server/services/OpenData/OpenData5/MapServer/WMSServer?request=GetCapabilities&service=WMS"
}
```
replacing the url portion with the URL you get when you click on a dataset and click the OGC WMS distribution.

3. Refresh your TerriaMap and add the new layer to your map.
4. Click "Zoom to extent" in the workbench on the left. You might also have to zoom in more to see the data.

# Adding Open Steet Map layers

Terria also supports OSM tiles layers (also known as XYZ tiles or slippy map tiles)

Add the Stamen design watercolour map to your catalog with the following json:
```json
{
  "name": "Stamen watercolour map",
  "type": "open-street-map",
  "url": "http://{s}.tile.stamen.com/watercolor/",
  "subdomains": ["a", "b", "c"],
  "attribution": '<a href="http://openstreetmap.org">OpenStreetMap</a> Contributors and <a href="http://stamen.com">Stamen Design</a>',
  "opacity": 1.0
},
```

Note the single quotes aren't valid JSON but Terria uses the JSON5 parser for catalog items which allows for more Javascript-like JSON

# Adding ArcGIS layers

Yep. Terria supports those too. Add an ArcGIS example with the following:
```json
{
  "name": "ArcGIS example",
  "type": "esri-mapServer",
  "url": "https://gis.wcc.govt.nz/arcgis/rest/services/Transportation/RailwayStations/MapServer/0"
}
```

There are also many ArcGIS datasets on https://catalogue.data.govt.nz/ that can be explored. You might need to navigate to the .../Mapserver/ url in your browser, check the layer numbers and add that layer number you want to end of the URL in your config to get the layer to show in Terria.

# Adding a GLTF model

Cesium gives Terria the capability to visualise many types of 3D content including 3D models in the GLTF format. Add a sample GLTF model with the following json:

```json
{
  "name": "Cesium Air",
  "type": "gltf",
  "url": "build/TerriaJS/test/gltf/Cesium_Air.glb",
  "origin": {
    "longitude": 174.8075,
    "latitude": -41.317,
    "height": 40.0
  },
  "upAxis": "Y",
  "forwardAxis": "Z"
},
```

You can adjust the position of the model and orient the axes of the model with config options.
