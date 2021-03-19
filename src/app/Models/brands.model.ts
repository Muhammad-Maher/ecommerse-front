export interface brandsModels {
    Name:string;
    img:String;
    Description:string;
    contactNo:string;
    mail:string;
    Password:string;

}

export interface servserResponse{
    count:number;
    brands:brandsModels[];
}