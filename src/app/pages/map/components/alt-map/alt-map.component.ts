
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

// import { } from '@types/googlemaps';


@Component({
  selector: 'alt-map',
  templateUrl: './alt-map.component.html',
  styleUrls: ['./alt-map.component.css']
})

export class AltMapComponent {  
  @ViewChild('gmap', {static: false}) gmapElement: any;

  // map: google.maps.Map;

  // ngOnInit() {
  //   var mapProp = {
  //     center: new google.maps.LatLng(18.5793, 73.8143),
  //     zoom: 15,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  // }
}