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

  showMap = true;
  showLexcube = false;

  constructor(private http: HttpClient) {}

  // When GEE clicked
  requestGEELayer() {
    this.showLexcube = false;
    this.showMap = true;

    setTimeout(() => {
      if (!this.mapComp) return;

      this.mapComp.removeDataCubeLayer();

      this.http.get<any>('http://localhost:1234/gee-layer')
      // this.http.get<any>('https://backend-bigdatadashboard.onrender.com')
        .subscribe(res => {
          this.mapComp.addGEELayer(res.tileUrl);
        });
    });
  }

  // When DataCube clicked
  requestDataCubeLayer() {
    // Hide OpenLayers map
    this.showMap = false;

    // Show Lexcube iframe
    this.showLexcube = true;
  }
}
