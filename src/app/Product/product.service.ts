import { Injectable } from "@angular/core";
import { IProduct } from "app/Product/Iproduct";
import { Http , Response } from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch"; 

@Injectable()
export class ProductService {
    
    private _productUrl = "api/products/products.json";
   
       
    constructor(private _http : Http){

    }
    
    getProducts(): Observable<IProduct[]>{
        
        return this._http.get(this._productUrl)
                         .map((httpResponse : Response) => <IProduct[]> httpResponse.json()) //casting response result to Iproduct[] 
                         .do(data => console.log("All : " + JSON.stringify(data)))
                         .catch(this.handleError);
    }

    getProduct(id : number) : Observable<IProduct>{
       return this.getProducts().map(
            (products : IProduct[])=> products.find(p=> p.productId == id) 
        );
    }

   private handleError(error : Response){
      console.log(error);
      return Observable.throw(error.json().error || "Server Error");
    }
    
    
    
    // getProducts(): IProduct[] {
    //     return [
    //         {
    //             'productId': 1,
    //             'productName': 'Garden Cart',
    //             'productCode': 'GDN-0023',
    //             'releaseDate': 'March 18 2017',
    //             'price': 23.99,
    //             'starRating': 4.23,
    //             'imageUrl': 'assets/images/garden-cart.png'
    //         },
    //         {
    //             'productId': 2,
    //             'productName': 'Hammer',
    //             'productCode': 'TXD-0023',
    //             'releaseDate': 'April 18 2017',
    //             'price': 33.99,
    //             'starRating': 4.82,
    //             'imageUrl': 'assets/images/hammer.png'
    //         },
    //         {
    //             "productId": 3,
    //             "productName": "Saw",
    //             "productCode": "TBX-0022",
    //             "releaseDate": "May 15, 2016",
    //             "price": 11.55,
    //             "starRating": 3.7,
    //             "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    //         }
    //     ];
    // }
}