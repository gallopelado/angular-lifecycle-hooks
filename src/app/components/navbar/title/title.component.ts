import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
})
export class TitleComponent implements OnChanges {

  title = input.required<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges[TitleComponent] ', changes);
    for ( const inputName in changes ) {
      const inputValues = changes[inputName];
      console.log(`previous ${inputName} === ${inputValues.previousValue}`);
      console.log(`current ${inputName} === ${inputValues.currentValue}`);
      console.log(`firstChange ${inputName} === ${inputValues.firstChange}`);
    }
  }
}
