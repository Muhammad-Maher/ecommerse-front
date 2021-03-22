import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Product } from '../../Models/product.model'
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation-service.service'

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private router:Router,private productService:ProductService,private product:ProductService, private navigate:NavigationService) { }
  subscriber
  item
  id = 0;
  img
  deleteSubscriber
  allproducts
  subscriberAll
  ngOnInit() {

    this.subscriberAll = this.productService.getAllProducts().subscribe((res)=>{
      this.allproducts = res;
      console.log(res);
    },
    err=>{
      console.log(err);

    })
   
    

  }

  onChange(val){
    this.id = val;
    console.log(val)
  }


  geTheProduct(){
    if(this.id != 0){
      console.log("maher");
    this.subscriber = this.product.getProductById(this.id)
    .subscribe((res)=>{
    this.item =res
    
    console.log(res);
   
  },
  (error)=>{
    console.log(error)
  })
}
  }
  prp;
  avatar;

  delete(){
    
    this.deleteSubscriber = this.product.deleteProduct(this.id).subscribe((res)=>{
      if(res == "product removed successfully"){
        alert("product removed")
        this.return()
      }
    },
    (error)=>{
      console.log(error)
    })

    }

    return()
    {
      this.navigate.back()
    }

  
    
  

  // //Image Previewing Section
  // imagePreview ;
  // onImagePicked(val){
  //   this.avatar = val.target.files[0]
    
  //   const file = (val.target as HTMLInputElement).files[0];
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.imagePreview = reader.result;
  //   };
  //   reader.readAsDataURL(file);
   
  // }
  ngOnDestroy(){
    // this.subscriber.unsubscribe();
    // this.subscriberAll.unsubscribe();
    }


}
