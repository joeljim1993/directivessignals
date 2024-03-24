import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[CustomLabel]',

})
export class CustomLabelDirective implements OnInit {

  private htmlElement?:ElementRef<HTMLElement>;

  private _color:string = "red";

  private _errors?:ValidationErrors | null;

  @Input() set color (value:string){
    this._color = value ;

    this.setStyles();
  }

  @Input() set errors(value : ValidationErrors | null | undefined){
    this._errors = value;
    this.setErrorMessage();

  }

  constructor( private el:ElementRef<HTMLElement>){
    console.log("el",el);
    this.htmlElement = el;

    // this.htmlElement.nativeElement.innerHTML = "hola joelito "
  }
  ngOnInit(): void {
    console.log("directiva NG on init ");

  }

  setStyles():void{


    if( !this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;

  }

  setErrorMessage():void{
    console.log("this.error ", this._errors);
    if( !this.htmlElement) return;
    if( !this._errors ) {

       this.htmlElement!.nativeElement.innerText ="";
       return;
    }

    const errors = Object.keys( this._errors );

    if( errors.includes('required')){
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido ';
    }

    if( errors.includes('minlength')){
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];
      this.htmlElement.nativeElement.innerText = `Minimo ${current}/${ min } caracteres `;
      return;
    }

    if( errors.includes("email")){
      this.htmlElement.nativeElement.innerText =" No tiene formato de correo. "
      return;
    }
  }

 }
