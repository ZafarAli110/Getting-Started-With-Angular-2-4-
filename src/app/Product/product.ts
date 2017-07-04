import {IProduct} from './Iproduct'
export class Product implements IProduct{

    constructor(public productId : number,
                public productName:string,
                public productCode:string,
                public releaseDate : string,
                public price : number,
                public starRating : number,
                public imageUrl : string){

    }

    calculateDiscount(percentage : number) : number {
       return this.price - (this.price * percentage/100);
    }
}