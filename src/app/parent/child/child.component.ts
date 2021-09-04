import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'] ,
changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit{
  @Input() names  = new BehaviorSubject(["s"]);
  list:string[] = []
  constructor(private cdRef:ChangeDetectorRef ) {
this.cdRef.detach()
    setTimeout(()=> this.cdRef.reattach(), 2000)

  }



  refresh(){
    this.cdRef.detectChanges()
  }

  ngOnInit(): void {
    this.names.subscribe((name)=>{
      this.list = [...this.list , ...name]
      this.cdRef.markForCheck();

    })
  }

}
