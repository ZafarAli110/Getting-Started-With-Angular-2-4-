import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot , Router } from "@angular/router";

@Injectable()
export class ProductDetailGuard implements CanActivate{
    
    constructor(private _router : Router){

    }
    
    canActivate(route: ActivatedRouteSnapshot): boolean {
        
        let id = +route.url[1].path; //["/products",product.productId] i.e [0,1]
        
        if (isNaN(id) || id < 1) {
            
            alert("Invalid Product Id");
            this._router.navigate(["/products"]);
            
            return false; //abort current navigation
        };
        
        return true;
}

}