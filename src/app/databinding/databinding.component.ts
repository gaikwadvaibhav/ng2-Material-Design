import { Component  } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent  {

componentName : string;
iptype : string;
border : string;
dynawd: string = "200px";
outdata : string;
control : Control; 

  constructor() {
    this.componentName = "Android"
   this.iptype = "Button"
   this.border = '1px solid red' 
  }

   addition(){
     return 2+2;
   }
 changeBorder(){
   this.border  = '1px solid green' 
  }

mydata(dt: string){
  this.outdata =dt;
}
 
}

export class Control{
control : string;
val : string;
}