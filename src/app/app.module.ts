import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

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
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemDetailCarComponent } from './components/item-detail-car/item-detail-car.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { ListService } from './services/list.service';
import { AddCarComponent } from './components/add-car/add-car.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { GetProductsComponent } from './components/get-products/get-products.component';

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
    TwoWayBindComponent,
    ItemDetailComponent,
    ItemDetailCarComponent,
    AddAnimalComponent,
    AddCarComponent,
    AddProductComponent,
    GetProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
