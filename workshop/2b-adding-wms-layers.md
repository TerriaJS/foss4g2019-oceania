# Adding Web Map Service layers
Terria's format support is far wider than just CSV. Let's add some WMS layers from an open data portal.

1. Find a dataset with a WMS url on https://environment.data.gov.uk/ (searching for WMS brings up many)
2. Add one of them to your catalog by adding the following catalog json:
```
{
"type": "wms-group",
"name": "Indicative Flood Risk Areas",
"url": "https://environment.data.gov.uk/spatialdata/blue-square-grid/wms"
}
```
replacing the url portion with the URL you get when you click the "Copy link to clipboard" button listed beside the WMS service and choosing an appropriate name
3. Refresh your TerriaMap and add the new layer to your map
4. Click "Zoom to extent" in the workbench on the left. You might also have to zoom in more to see the data (the WMS services from this site seem reliable but require zooming in to cities to see data)
