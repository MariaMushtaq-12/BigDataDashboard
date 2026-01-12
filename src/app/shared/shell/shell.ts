import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Header} from '../header/header';
import {Sidebar} from '../sidebar/sidebar';
import {RouterModule} from '@angular/router';
import { Footer } from '../footer/footer';
import { MapComponent } from "../map/map";
@Component({
  selector: 'app-shell',
  imports: [Header, Sidebar, RouterModule, Footer, CommonModule,MapComponent],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell {

}
