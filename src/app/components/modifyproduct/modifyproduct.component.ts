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
  ngOnInit() {

   
    

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
    const formData = new FormData();

    formData.append('avatar',this.avatar);
    formData.append("Name",this.item.Name);
    formData.append('status',this.item.status);
    formData.append('Price',this.item.price);
    formData.append('resturantID',this.item.resturantID);

    console.log(formData)
    console.log(this.item.name)
    console.log(this.item.status)
    console.log(this.item.price)
    console.log(this.item.resturantID)
    this.productService.updateProduct(this.id).subscribe(data => {
      this.prp = data;
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

}
