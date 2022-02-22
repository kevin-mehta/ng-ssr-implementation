import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { makeStateKey, TransferState } from '@angular/platform-browser';

@Injectable()
export class BrowserInterceptor implements HttpInterceptor {

  constructor(private transferState: TransferState) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(req.method === 'GET') {

      const key = makeStateKey(req.url);

      const resp: string = this.transferState.get(key, "");

      if(resp) {
        const httpResponse = new HttpResponse({
          body: resp,
          status: 200
        });
        return of(httpResponse);
      }
    }
    return next.handle(req);
  }
}
