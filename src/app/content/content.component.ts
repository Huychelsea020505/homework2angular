import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  products=[
    {id : 1,  name:'Products 1'},
    {id : 2,  name:'Products 2'},
    {id : 3,  name:'Products 3'},
    {id : 4,  name:'Products 4'},
    {id : 5,  name:'Products 5'},
  ];
  handleClearAll(){
    this.products=[];
  }
}
