import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
      CommonModule,
      MaterialModule,
      FormsModule,
      FlexLayoutModule,
      HttpClientModule,
  ],
    exports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        FlexLayoutModule,
        HttpClientModule,
    ],
  declarations: []
})
export class ImportsModule { }
