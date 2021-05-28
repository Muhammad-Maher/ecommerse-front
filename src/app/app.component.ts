import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  param = {value: 'world'};
  constructor(private translate: TranslateService){
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('en');
 
      
  }

}
