import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ServerInterceptor } from './server.interceptor';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerInterceptor,
      multi: true
    }
  ]
})
export class AppServerModule {}
