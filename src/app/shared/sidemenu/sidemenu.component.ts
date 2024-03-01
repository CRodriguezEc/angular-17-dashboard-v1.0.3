import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})


export class SidemenuComponent {
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  //  Obtenemos los items que forman parte menú
  public menuItems = routes.map( route => route.children ?? [] )
                            .flat()
                            .filter( route => route && route.path )
                            .filter( route => !route.path ?.includes(':') )


  constructor(){
    //  const dashboardRoutes = routes.map( route => route.children ?? [] )
    //                              .flat()
    //                              .filter( route => route && route.path )
    //                              .filter( route => !route.path ?.includes(':') )

    //  console.log( dashboardRoutes );
  }

}
