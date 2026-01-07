import { afterNextRender, afterRender, Component, effect, signal } from '@angular/core';

const log = (...messages: string[]) => {
  console.log(`${ messages[0] } %c${ messages.slice(1).join(', ') }`, 'color: #bada55');
}

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  traditionalProperty = 'Juan';
  signalProperty = signal('Juan');

  constructor() {
    log('constructor llamado');
  }

  changeTradicional() {
    this.traditionalProperty = 'Juan González';
  }

  changeSignal() {
    this.signalProperty.set('Juan González');
  }

  basicEffect = effect(( onCleanUp ) => {
    log('effect[HomePageComponent]','disparar efectos secundarios');

    onCleanUp(() => {
      log('effect[HomePageComponent](onCleanUp)','se ejecuta cuando el efecto se va a destruir');
    })
  });

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

  ngOnDestroy() {
    log('ngOnDestroy[HomePageComponent]', 'Se ejecuta una vez antes de que se destruya el componente');
  }

  afterNextRenderEffect = afterNextRender(() => {
    log('afterNextRenderEffect[HomePageComponent]', 'Se ejecuta una vez la próxima vez que todos los componentes se hayan renderizado en el DOM');
  });

  afterRender = afterRender(() => {
    log('afterRender[HomePageComponent]', 'Se ejecuta cada vez que todos los componentes se hayan renderizado en el DOM');
  });

}
