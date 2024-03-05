import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DeirectivesComponent } from './components/deirectives/deirectives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/events/events.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { CounterComponent } from './components/counter/counter.component';
import { NumberPlusComponent } from './components/number-plus/number-plus.component';
import { NumberMinusComponent } from './components/number-minus/number-minus.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindComponent } from './components/two-way-bind/two-way-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DeirectivesComponent,
    IfRenderComponent,
    EventsComponent,
    EmiterComponent,
    ChangeNumberComponent,
    CounterComponent,
    NumberPlusComponent,
    NumberMinusComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
