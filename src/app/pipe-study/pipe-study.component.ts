import { Component, OnInit } from '@angular/core';
// if you want arabic local date
import localAr from "@angular/common/locales/ar-SA"
import {registerLocaleData} from "@angular/common";
registerLocaleData(localAr)
@Component({
  selector: 'app-pipe-study',
  templateUrl: './pipe-study.component.html',
  styleUrls: ['./pipe-study.component.css']
})
export class PipeStudyComponent implements OnInit {
  names:string[] = ["ali" , "yasir" , "mohammed" , "khalid"]
  objecr:object = {de :"de" , eww : "wee" }
  currentDate: Date = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
