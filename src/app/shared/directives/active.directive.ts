import { Directive,ElementRef,HostListener,Renderer2 } from "@angular/core";

@Directive({
  selector:'[activeelement]'
})
export class activeElement{
  constructor(private elem:ElementRef,private renderer:Renderer2){
    //this.renderer.setStyle(this.elem.nativeElement,"margin","1px");
  }

  @HostListener("mouseenter")onMouseEnter(){
   // this.setMargin("2px solid rgba(1,1,1,0.5)");
    //this.setZindex("1");
    this.setShadow('5px 10px 5px  rgba(50,50,50,0.5)');
    this.setBorder("15px");
    this.setBackground("grey")
  }

  @HostListener("mouseleave")onMouseLeave(){
    //this.setMargin("none");
   // this.setZindex("0");
    this.setShadow("none");
    this.setBorder("1px");
  }

  @HostListener("click")onClick(){
    this.showBlock(true);
  }

  private setMargin(val:string){
    this.renderer.setStyle(this.elem.nativeElement,"border",val);
  }

  private setZindex(cal:string){
    this.renderer.setStyle(this.elem.nativeElement,"zindex",cal)
  }

  private setShadow(shadow:string){
    this.renderer.setStyle(this.elem.nativeElement,"box-shadow",shadow);
  }

  private setBorder(border:string){
    this.renderer.setStyle(this.elem.nativeElement,"border-radius",border);
  }

  private setPadding(width:string){
    this.renderer.setStyle(this.elem.nativeElement,"padding",width)
  }

  private showBlock(display:boolean){
    this.renderer.setStyle(this.elem.nativeElement,"display",display)
  }

private setBackground(color:string){
  this.renderer.setStyle(this.elem.nativeElement,"background-color",color)
}



}
