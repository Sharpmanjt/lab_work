import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './StudentsComponents';
import { StudentComponent } from './student/student.component';
import { RemoveSpacesPipe } from './remove-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    RemoveSpacesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
