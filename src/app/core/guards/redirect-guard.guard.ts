import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../store/Auth/AuthService';
import { LoginResponse } from '../store/Auth/AuthReducer';

export const roleGuard: CanActivateFn = (route, state) => {
 const authService = inject(AuthService);
  const router = inject(Router);

  // Check if token exists
  const userToken: LoginResponse | null = authService.loadToken();

  if (!userToken || !userToken.token) {
    router.navigate(['/auth/login']);
    return false;
  }

  const decodedToken = parseJwt(userToken.token);
  const userRole = decodedToken?.role;

  if (userRole === 'ROLE_USER') {
    router.navigate(['/']);
    return false;
  }

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

