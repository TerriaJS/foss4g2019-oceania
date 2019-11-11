# Adding Web Map Service layers
Terria's format support is far wider than just CSV. Let's add some WMS layers from an open data portal.

1. Find a dataset with a WMS url on https://environment.data.gov.uk/ (searching for WMS brings up many)
2. Add one of them to your catalog by adding the following catalog json:
```json
{
"type": "wms-group",
"name": "Indicative Flood Risk Areas",
"url": "https://environment.data.gov.uk/spatialdata/blue-square-grid/wms"
}
```
replacing the url portion with the URL you get when you click the "Copy link to clipboard" button listed beside the WMS service and choosing an appropriate name.

3. Refresh your TerriaMap and add the new layer to your map.
4. Click "Zoom to extent" in the workbench on the left. You might also have to zoom in more to see the data (the WMS services from this site seem reliable but require zooming in to cities to see data)

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

# Adding a WPS layer

Terria also supports [Web Processing Service](https://en.wikipedia.org/wiki/Web_Processing_Service) layers. Try the following example from GeoGLAM:

```json
{
          "name": "GeoGLAM Vegetation Cover",
          "url": "http://gsky.nci.org.au/ows/geoglam",
          "type": "wps",
          "identifier": "geometryDrill",
          "description": "This function can be used to query the Vegetation Fractional Cover layer data. The output is a graph which includes NPV, PV, NPV+PV Total, BS, and Precipitation. ",
}
```

Now make a layer for `http://climatemap.duckdns.org:5000/wps` that uses the indentifier `tempthresh`. This will allow you to visualise the number of days where the temperature in a region exceeds a certain threshold according to climate projections.


