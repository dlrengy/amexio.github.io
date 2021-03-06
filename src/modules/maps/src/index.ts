import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MapProperties} from "./mapproperties/map.properties";
import {GeoChartComponent} from "./geochart/geo.chart.component";
import {TreeMapComponent} from "./treemap/treemap.map.component";
import {MapTitleComponent} from "./maptitle/map.title.component";
import {MapLoaderService} from "./map.loader.service";

export * from './mapproperties/map.properties';
export * from './geochart/geo.chart.component';
export * from "./treemap/treemap.map.component";
export * from "./maptitle/map.title.component";
export * from "./map.loader.service";

const MAPS = [
  MapProperties,
  GeoChartComponent,
  TreeMapComponent,
  MapTitleComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: MAPS,
  exports: MAPS
})
export class AmexioMapsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AmexioMapsModule,
      providers: [MapLoaderService]
    };
  }
}
