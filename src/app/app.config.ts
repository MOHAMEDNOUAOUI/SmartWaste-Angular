import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { UserEffect } from './core/store/Utilisateur/UserEffects';
import { AuthEffects } from './core/store/Auth/AuthEffects';
import { reducers } from './core/store/reducers';
import { TasksEffect } from './core/store/Task/TaskEffects';
import { AuthInterceptor } from './core/Interceptor';
import { authInterceptor } from './core/Interceptor/auth.interceptor';
import { RoutesEffect } from './core/store/Roots/RoutesEffects';
import { ComplaintsEffect } from './core/store/Complaints/ComplaintEffect';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async"
import {providePrimeNG} from 'primeng/config'
import Aura from '@primeng/themes/aura'
import { VehiculesEffect } from './core/store/Vehicule/VehiculeEffect';
import { BinsEffect } from './core/store/Bins/BinsEffect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync(),
    providePrimeNG({
      theme:{
        preset:Aura,
        options:{
          dark:false
        }
      }
    }),
    provideStore(reducers),
    provideHttpClient(withInterceptors([authInterceptor])), 
    provideEffects([UserEffect , AuthEffects , BinsEffect , TasksEffect , RoutesEffect , ComplaintsEffect , VehiculesEffect]),
  ]
};
