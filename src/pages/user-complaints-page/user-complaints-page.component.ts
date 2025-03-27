import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../app/core/store/Utilisateur/UserSelector';
import { Utilisateur } from '../../app/core/Models/Utilisateur.modules';
import { Complaints } from '../../app/core/Models/Complaints.modules';
import { LoadUserComplaints } from '../../app/core/store/Complaints/ComplaintActions';
import { selectAllComplaints } from '../../app/core/store/Complaints/ComplaintSelector';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matCalendarToday, matLocationOn, matPriorityHigh } from '@ng-icons/material-icons/baseline';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-complaints-page',
  standalone: true,
  imports: [CommonModule, NgIcon , RouterLink],
  templateUrl: './user-complaints-page.component.html',
  styleUrl: './user-complaints-page.component.css',
  viewProviders: [provideIcons({ matCalendarToday, matLocationOn, matPriorityHigh })]
})
export class UserComplaintsPageComponent implements OnInit {
  complaints$!: Observable<Complaints[] | null>;
  user!: Utilisateur | null;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(LoadUserComplaints());
    this.complaints$ = this.store.select(selectAllComplaints);
  }

  getPriorityColor(priority: number): string {
    switch (priority) {
      case 1:
      case 2:
        return 'bg-green-100 text-green-800';
      case 3:
        return 'bg-yellow-100 text-yellow-800';
      case 4:
      case 5:
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in progress':
        return 'bg-blue-100 text-blue-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
} 