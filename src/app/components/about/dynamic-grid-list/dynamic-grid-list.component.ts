import { Component, OnInit } from '@angular/core';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dynamic-grid-list',
  templateUrl: './dynamic-grid-list.component.html',
  styleUrls: ['./dynamic-grid-list.component.css']
})





export class DynamicGridListComponent  {

  aboutTextOne:string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  
  
  
  tiles: Tile[] = [
    {text: this.aboutTextOne , cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 3, rows: 2, color: 'lightpink'}
    
  ];

}
