// import { computed } from "mobx";
// import Rectangle from "terriajs-cesium/Source/Core/Rectangle";
// import SingleTileImageryProvider from "terriajs-cesium/Source/Scene/SingleTileImageryProvider";
// import CatalogMemberMixin from "terriajs/lib/ModelMixins/CatalogMemberMixin";
// import UrlMixin from "terriajs/lib/ModelMixins/UrlMixin";
// import CreateModel from "terriajs/lib/Models/CreateModel";
// import Mappable, { ImageryParts } from "terriajs/lib/Models/Mappable";
// import CatalogMemberTraits from "terriajs/lib/Traits/CatalogMemberTraits";
// import FeatureInfoTraits from "terriajs/lib/Traits/FeatureInfoTraits";
// import MappableTraits, {
//   RectangleTraits
// } from "terriajs/lib/Traits/MappableTraits";
// import mixTraits from "terriajs/lib/Traits/mixTraits";
// import RasterLayerTraits from "terriajs/lib/Traits/RasterLayerTraits";
// import SplitterTraits from "terriajs/lib/Traits/SplitterTraits";
// import UrlTraits from "terriajs/lib/Traits/UrlTraits";
// import ImageryProvider from "terriajs-cesium/Source/Scene/ImageryProvider";

// export class ImageCatalogItemTraits extends mixTraits(
//   SplitterTraits,
//   FeatureInfoTraits,
//   UrlTraits,
//   RectangleTraits,
//   CatalogMemberTraits,
//   RasterLayerTraits,
//   MappableTraits
// ) {}

// class ImageCatalogItem
//   extends UrlMixin(CatalogMemberMixin(CreateModel(ImageCatalogItemTraits)))
//   implements Mappable {
//   static type = "image";
//   type = "image";

//   forceLoadMetadata() {
//     return Promise.resolve();
//   }
//   loadMapItems() {
//     return Promise.resolve();
//   }

//   @computed get imageryProvider(): ImageryProvider | undefined {
//     // Add your code here
//   }

//   @computed get mapItems(): ImageryParts[] {
//     // Add your code here
// }

// export default ImageCatalogItem;
