import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ng-ssr-implementation';
  productDetails: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    return this.http
      .get("https://fakestoreapi.herokuapp.com/products/1")
      .subscribe((res: any) => {
        console.log("res: ", res);
        this.productDetails = res;
      });
  }
}
