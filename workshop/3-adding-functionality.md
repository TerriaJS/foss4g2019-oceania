# Adding functionality to your TerriaMap

So far, this workshop has gone through how to set up your own TerriaMap using functionality from the TerriaJS library. In this part you'll add a new custom kind of catalog item that can be used to drape an image onto the 3D terrain of the map.

1) Find `ImageCatalogItem.ts` in the `lib/Models` folder. This is where you will put your code. If you don't know TypeScript, don't panic! Apart from some of the extra syntax for classes, you can more or less write ordinary old JavaScript. 

You'll need to implement 2 functions: `get imageryProvider` and `get mapItems`.

2) `get imageryProvider` does what it sounds like: it returns an object that can be used to retrieve map imagery. Cesium.js, the map rendering library we use, calls the image provider when it draws the map.

Have a look at the documentation for the [SingleTileImageryProvider](https://cesiumjs.org/Cesium/Build/Documentation/SingleTileImageryProvider.html?classFilter=imageryProvider). There are many kinds of imagery providers-- for example, there is a BingMapsImageryProvider and an ArcGisMapServerImageryProvider-- but for now we'll stick to something simple.

Now, fill in the body of the function.

3) Every `Mappable` in Terria needs to provide a `get mapItems` that returns a list of `ImageryParts` `DataSource`s, `Cesium3DTileset`s or `TerrainProvider`s. The renderer uses these to draw the map items. In this case, we'll return a list of ImageryParts. An ImageryPart looks like this:

```ts
    interface ImageryParts {
    alpha: number;
    show: boolean;
    imageryProvider: Cesium.ImageryProvider;
}
```

If you're not familiar with TypeScript, interfaces describe the keys that must be in an object. So an object that looks like this:

```ts
    {
        alpha: 0.3,
        show: false,
        imageryProvider: provider //something of type ImageryProvider
    }
```

would conform to the interface.

4) We've created a custom catalog item type, now we need to add an actual item to the catalog. Go to `foss4g.json` and add this to the catalog:

```json
        {
          "type": "image",
          "name": "Insert name here",
          "url": "the url of an image you like, or use images/2019.png",
          // This specifies where to put it. Use http://bboxfinder.com/ to pick the latitudes and longitudes of a bounding box, or use the one below.
          "rectangle": {
            "west": 18.0,
            "south": 40.0,
            "east": 34.0,
            "north": 44.0
          }
        }
```
Note that the type is `image` rather than csv this time. The type of the catalog item was specified in these two lines:

```ts
  static type = "image";
  type = "image";
```

5) Every kind of catalog item needs to be registered with the Terria "master object", which can be thought of as the core of the application. Find `index.js`, import your new catalog item and add the line:

```ts
    CatalogMemberFactory.register(ImageCatalogItem.type, ImageCatalogItem);
```

next to the similar looking ones.

6) Time to build and run! Type `npm start && npm run gulp watch` into your terminal to automatically recompile the app when changes to the source files are detected. Open https://localhost:3000 in your browser and you should see your new item in the catalog.
