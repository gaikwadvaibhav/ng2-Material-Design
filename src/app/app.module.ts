import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';





import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { MasterComponent } from './master/master.component';
import { OneComponent } from './master/one.component';
import { TwoComponent } from './master/two.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { IsComponent } from './databinding/is.component';
import { AndroidComponent } from './android/android.component';
import { ThingsComponent } from './android/things.component';
import { OpComponent } from './databinding/op/op.component';
import { FormerComponent } from './databinding/former.component';
import { GrasperComponent } from './databinding/grasper.component';
import { DirectiveComponent } from './directive/directive.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GoogleloginComponent } from './googlelogin/googlelogin.component';
import { DatapikerComponent } from './datapiker/datapiker.component';
import { DashComponent } from './dash/dash.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { LoginComponent } from './login/login.component';
import { MyRoutingModule } from "app/app.router";


@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    MasterComponent,
    OneComponent,
    TwoComponent,
    DatabindingComponent,
    IsComponent,
    AndroidComponent,
    ThingsComponent,
    OpComponent,
    FormerComponent,
    GrasperComponent,
    DirectiveComponent,
    SidebarComponent,
    GoogleloginComponent,
    DatapikerComponent,
    DashComponent,
    ForgetPassComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MyRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
