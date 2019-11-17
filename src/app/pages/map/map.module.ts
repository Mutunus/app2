import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { MapRoutingModule } from './map-routing.module'
import { AgmCoreModule } from '@agm/core';
import { AltMapComponent } from './components/alt-map/alt-map.component';

@NgModule({
  declarations: [
    MapComponent,
    AltMapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    AgmCoreModule
  ],
  exports: [
    MapComponent,
    AltMapComponent

  ]
})
export class MapModule { }
