import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const t=sessionStorage.getItem("token");
  if (!t) {
    return next.handle(req);
  }
  const req1 = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${t}`),
  });

  return next.handle(req1);
}
}
