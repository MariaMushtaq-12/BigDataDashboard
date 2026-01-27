import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Header} from '../header/header';
import {Sidebar} from '../sidebar/sidebar';
import {RouterModule} from '@angular/router';
import { Footer } from '../footer/footer';
import { MapComponent } from "../map/map";
import { ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shell',
  imports: [Header, Sidebar, RouterModule, Footer, CommonModule,MapComponent],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell {

    @ViewChild('mapComp') mapComp!: MapComponent;

    constructor(private http: HttpClient) {}

//     requestGEELayer() {
//       this.http.get<any>('http://localhost:1234/gee-layer')
//         .subscribe(res => {
//           this.mapComp.addGEELayer(res.tileUrl);
//         });
//     }


//     requestDataCubeLayer() {
//   this.http.get<any>('http://localhost:1234/datacube-layer')
//     .subscribe(res => {
//       console.log('Datacube data received:', res);
//       // TODO: Convert response to OpenLayers layer or visualize as needed
//       this.mapComp.addDataCubeLayer(res); 
//     }, err => console.error('Datacube request error:', err));
// }
    requestGEELayer() {
      if (!this.mapComp) return;

      // Optionally remove DataCube before adding GEE
      this.mapComp.removeDataCubeLayer();

      this.http.get<any>('http://localhost:1234/gee-layer')
        .subscribe(res => {
          this.mapComp.addGEELayer(res.tileUrl);
        });
    }

    requestDataCubeLayer() {
      if (!this.mapComp) return;

      // Optionally remove GEE before adding DataCube
      this.mapComp.removeGEELayer();

      this.http.get<any>('http://localhost:1234/datacube-layer')
        .subscribe(res => {
          this.mapComp.addDataCubeLayer(res);
        });
    }

}
