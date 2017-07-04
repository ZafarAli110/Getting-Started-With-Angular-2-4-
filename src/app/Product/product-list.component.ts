import { Component, OnInit } from '@angular/core'
import { IProduct } from './Iproduct'
import {ProductService} from './product.service' 

@Component({
    selector: 'app-product',
    // moduleId : module.id,
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

    constructor(private _productService : ProductService){  //injecting dependency 
        
    }
    
     ngOnInit(): void {  //this method will run every time when our component initialize
        //console.log("In OnInit");k
        this._productService.getProducts()
                            .subscribe(
                                products => this.products = products,  //valueFn(data) coming from observer stream
                                error => this.errorMessage = <any>error //errorFn(err)
                            );
    }

    pageTitle: string = 'Product List';
    filterListBy: string;
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    buttonTitle: string = 'Show image';
    products: IProduct[];
    errorMessage: string;
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

   
    onRatingClicked(message: string): void {
        this.pageTitle = "Prodcut List " + message;
    }

}