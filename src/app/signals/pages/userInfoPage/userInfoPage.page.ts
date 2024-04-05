import { ChangeDetectionStrategy, Component, inject, signal, type OnInit, computed } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user-request.interface';

@Component({

  templateUrl: './userInfoPage.page.html',
  styleUrls: ['./userInfoPage.page.css'],

})
export class UserInfoPagePage implements OnInit {


  private userService = inject(UserService)
  public userId = signal(1);

  public currentUser = signal<User|undefined>(undefined);

  public userWasFound = signal(true);

  public fullName = computed<string>( ()=>{
    if( !this.currentUser() )return "Usuario no encontrado"

    return `${ this.currentUser()?.first_name }  ${this.currentUser()?.last_name}`
  }  )

  ngOnInit(): void {
    this.loadUser(this.userId())
  }

  loadUser( id:number){
    if( id<=0 )return;
    this.userId.set(id);
    this.currentUser.set(undefined);

    this.userService.getUserById( id)
    .subscribe( {
     next: (user )=>{
      this.currentUser.set(user );
      this.userWasFound.set(true);
     },
     error:()=> this.userWasFound.set(false),
    } )
  }

}
