import { Component } from '@angular/core';

const log = (...messages: string[]) => {
  console.log(`${ messages[0] } %c${ messages.slice(1).join(', ') }`, 'color: #bada55');
}

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor() {
    log('constructor llamado');
  }

  ngOnInit() {
    log('ngOnInit: Se ejecuta una vez después de que angular haya inicializado todas las entradas del componente');
  }

  ngOnChanges() {
    log('ngOnChanges: Se ejecuta cada vez que las entradas del componente han cambiado');
  }

  ngDoCheck() {
    log('ngDoCheck: Se ejecuta cada vez que se comprueba si este componente tiene cambios');
  }

  ngAfterContentInit() {
    log('ngAfterContentInit: Se ejecuta una vez después de que se haya inicializado el contenido del componente');
  }

  ngAfterContentChecked() {
    log('ngAfterContentChecked: Se ejecuta cada vez que se ha comprobado si hay cambios en el contenido de este componente');
  }

  ngAfterViewInit() {
    log('ngAfterViewInit: Se ejecuta una vez después de que se haya inicializado la vista del componente');
  }

  ngAfterViewChecked() {
    log('ngAfterViewChecked: Se ejecuta cada vez que se ha comprobado si hay cambios en la vista del componente');
  }

}
