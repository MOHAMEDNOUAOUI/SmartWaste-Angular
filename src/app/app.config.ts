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

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore(reducers),
    provideHttpClient(withInterceptors([authInterceptor])), 
    provideEffects([UserEffect , AuthEffects , TasksEffect , RoutesEffect , ComplaintsEffect]),
  ]
};
