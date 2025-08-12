import { HttpInterceptorFn } from '@angular/common/http';
import { ModalService } from '../services/modal.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';


/**
 * HttpInterceptor that shows the loading modal when any HTTP request is being executed
 * and hides it when the request is finished
 */
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(ModalService)
  loadingService.toogleLoadingModal(true);
  return next(req).pipe(
    finalize(() => loadingService.toogleLoadingModal(false))
  );
};
