import { ChangeDetectionStrategy, Component, signal, type OnInit, computed, effect, OnDestroy } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './propertiesPages.page.html',
  styleUrls: ['./propertiesPages.page.css'],
})
export class PropertiesPagesPage implements OnInit,OnDestroy {

  public user = signal<User>({
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  });

  counter = signal( 10 );

  public fullName = computed( ()=> `${this.user().first_name}  ${this.user().last_name}`);

  public userChangedEffect = effect( ()=>{
    console.log(" userChangedeffect triggerd");
    console.log(` ${this.user().first_name} ${this.counter() }`);


  });


  ngOnInit(): void {
    setInterval(()=>{
      this.counter.update( current => current + 1);
    },1000)
   }

  increaseBy(value:number ){

    this.counter.update( current => current + value)
  }

  ngOnDestroy(): void {
  //  this.userChangedEffect.destroy();
  }

  onFieldUpdate( field: keyof User,value:string){

      // this.user.set({
      //   ...this.user(),
      //   [field]: value,
      // })

      // this.user.update( current => ({
      //   ...current,
      //   [field]:value
      // }))

      this.user.update( current => {

        switch( field){

          case 'email':
            current.email = value;
            break;

         case 'first_name':
            current.first_name = value
            break;

        case 'last_name':
          current.last_name = value
          break;

        case 'id':
        current.id = Number(value)


        }


        return current;
      })


  }

}
