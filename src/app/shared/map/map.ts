import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';
import XYZ from 'ol/source/XYZ';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class MapComponent implements OnInit {
  // private olMap: Map | null = null;

  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // ngOnInit(): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     console.log('Initializing map on the browser platform.',this.platformId);
  //     setTimeout(() => this.initializeMap(), 0);
  //   }
  // }

  // private initializeMap(): void {
  //   if (this.olMap) return;

  //   this.olMap = new Map({
  //     target: 'map',
  //     layers: [
  //       new TileLayer({
  //         source: new OSM()
  //       })
  //     ],
  //     view: new View({
  //       center: fromLonLat([69, 30]),
  //       zoom: 5
  //     })
  //   });

  //   this.olMap.updateSize();
  // }
  
  // addGEELayer(tileUrl: string) {
  //   if (!this.olMap) return;

  //   const geeLayer = new TileLayer({
  //     source: new XYZ({
  //       url: tileUrl
  //     })
  //   });

  //   this.olMap.addLayer(geeLayer);
  // }
  // addDataCubeLayer(data: any) {
  //   if (!this.olMap) return; 
  //   const geeLayer = new TileLayer({
  //     source: new XYZ({
  //       url: data.tileUrl
  //     })
  //   });

  //   this.olMap.addLayer(geeLayer);
  //  }
    private olMap: Map | null = null;
    private geeLayer: TileLayer | null = null;
    private dataCubeLayer: TileLayer | null = null;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.initializeMap(), 0);
      }
    }

    private initializeMap(): void {
      if (this.olMap) return;

      this.olMap = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: fromLonLat([69, 30]),
          zoom: 5
        })
      });
    }

    // Add GEE layer
    addGEELayer(tileUrl: string) {
      if (!this.olMap) return;

      // Remove existing GEE layer
      if (this.geeLayer) {
        this.olMap.removeLayer(this.geeLayer);
        this.geeLayer = null;
      }

      // Remove DataCube if exists
      if (this.dataCubeLayer) {
        this.olMap.removeLayer(this.dataCubeLayer);
        this.dataCubeLayer = null;
      }

      this.geeLayer = new TileLayer({
        source: new XYZ({
          url: tileUrl
        })
      });

      this.olMap.addLayer(this.geeLayer);
    }

    // Add DataCube layer
    addDataCubeLayer(data: any) {
      if (!this.olMap) return;

      // Remove existing DataCube layer
      if (this.dataCubeLayer) {
        this.olMap.removeLayer(this.dataCubeLayer);
        this.dataCubeLayer = null;
      }

      // Remove GEE if exists
      if (this.geeLayer) {
        this.olMap.removeLayer(this.geeLayer);
        this.geeLayer = null;
      }

      // Here we assume backend returns tileUrl like GEE
      this.dataCubeLayer = new TileLayer({
        source: new XYZ({
          url: data.tileUrl
        })
      });

      this.olMap.addLayer(this.dataCubeLayer);
    }

    // Optionally remove layers individually
    removeGEELayer() {
      if (this.geeLayer && this.olMap) {
        this.olMap.removeLayer(this.geeLayer);
        this.geeLayer = null;
      }
    }

    removeDataCubeLayer() {
      if (this.dataCubeLayer && this.olMap) {
        this.olMap.removeLayer(this.dataCubeLayer);
        this.dataCubeLayer = null;
      }
    }

}
