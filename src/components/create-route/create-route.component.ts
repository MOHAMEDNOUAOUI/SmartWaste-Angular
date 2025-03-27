import { Component, EventEmitter, Output, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matClose } from '@ng-icons/material-icons/baseline';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { VehicluesSelector } from '../../app/core/store/Vehicule/VehiculeSelector';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Vehicule } from '../../app/core/Models/Vehicule.modules';
import { LoadAllVehicules } from '../../app/core/store/Vehicule/VehiculeActions';
import * as L from 'leaflet';
import { CreateRoute } from '../../app/core/store/Roots/RoutesActions';
import { Roots, RootsCreateDTO } from '../../app/core/Models/Roots.modules';

@Component({
  selector: 'app-create-route',
  imports: [NgIcon, ReactiveFormsModule, CommonModule],
  templateUrl: './create-route.component.html',
  styleUrl: './create-route.component.css',
  viewProviders: [provideIcons({ matClose })]
})
export class CreateRouteComponent implements OnInit, OnDestroy, AfterViewInit {
  @Output() close = new EventEmitter();
  
  routeForm!: FormGroup;
  vehicules$: Observable<Vehicule[] | null>;

  private destroy$ = new Subject<void>();
  private map!: L.Map;
  private markers: { [key: number]: L.Marker } = {};
  selectedBinIndex: number = -1;
  private mapInitialized = false;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
    this.initForm();
    this.vehicules$ = this.store.select(VehicluesSelector);
  }

  ngOnInit(): void {
    this.store.dispatch(LoadAllVehicules());
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeMap();
    }, 0);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.cleanupMap();
  }

  private cleanupMap(): void {
    if (this.map) {
      
      Object.values(this.markers).forEach(marker => marker.remove());
      this.markers = {};
      
      this.map.remove();
      this.map = null!;
      this.mapInitialized = false;
    }
  }

  private initForm() {
    this.routeForm = this.fb.group({
      distance: ['', [Validators.required, Validators.min(0)]],
      vehicleId: ['', Validators.required],
      start_time: [null, Validators.required],
      end_time: [null, Validators.required],
      bins: this.fb.array([])
    });

    this.routeForm.get('end_time')?.valueChanges.subscribe(() => {
      this.validateTimeRange();
    });
    this.routeForm.get('start_time')?.valueChanges.subscribe(() => {
      this.validateTimeRange();
    });
  }

  private validateTimeRange() {
    const start = this.routeForm.get('start_time')?.value;
    const end = this.routeForm.get('end_time')?.value;
    
    if (start && end && new Date(end) <= new Date(start)) {
      this.routeForm.get('end_time')?.setErrors({ ['invalidRange']: true });
    } else {
      const currentErrors = this.routeForm.get('end_time')?.errors;
      if (currentErrors) {
        delete currentErrors['invalidRange'];
        this.routeForm.get('end_time')?.setErrors(Object.keys(currentErrors).length ? currentErrors : null);
      }
    }
  }

  get bins() {
    return this.routeForm.get('bins') as FormArray;
  }

  hasBinErrors(): boolean {
    return this.bins.length > 0 && this.bins.controls.some(control => !control.valid);
  }

  addBin() {
    const binForm = this.fb.group({
      location: ['', Validators.required],
      capacity: [null, Validators.required],
      location_latitude: [null, Validators.required],
      location_longitude: [null, Validators.required]
    });

    this.bins.push(binForm);
    this.selectedBinIndex = this.bins.length - 1;
  }

  private initializeMap(): void {
    if (this.mapInitialized || !document.getElementById('map')) {
      return; 
    }

    try {
      
      this.map = L.map('map', {
        preferCanvas: true
      }).setView([33.5731, -7.5898], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

      
      this.map.on('click', (e: L.LeafletMouseEvent) => {
        if (this.selectedBinIndex !== -1) {
          const binForm = this.bins.at(this.selectedBinIndex);
          if (binForm) {
            binForm.patchValue({
              location_latitude: e.latlng.lat,
              location_longitude: e.latlng.lng
            });

            if (this.markers[this.selectedBinIndex]) {
              this.markers[this.selectedBinIndex].setLatLng(e.latlng);
            } else {
              this.markers[this.selectedBinIndex] = L.marker(e.latlng).addTo(this.map);
            }
          }
        }
      });

      this.mapInitialized = true;
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }

  selectBinLocation(index: number) {
    this.selectedBinIndex = index;
    
    const binForm = this.bins.at(index);
    const lat = binForm.get('location_latitude')?.value;
    const lng = binForm.get('location_longitude')?.value;
    
    if (lat && lng && this.map) {
      this.map.setView([lat, lng], 15);
    }
  }

  removeBin(index: number) {
    if (this.markers[index]) {
      this.markers[index].remove();
      delete this.markers[index];
    }

    this.bins.removeAt(index);
    if (this.selectedBinIndex === index) {
      this.selectedBinIndex = -1;
    }
  }

  onSubmit() {
    if (this.routeForm.valid) {
      const formValue = this.routeForm.value;
      
      const route: RootsCreateDTO = {
        vehiculeId: parseInt(formValue.vehicleId),
        start_time: formValue.start_time,
        end_time: formValue.end_time,
        distance:formValue.distance,
        bins: formValue.bins.map((bin: any) => ({
          location: bin.location,
          capacity: parseInt(bin.capacity),
          location_latitude: parseFloat(bin.location_latitude),
          location_longitude: parseFloat(bin.location_longitude)
        }))
      };

      
      this.store.dispatch(CreateRoute({route:route}));
      this.close.emit();
    }
  }
}
