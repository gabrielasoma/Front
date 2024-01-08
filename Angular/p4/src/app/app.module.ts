import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivaNgIfComponent } from './directiva-ng-if/directiva-ng-if.component';
import { FormsModule } from '@angular/forms';
import { DirectivaNgSwitchComponent } from './directiva-ng-switch/directiva-ng-switch.component';
import { DirectivaNgForComponent } from './directiva-ng-for/directiva-ng-for.component';
import { DirectivaNgClassPipe } from './directiva-ng-class.pipe';
import { DirectivaNgClassComponent } from './directiva-ng-class/directiva-ng-class.component';
import { DirectivaNgStyleComponent } from './directiva-ng-style/directiva-ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaNgIfComponent,
    DirectivaNgSwitchComponent,
    DirectivaNgForComponent,
    DirectivaNgClassPipe,
    DirectivaNgClassComponent,
    DirectivaNgStyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
