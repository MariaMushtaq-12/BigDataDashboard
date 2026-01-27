import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Output() geeRequested = new EventEmitter<void>();
  @Output() datacubeRequested = new EventEmitter<void>();
 geeActive = false;

    loadGEE() {
       this.dataCubeActive = false;
       this.geeActive = !this.geeActive;
      this.geeRequested.emit();
    }

      removeGEE() {
    this.geeActive = false;
    
  }

  dataCubeActive = false;

    loadDataCube() {
      this.dataCubeActive = !this.dataCubeActive;
      this.datacubeRequested.emit();
       this.geeActive = false;
    } 
    
    removeDataCube() {
      this.dataCubeActive = false;
    }
}
