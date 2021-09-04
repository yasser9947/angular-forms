import {Directive, ElementRef, Renderer2, HostListener, HostBinding} from "@angular/core";


@Directive({
  selector :"[apphighlight]"
})
export class HighlightDerctive{

  @HostBinding("style.background") backgroundColor:string = "#fff"
  @HostBinding("class.test") test:boolean = false;
  @HostListener("mouseover") onClick = ()=>{

    const rn = () =>Math.floor(Math.random() * 255)
    // setInterval( ()=>  this.changeThecolor(`rgb(${rn()} ,${rn()} , ${rn()})`) , 500)
  this.backgroundColor = `rgb(${rn()} ,${rn()} , ${rn()})`
    this.test = !this.test
}

  constructor(private el:ElementRef , private renderer:Renderer2) {

    // el.nativeElement.style.background = "green"
  }

  changeThecolor =(color:string) =>{

   this.renderer.setStyle(this.el.nativeElement , "color" , color)


  }

}
