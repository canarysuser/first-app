export default class Product {
    constructor(pId, pName, unitPrice, unitsInStock, discontinued) {
        this.productId=pId;
        this.productName=pName; 
        this.unitPrice=unitPrice;
        this.unitsInStock=unitsInStock; 
        this.discontinued=discontinued; 
    }

    // TS constructor( 
    //     public productId : number,
    //     public productName : string
    // ) { }
}