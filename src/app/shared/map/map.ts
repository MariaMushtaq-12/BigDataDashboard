// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-map',
//   imports: [],
//   templateUrl: './map.html',
//   styleUrl: './map.css',
// })
// export class Map {

// }
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class MapComponent implements OnInit {
  private olMap: Map | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.initializeMap();
    }, 100);
  }

  private initializeMap(): void {
    if (this.olMap) {
      return;
    }

    try {
      this.olMap = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: [0, 0],
          zoom: 2
        })
      });
      
      if (this.olMap) {
        this.olMap.updateSize();
      }
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }
}
