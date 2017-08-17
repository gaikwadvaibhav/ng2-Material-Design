import { 
  Component,
  OnInit,
  EventEmitter, 
  Output       
           } from '@angular/core';

@Component({
  selector: 'app-op',
  template: `
     <div class = "container">
        <div class = "row">
          <div class = "col-md-12">
          <input type = "Button" value = "Check Date" (click)= "ommit()" />

          </div>
        </div>
     </div>     
  `,
  styles: []
})
export class OpComponent implements OnInit {

@Output()  ommiter : EventEmitter<string>;

  constructor() {
    this.ommiter= new EventEmitter<string>();
   }

  ngOnInit() {
  }

  ommit(){
      this.ommiter.emit(new Date().toString());
  }

}
