import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginResponse } from '../store/Auth/AuthReducer';
import { Store } from '@ngrx/store';

export const redirectGuardGuard: CanActivateFn = (route, state) => {
  return true;
};

export const authenticatedGuard: CanActivateFn = (route, state) => {
  return true;
};
