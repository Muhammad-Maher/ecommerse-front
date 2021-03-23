import { Component, OnInit } from '@angular/core';
declare var $: any;
import{CartService}from'../../services/cart.service'
import { NavigationService } from '../../services/navigation-service.service'
import { Order } from '../../services/orederService'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {

  constructor(private cart:CartService, private navigate:NavigationService,private Order:Order) { }
  items
  subscriber
  cartItems
  cartItemsSubscribtion
  RemoveCartsubscriber
  return()
  {
    this.navigate.back()
  }

  total : number = 0;


  removeProduct(_id,index) {
    this.RemoveCartsubscriber=this.cart.RemoveFromCart(_id,index).subscribe((res)=>{

      console.log(res);
      if(res == "product removed successfully")
      {
        alert("product removed");
      }
      
      this.total -= this.items.productID[index].Price; 
      this.items.productID.splice(index, 1);

      
      
      this.cart.setCartItems(this.items.productID.length);

    },(err)=>{

      console.log(err)
    })

  }

  btnClick(event){
    const order ={
      productID:this.items.productID,
      total:this.total,
      status:"pending"}

    this.Order.createOrder(order).subscribe((res)=>{

      alert("order created successfully, its status is pending");
      this.items.productID = [];
      this.total = 0;
      this.cart.setCartItems(0);
    },
    err=>{

    })

    const cartBody ={productID : []}

    this.cart.updateCart(cartBody).subscribe((res)=>{


    })

  }

  ngOnInit(): void {

    this.subscriber = this.cart.getCart().subscribe((res)=>{
      if(res != null){
      this.items = res; 
      const count : any =   this.items.productID;
      

      this.items.productID.forEach(element => {
        this.total += element.Price;       
      });      
    }
    },
    (error)=>{
      console.log(error)
    })


    $('.visibility-cart').on('click',function(){
       
      var $btn =  $(this);
      var $cart = $('.cart');
      
      
      if ($btn.hasClass('is-open')) {
         $btn.removeClass('is-open');
         $btn.text('O')
         $cart.removeClass('is-open');     
         $cart.addClass('is-closed');
         $btn.addClass('is-closed');
      } else {
         $btn.addClass('is-open');
         $btn.text('X')
         $cart.addClass('is-open');     
         $cart.removeClass('is-closed');
         $btn.removeClass('is-closed');
      }
    
                      
    });
    
      // SHOPPING CART PLUS OR MINUS
      $('a.qty-minus').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
        
        if (value > 1) {
          value = value - 1;
        } else {
          value = 0;
        }
        
        $input.val(value);
            
      });
    
      $('a.qty-plus').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
    
        if (value < 100) {
        value = value + 1;
        } else {
          value =100;
        }
    
        $input.val(value);
      });
    
    // RESTRICT INPUTS TO NUMBERS ONLY WITH A MIN OF 0 AND A MAX 100
    $('input').on('blur', function(){
    
      var input = $(this);
      var value = parseInt($(this).val());
    
        if (value < 0 || isNaN(value)) {
          input.val(0);
        } else if
          (value > 100) {
          input.val(100);
        }
    });
    
  }

  ngOnDestroy() {
    // this.cartItemsSubscribtion.unsubscribe();
}
}
