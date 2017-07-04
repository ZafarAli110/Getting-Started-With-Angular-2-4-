import { RouterModule } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";

import { NgModule } from "@angular/core";
import { ProductListComponent } from "app/Product/product-list.component";
import { ProductFilterPipe } from "app/Product/product-filter.pipe";
import { ProductDetailsComponent } from "app/Product/product-details.component";
import { ProductDetailGuard } from "app/Product/product-guard.service";
import { ProductService } from "app/Product/product.service";



@NgModule({
    declarations: [
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailsComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: "products", component: ProductListComponent },
            { path: "product/:id", canActivate: [ProductDetailGuard], component: ProductDetailsComponent },
        ]),

    ],
    providers: [
        ProductDetailGuard,
        ProductService
    ]
})
export class ProductModule {

}