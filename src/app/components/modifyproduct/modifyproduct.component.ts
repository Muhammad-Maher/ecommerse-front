import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Product } from '../../Models/product.model'
import { Router } from '@angular/router';


@Component({
  selector: 'app-modifyproduct',
  templateUrl: './modifyproduct.component.html',
  styleUrls: ['./modifyproduct.component.css']
})
export class ModifyproductComponent implements OnInit {

  constructor(private router:Router,private productService:ProductService,private product:ProductService) { }
  subscriber
  item
  id = 0;
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
      // console.log("here");
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

  save(product){
    

    const data={'avatar':this.avatar, "Name": this.item.Name , 'status':this.item.status, 'Price':this.item.Price , 'resturantID':this.item.resturantID._id}

    
    

    this.productService.updateProduct(this.id,data).subscribe(data => {     
      alert("updated successfully")
    })

    

  
    
  }

  //Image Previewing Section
  imagePreview ;
  onImagePicked(val){
    this.avatar = val.target.files[0]
    
    const file = (val.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
   
  }

  ngOnDestroy(){
  // this.subscriber.unsubscribe();
  // this.subscriberAll.unsubscribe();
  }

}
