import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import {HighlightDerctive} from "./highlight.derctive";
import { PipeStudyComponent } from './pipe-study/pipe-study.component';
import { FormsComponent } from './forms/forms.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ValidationComponent } from './forms/validation/validation.component';
import { FormAgainComponent } from './form-again/form-again.component';
import { FormAgainValidetorsComponent } from './form-again-validetors/form-again-validetors.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent , HighlightDerctive, PipeStudyComponent, FormsComponent, ValidationComponent, FormAgainComponent, FormAgainValidetorsComponent, DynamicFormsComponent
  ],
  imports: [
    BrowserModule , ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
