import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Product } from '../../Models/product.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private router:Router,private productService:ProductService) { }

  ngOnInit() {
  }
  prp;
  avatar;

  save(product){
    const formData = new FormData();

    formData.append('avatar',this.avatar);
    formData.append("Name",product.name);
    formData.append('status',product.status);
    formData.append('Price',product.price);
    formData.append('resturantID',product.resturantID);

    console.log(formData)
    console.log(product.name)
    console.log(product.status)
    console.log(product.price)
    console.log(product.resturantID)
    console.log(this.avatar)

      if(this.avatar == undefined)
      {
        alert("please input image")
      }
      else
      {

        this.productService.postProduct(formData).subscribe(data => {
          this.prp = data;
          alert("product added successfully")
        })
      }


  
    
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
