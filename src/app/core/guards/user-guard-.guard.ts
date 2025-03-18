import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../store/Auth/AuthService';
import { LoginResponse } from '../store/Auth/AuthReducer';

export const userGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check if token exists
  const userToken: LoginResponse | null = authService.loadToken();

  if (!userToken || !userToken.token) {
    router.navigate(['/auth/login']);
    return false;
  }

  // Decode the JWT token to get the user's role
  const decodedToken = parseJwt(userToken.token);
  const userRole = decodedToken?.role;

  // If the user is Admin or Worker, redirect to Dashboard
  if (userRole === 'ROLE_ADMIN' || userRole === 'ROLE_WORKER') {
    router.navigate(['/Dashboard']);
    return false;
  }

  // Allow access to user-related pages
  return true;
};

function parseJwt(token: string): any {
  try {
    const base64Url = token.split('.')[1];
    const decoded = atob(base64Url);
    return JSON.parse(decoded);
  } catch (e) {
    console.error('Failed to parse token:', e);
    return null;
  }
}
