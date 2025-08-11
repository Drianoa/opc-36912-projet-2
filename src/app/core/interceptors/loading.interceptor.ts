import { HttpInterceptorFn } from '@angular/common/http';
import { ModalService } from '../services/modal.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(ModalService)
  loadingService.toogleLoadingModal(true);
  return next(req).pipe(
    finalize(() => loadingService.toogleLoadingModal(false))
  );
};
