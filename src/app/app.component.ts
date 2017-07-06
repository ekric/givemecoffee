import { Component } from '@angular/core';
import { Tools } from './tools';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: #fff }']
})

export class AppComponent {
  title = { value: 'Give me coffee' };

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('de');
    Tools.translate = translate;
  }
}
