import { AddProductComponent } from './components/add-product/add-product.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { CounterComponent } from './components/counter/counter.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { EventsComponent } from './components/events/events.component';
import { ItemDetailCarComponent } from './components/item-detail-car/item-detail-car.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { ProductListComponent } from './components/get-products/get-products.component';


const routes: Routes = [
    { path: '', component: FirstComponentComponent },
    { path: 'magic', component: EventsComponent },
    { path: 'random', component: EmiterComponent},
    { path: 'counter', component: CounterComponent },
    { path: 'list', component: ListRenderComponent},
    { path: 'list/:id', component: ItemDetailComponent},
    { path: 'listCar/:id', component: ItemDetailCarComponent},
    { path: 'addAnimal', component: AddAnimalComponent},
    { path: 'addCar', component: AddCarComponent},
    { path: 'addProduct', component: AddProductComponent},
    { path: 'productList', component: ProductListComponent},
];


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }