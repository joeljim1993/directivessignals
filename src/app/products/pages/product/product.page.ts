import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({

  templateUrl: './product.page.html',
  styleUrls: ['./product.page.css'],
})
export class ProductPage  {


  private fb= inject( FormBuilder );

  public color:string = "green";

   public myForm : FormGroup = this.fb.group({
    name: ["",[Validators.required,Validators.minLength(6),Validators.email]]
   })
  constructor(){}

changeColor(){
  console.log("ejecutando f");

  this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
}



}
