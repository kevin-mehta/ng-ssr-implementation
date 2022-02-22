import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { makeStateKey, TransferState } from '@angular/platform-browser';

@Injectable()
export class ServerInterceptor implements HttpInterceptor {

  constructor(private transferState: TransferState) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        event => {
          if(event instanceof HttpResponse && (event.status === 200 || event.status === 202)) {
            this.transferState.set(makeStateKey(req.url), event.body);
          }
        }
      )
    );
  }
}
