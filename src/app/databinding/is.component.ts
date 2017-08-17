import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-is',
  template: `

<div class = "container">
  <div class = "row">
    <div class = "col-md-12">
    Address is - {{Address}}
    </div>
  </div>
</div>
  `,

  styleUrls: ['./is.component.css']
})

export class IsComponent implements OnInit {

@Input("Add")
Address:string;
 

  constructor() {
    }

  ngOnInit() {
  }

}
