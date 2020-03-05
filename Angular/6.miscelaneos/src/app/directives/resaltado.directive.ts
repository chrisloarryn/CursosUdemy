import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appResaltado]"
})
export class ResaltadoDirective {
  @Input("appResaltado") nuevoColor: string;

  constructor(private el: ElementRef) {
    console.log("Directiva llamada");
  }

  @HostListener("mouseenter") mouseEntro() {
    this.resaltar(this.nuevoColor || "yellow");
    // console.log(this.nuevoColor);
    // this.el.nativeElement.style.backgroundColor = "yellow";
  }
  @HostListener("mouseleave") mouseSalio() {
    this.resaltar(null);
    // this.el.nativeElement.style.backgroundColor = null;
  }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
