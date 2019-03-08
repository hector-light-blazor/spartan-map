import { Injectable } from '@angular/core';
import { loadModules } from 'esri-loader';
@Injectable({
  providedIn: 'root'
})
export class EsriService {

  //This will contain all global variables for loading esri map
  vectorSubURL: string = "https://tiles.arcgis.com/tiles/HZn9sYWTEUxVRQW9/arcgis/rest/services/MapFlex_Sub/VectorTileServer";

  map: any =  null;
  vector: any = null;

  constructor() { 
    this.loadModules();
  }

  loadModules() {
    loadModules(["esri/map", "esri/layers/VectorTileLayer"]).then(([Map,VectorTileLayer ]) => {
     
      this.map = Map;
      this.vector = VectorTileLayer;
    });
  }
}
