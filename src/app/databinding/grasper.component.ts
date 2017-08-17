import { Component, OnInit, Input } from '@angular/core';
import { Control } from "app/databinding/databinding.component";

@Component({
  selector: 'app-grasper',
  template: `
    <div class= "container">
      <div class = "row">
        <div class="col-md-12">
          <input [type]="ipCtl.control" [value]="ipCtl.val" />
        </div> 
      </div>
    </div>
  `,
  styles: []
})
export class GrasperComponent implements OnInit {

@Input() 
 ipCtl : Control; 
  constructor() { }

  ngOnInit() {
  }

}
