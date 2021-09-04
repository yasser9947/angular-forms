import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  names  =new BehaviorSubject(['s' , 'x' , 'z']);
  constructor() {


  }

  ngOnInit(): void {
  }
  addName(name:string){
    // this.names.push(name)

    // this.names =  [...this.names , name ];
  }
}
