import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matClose } from '@ng-icons/material-icons/baseline';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoadAllWorkers } from '../../app/core/store/Utilisateur/UserActions';
import { AllWorkers } from '../../app/core/store/Utilisateur/UserSelector';
import { Worker } from '../../app/core/Models/Utilisateur.modules';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CreateVehicule } from '../../app/core/store/Vehicule/VehiculeActions';
import { Vehicule, VehiculeCreateDTO } from '../../app/core/Models/Vehicule.modules';

@Component({
  selector: 'app-create-vehicule',
  imports: [NgIcon, ReactiveFormsModule, CommonModule],
  templateUrl: './create-vehicule.component.html',
  styleUrl: './create-vehicule.component.css',
  viewProviders: [provideIcons({ matClose })]
})
export class CreateVehiculeComponent implements OnInit {
  @Output() close = new EventEmitter();
  workers$!:Observable<Worker[] |null>;

  vehiculeForm!: FormGroup;
  private map!: L.Map;
  private marker: L.Marker | null = null;
  private mapInitialized = false;

  workerSearchControl = new FormControl('');
  filteredWorkers: Worker[] = [];
  selectedWorker: Worker | null = null;
  showWorkerDropdown = false;

  constructor(private fb: FormBuilder , private store:Store) {
    this.initForm();
    this.initWorkerSearch();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.initializeMap();
    }, 0);
    this.store.dispatch(LoadAllWorkers());
    this.workers$ = this.store.select(AllWorkers);
  }

  private initForm() {
    this.vehiculeForm = this.fb.group({
      vehicule_number: ['', [Validators.required]],
      capacity: [null, [Validators.required, Validators.min(1)]],
      location_longitude: [null, [Validators.required]],
      location_latitude: [null, [Validators.required]],
      worker_id: [null, [Validators.required]]
    });

    // // Subscribe to form value changes for debugging
    // this.vehiculeForm.valueChanges.subscribe(() => {
    //   console.log('Form Values:', this.vehiculeForm.value);
    //   console.log('Form Valid:', this.vehiculeForm.valid);
    //   console.log('Form Errors:', this.vehiculeForm.errors);
    // });
  }

  private initWorkerSearch() {
    this.workerSearchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      if (searchTerm) {
        this.workers$.subscribe(workers => {
          if (workers) {
            this.filteredWorkers = workers.filter(worker => 
              worker.username.toLowerCase().includes(searchTerm.toLowerCase())
            );
            this.showWorkerDropdown = true;
          }
        });
      } else {
        this.filteredWorkers = [];
        this.showWorkerDropdown = false;
      }
    });

    
  }

  selectWorker(worker: Worker) {
    this.selectedWorker = worker;
    this.workerSearchControl.setValue(worker.username, { emitEvent: false });
    this.vehiculeForm.patchValue({ worker_id: worker.id });
    this.showWorkerDropdown = false;
    this.filteredWorkers = [];
  }

  onWorkerSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    if (!searchTerm) {
      this.showWorkerDropdown = false;
      this.filteredWorkers = [];
    }
  }

  private initializeMap(): void {
    if (this.mapInitialized || !document.getElementById('map')) {
      return;
    }

    try {
      this.map = L.map('map', {
        preferCanvas: true
      }).setView([33.5731, -7.5898], 13); // Centered on Casablanca

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      this.map.on('click', (e: L.LeafletMouseEvent) => {
        this.vehiculeForm.patchValue({
          location_latitude: e.latlng.lat,
          location_longitude: e.latlng.lng
        });

        if (this.marker) {
          this.marker.setLatLng(e.latlng);
        } else {
          this.marker = L.marker(e.latlng).addTo(this.map);
        }
      });

      this.mapInitialized = true;
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }

  onSubmit() {
    if (this.vehiculeForm.valid) {
      // console.log('Form submitted:', this.vehiculeForm.value);
      // const vehicule:VehiculeCreateDTO = {
      //   vehicule_number:this.vehiculeForm.value.vehicule_number,
      //   capacity:this.vehiculeForm.value.capacity,
      //   location_longitude:this.vehiculeForm.value.location_longitude,
      //   location_latitude:this.vehiculeForm.value.location_latitude,
      //   worker_id:this.vehiculeForm.value.worker_id,
      // }
      this.store.dispatch(CreateVehicule({vehicule:this.vehiculeForm.value}));
      this.close.emit();
    }
  }

  ngOnDestroy(): void {
    if (this.map) {
      if (this.marker) {
        this.marker.remove();
      }
      this.map.remove();
    }
  }
}
