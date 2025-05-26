import { Routes } from '@angular/router';
import { ClassStyleComponent } from './class-style/class-style.component';
import { ForComponent } from './for/for.component';
import { IfComponent } from './if/if.component';

export const routes: Routes = [
    {path:"attributes",component:ClassStyleComponent},
    {path:"",component:ClassStyleComponent},
    {path:"for",component:ForComponent},
    {path:"if",component:IfComponent}
];
