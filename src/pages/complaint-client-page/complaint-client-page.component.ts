import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Bins } from '../../app/core/Models/Bins.modules';
import { CreateComplaint } from '../../app/core/store/Complaints/ComplaintActions';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matClose, matUpload, matLocationOn } from '@ng-icons/material-icons/baseline';
import * as L from 'leaflet';
import { AllBins } from '../../app/core/store/Bins/BinsSelector';
import { LoadAllBins } from '../../app/core/store/Bins/BinsActions';
import { ComplaintsCreateDTO } from '../../app/core/Models/Complaints.modules';
import { Client, Utilisateur } from '../../app/core/Models/Utilisateur.modules';
import { User } from '../../app/core/store/Utilisateur/UserSelector';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-complaint-client-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIcon , RouterLink],
  templateUrl: './complaint-client-page.component.html',
  styleUrl: './complaint-client-page.component.css',
  viewProviders: [provideIcons({ matClose, matUpload, matLocationOn })]
})
export class ComplaintClientPageComponent implements OnInit {
  complaintForm!: FormGroup;
  bins$!: Observable<Bins[] | null>;
  selectedFiles: File[] = [];
  previewUrls: string[] = [];
  private map!: L.Map;
  private markers: L.Marker[] = [];
  private mapInitialized = false;
  showComplaintForm = false;
  selectedBin: Bins | null = null;
  isClosing = false;
  client!:Utilisateur | null;

  constructor(private fb: FormBuilder, private store: Store) {
    this.initForm();
  }

  ngOnInit(): void {
    // Initialize the bins$ Observable
    this.bins$ = this.store.select(AllBins).pipe(
      tap(bins => {
        if (bins && this.mapInitialized) {
          this.displayAllBinsOnMap(bins);
        }
      })
    );

    this.store.select(User).subscribe(user => this.client = user);
    // Dispatch the action to load bins
    this.store.dispatch(LoadAllBins());

    // Initialize the map after a short delay to ensure the DOM is ready
    setTimeout(() => {
      this.initializeMap();
    }, 100);
  }

  private initForm() {
    this.complaintForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(10)]],
      priority: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
      comment: ['', [Validators.required]],
      bin: [null, [Validators.required]],
      client_id:[this.client?.id]
    });
  }

  private initializeMap(): void {
    if (this.mapInitialized || !document.getElementById('map')) {
      return;
    }

    try {
      this.map = L.map('map', {
        preferCanvas: true,
        zoomControl: false
      }).setView([33.5731, -7.5898], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      // Add zoom control to top right
      L.control.zoom({
        position: 'topright'
      }).addTo(this.map);

      this.mapInitialized = true;

      // If we already have bins data, display them
      this.bins$.subscribe(bins => {
        if (bins) {
          this.displayAllBinsOnMap(bins);
        }
      });
    } catch (error) {
      // Silently handle error
    }
  }

  private displayAllBinsOnMap(bins: Bins[]) {
    // Clear existing markers
    this.markers.forEach(marker => marker.remove());
    this.markers = [];

    // Add markers for all bins
    bins.forEach(bin => {
      const marker = L.marker([bin.location_latitude, bin.location_longitude])
        .bindPopup(`
          <div class="p-2">
            <h3 class="font-bold">Bin #${bin.id}</h3>
            <p>Location: ${bin.location}</p>
            <p>Capacity: ${bin.capacity}</p>
            <button class="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" 
                    onclick="document.dispatchEvent(new CustomEvent('selectBin', {detail: ${bin.id}}))">
              Select Bin
            </button>
          </div>
        `)
        .addTo(this.map);
      
      this.markers.push(marker);
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const newFiles = Array.from(input.files);
      this.selectedFiles = [...this.selectedFiles, ...newFiles];
      this.previewUrls = [...this.previewUrls, ...newFiles.map(file => URL.createObjectURL(file))];
    }
  }

  removeFile(index: number) {
    URL.revokeObjectURL(this.previewUrls[index]);
    this.selectedFiles.splice(index, 1);
    this.previewUrls.splice(index, 1);
  }

  showBinOnMap(bin: Bins) {
    this.selectedBin = bin;
    this.complaintForm.patchValue({ bin: bin });
    this.showComplaintForm = true;
    this.isClosing = false;
    
    // Center map on selected bin
    this.map.setView([bin.location_latitude, bin.location_longitude], 15);
    
    // Highlight selected bin marker
    this.markers.forEach(marker => {
      if (marker.getLatLng().lat === bin.location_latitude && 
          marker.getLatLng().lng === bin.location_longitude) {
        marker.openPopup();
      }
    });
  }

  closeComplaintForm() {
    this.isClosing = true;
    setTimeout(() => {
      this.showComplaintForm = false;
      this.resetForm();
    }, 300); // Match the duration of the transition
  }

  onSubmit() {
    if (this.complaintForm.valid && this.selectedBin) {
      const complaintDTO: ComplaintsCreateDTO = {
        description: this.complaintForm.get('description')?.value,
        priority: this.complaintForm.get('priority')?.value,
        comment: this.complaintForm.get('comment')?.value,
        bin: this.selectedBin.id,
        client_id: this.client!.id,
        files: this.selectedFiles
      };
      
      this.store.dispatch(CreateComplaint({ complaint: complaintDTO }));
      this.closeComplaintForm();
    }
  }

  private resetForm() {
    this.complaintForm.reset();
    this.selectedFiles = [];
    this.previewUrls = [];
    this.selectedBin = null;
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.markers.forEach(marker => marker.remove());
      this.map.remove();
    }
    this.previewUrls.forEach(url => URL.revokeObjectURL(url));
  }
}
