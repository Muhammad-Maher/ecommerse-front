export interface Product{
"Name": string,
"Price":number,
"img":string,
"resturantID":Object
}


export interface servserResponsep{
    count:number;
    products:Product[];
}
