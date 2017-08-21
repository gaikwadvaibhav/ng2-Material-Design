import { Component, OnInit } from '@angular/core';
import { AuthService, AppGlobals } from 'angular2-google-login';



@Component({
  selector: 'app-googlelogin',
  templateUrl: './googlelogin.component.html',
  styleUrls: ['./googlelogin.component.css'],
  // providers: [AuthService]
   
})
export class GoogleloginComponent implements OnInit {

  // constructor(private _googleAuth: AuthService) { }

  ngOnInit() {
    // AppGlobals.GOOGLE_CLIENT_ID = 'SECRET_CLIENT_ID';
  }

}
export class NgbdTabsetBasic { }
export class NgbdPaginationAdvanced {
  page = 1;
}

// this._googleAuth.authenticateUser(()=>{
//   //YOUR_CODE_HERE 
// });

// this._googleAuth.userLogout(()=>{
//   //YOUR_CODE_HERE 
// });