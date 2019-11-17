import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 43.879078;
  lng = -103.4615581;
  mapType = 'roadmap'
  styles = [
  //   {
  //   "featureType": "water",
  //   "stylers": [{
  //       "color": "#ff0000"
  //     },
  //     {
  //     "elementType": "geometry",
  //     "stylers": [
  //       {
  //         "hue": "#ff4400"
  //       },
  //       {
  //         "saturation": -100
  //       },
  //       {
  //         "lightness": -4
  //       },
  //       {
  //         "gamma": 0.72
  //       }
  //     ]
  //   }],
  // },
  // {
  //   "featureType": "water",
  //   "stylers": [
  //     {
  //       "hue": "#00ccff"
  //     },
  //     {
  //       "gamma": 0.44
  //     },
  //     {
  //       "saturation": -33
  //     }
  //   ]
  // },
];

  markers = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    { lat: 22.33159, lng: 105.63233, alpha: 1 },
    { lat: 7.92658, lng: -12.05228, alpha: 1 },
    { lat: 48.75606, lng: -118.859, alpha: 1 },
    { lat: 5.19334, lng: -67.03352, alpha: 1 },
    { lat: 12.09407, lng: 26.31618, alpha: 1 },
    { lat: 47.92393, lng: 78.58339, alpha: 1 }
  ];

  constructor() {
   }

  ngOnInit() {
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  onMapClick(e) {
    console.log(e)
    this.lng = e.coords.lng
    this.lat = e.coords.lat
  }

  onZoomChange(e) {
    console.log('zoomChange', e)
  }

}
