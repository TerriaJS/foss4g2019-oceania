import { computed } from "mobx";
import Rectangle from "terriajs-cesium/Source/Core/Rectangle";
import SingleTileImageryProvider from "terriajs-cesium/Source/Scene/SingleTileImageryProvider";
import CatalogMemberMixin from "terriajs/lib/ModelMixins/CatalogMemberMixin";
import UrlMixin from "terriajs/lib/ModelMixins/UrlMixin";
import CreateModel from "terriajs/lib/Models/CreateModel";
import Mappable from "terriajs/lib/Models/Mappable";
import CatalogMemberTraits from "terriajs/lib/Traits/CatalogMemberTraits";
import FeatureInfoTraits from "terriajs/lib/Traits/FeatureInfoTraits";
import MappableTraits, {
  RectangleTraits
} from "terriajs/lib/Traits/MappableTraits";
import mixTraits from "terriajs/lib/Traits/mixTraits";
import RasterLayerTraits from "terriajs/lib/Traits/RasterLayerTraits";
import SplitterTraits from "terriajs/lib/Traits/SplitterTraits";
import UrlTraits from "terriajs/lib/Traits/UrlTraits";

export class ImageCatalogItemTraits extends mixTraits(
  SplitterTraits,
  FeatureInfoTraits,
  UrlTraits,
  RectangleTraits,
  CatalogMemberTraits,
  RasterLayerTraits,
  MappableTraits
) {}

class ImageCatalogItem
  extends UrlMixin(CatalogMemberMixin(CreateModel(ImageCatalogItemTraits)))
  implements Mappable {
  static type = "image";
  type = "image";
  forceLoadMetadata() {
    return Promise.resolve();
  }
  loadMapItems() {
    return Promise.resolve();
  }

  @computed get imageryProvider() {
    if (this.url) {
      const rectangle = Rectangle.fromDegrees(
        this.rectangle.west,
        this.rectangle.south,
        this.rectangle.east,
        this.rectangle.north
      );

      return new SingleTileImageryProvider({
        url: this.url,
        rectangle
      });
    }
  }

  @computed get mapItems() {
    const imageryProvider = this.imageryProvider;
    if (imageryProvider) {
      return [
        {
          alpha: this.opacity,
          show: this.show,
          imageryProvider
        }
      ];
    } else {
      return [];
    }
  }
}

export default ImageCatalogItem;
