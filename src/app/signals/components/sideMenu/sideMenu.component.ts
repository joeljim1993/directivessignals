import { ChangeDetectionStrategy, Component, signal } from '@angular/core';


interface MenuItem{
  title: string,
  route:string,
}

@Component({
  selector: 'side-menu',
  templateUrl: './sideMenu.component.html',
  styleUrls: ['./sideMenu.component.css'],
})
export class SideMenuComponent {


  public menuItems = signal<MenuItem[]>([
    {title: 'Contador', route: 'counter'},
    {title: 'Usuario ', route: 'user-info'},
    {title: 'Mutaciones', route: 'properties'},
  ]);

  // public menuItems:MenuItem[]=[
  //   {title: 'Contador', route: 'counter'},
  //   {title: 'Usuario ', route: 'user-info'},
  //   {title: 'Mutaciones', route: 'properties'},

  // ]


}
