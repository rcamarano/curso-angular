import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { CounterComponent } from './components/counter/counter.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { EventsComponent } from './components/events/events.component';


const routes: Routes = [
    { path: '', component: FirstComponentComponent },
    { path: 'magic', component: EventsComponent },
    { path: 'random', component: EmiterComponent},
    { path: 'counter', component: CounterComponent },
    { path: 'list', component: ListRenderComponent}];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }