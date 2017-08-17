import { Component, OnInit, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit, OnChanges  {

textColor : string;
fullColor : string;


  mobiles = [
    'Android',
    'Ios',
    'Windows',
    'Ubuntu',
    'RiM'
  ];


  constructor() { }

  ngOnInit() {
      this.fullColor = '1px solid '+this.textColor;

  }
ngOnChanges(){
  this.fullColor = '1px solid '+this.textColor;
  console.log(`Full Color ${this.fullColor}`);
}

}
