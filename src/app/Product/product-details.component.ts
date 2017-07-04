import { Component, OnInit, OnDestroy } from "@angular/core";
import { IProduct } from "app/Product/Iproduct";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "app/Product/product.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    templateUrl: "./product-details.component.html"
})

export class ProductDetailsComponent implements OnInit {


    pageTitle = "Product Detail";
    product: IProduct;
    errorMessage: string;
    imageWidth = 300;
    // private sub: Subscription;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService) {
    }


    ngOnInit(): void {
        // this.sub = this._route.params.subscribe(
        //     params => {
        //         let id = +params['id'];
        //         this.getSingleProduct(id);
        //     });


        let id = +this._route.snapshot.params['id'];
        this.pageTitle += ` : ${id}`;

        this._productService.getProducts().subscribe(
            products => this.product =  products.find(p=> p.productId == id),
            error => this.errorMessage = <any>error
        );

    }

    // getSingleProduct(id: number) {
    //     this._productService.getProduct(id).subscribe(
    //         product => this.product = product,
    //         error => this.errorMessage = <any>error);
    // }



    onBack(): void {
        this._router.navigate(["/products"]);
    }

    // ngOnDestroy(): void {
    //     this.sub.unsubscribe();
    // }
}