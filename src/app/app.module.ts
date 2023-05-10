import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponentComponent } from './components/counter-component/counter-component.component';
import { HeroComponent } from './components/heroes/hero/hero.component';
import { ListComponent } from './components/heroes/list/list.component';
import { DbzModule } from './modules/dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponentComponent,
    HeroComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
