export interface Cart{
    "productID": Object,
    "userID":Object,
    "createdAt":Date,    
    }


    export interface cartModelsServer{
        userID:object;
        // productID:object;
        productID:[{
            
        }];
        createdAt:Date;
        
        }
        
        export interface cartModelsPublic{
            userID:object;
            productID:object;
            total:number;
        }