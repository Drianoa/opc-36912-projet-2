import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { ModalService } from '../services/modal.service';

/**
 * HTTP Interceptor that catches any HTTP errors and shows an error modal
 * It logs the error to the console and re-throws the error so that the application
 * can still react to it.
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const modalService = inject(ModalService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('HTTP Error:', error);
      modalService.displayErrorModal();
      return throwError(() => error);
    })
  );
};
