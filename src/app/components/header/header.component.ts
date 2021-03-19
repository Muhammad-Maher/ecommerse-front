import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppComponent } from '../../app.component';
import { Auth } from '../../services/auth'
import{SearchService} from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private reload:AppComponent, private myService:Auth, private myservice:SearchService) { }
  token=null
  myToken=null
  LogSub:Subscription;

  name:string;
  myform: FormGroup
  value

  ngOnInit(): void {
    console.log("Headers")
    this.token=localStorage.getItem("token");
    this.LogSub= this.myService.logedUser.subscribe(res=>{
     
      this.ngOnInit()
      
      

    })

    this.myform=new FormGroup({
      'body':new FormControl(null)
    })

  }
  checkToken(){
    if(this.token==null)
    {
      this.router.navigate(['/login']);
    }
  }
  logOut(){
    localStorage.removeItem("token");
    this.router.navigate(['/']);
    this.ngOnInit();
  }


  getProductsByName()
  {
   // console.log(name.value)
     this.myservice.getProductByname(this.myform.get('body').value)
    console.log(this.myform.get('body').value)
  }

  
  

}
