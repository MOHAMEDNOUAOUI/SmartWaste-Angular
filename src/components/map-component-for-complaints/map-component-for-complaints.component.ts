import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { Store } from '@ngrx/store';
import { selecteRoute } from '../../app/core/store/Roots/RootesSelector';
import { Bins } from '../../app/core/Models/Bins.modules';

@Component({
  selector: 'app-map-component-for-complaints',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-component-for-complaints.component.html',
})
export class MapComponentForComplaintsComponent implements OnInit, OnDestroy {
  map: any;
  userMarker: any;
  private zoomLevel: number = 17;

  private DriverIcon = L.icon({
    iconUrl: 'garbageTruck.png',
    iconSize: [58, 35], 
    iconAnchor: [29, 22],
    popupAnchor: [0, -22]
  });

  constructor(private store:Store) {}

  ngOnInit(): void {
    this.setInitialPosition();
    this.store.select(selecteRoute).subscribe(route => {
      if(route){
        this.setMarskOnMap(route!.bins)
      }
    });
  }


  setMarskOnMap(bins: Bins[]): void {

    this.map.eachLayer((layer:L.Layer) => {
      if (layer instanceof L.Marker && layer.options.icon !== this.DriverIcon){
        this.map.removeLayer(layer);
      }
    });
  
    bins.forEach((bin) => {
      L.marker([bin.location_latitude, bin.location_longitude], { draggable: false }).addTo(this.map);
    });
  }
  

  setInitialPosition(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          this.initMap(userLat, userLng);
        },
        () => {
          console.error("Could not get user location, setting default position.");
          this.initMap(51.505, -0.09);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      this.initMap(51.505, -0.09);
    }
  }

  initMap(lat: number, lng: number): void {
    setTimeout(() => {
      if (!this.map) {
        this.map = L.map('map').setView([lat, lng], this.zoomLevel);
  
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  
        this.userMarker = L.marker([lat, lng], { draggable: false, icon: this.DriverIcon }).addTo(this.map);
        L.circle([lat,lng] , {
          radius:10000,
          color:'blue',
          fillOpacity:0.2
        }).addTo(this.map);


      }
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  }


}
