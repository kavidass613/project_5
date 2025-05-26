import { Routes } from '@angular/router';
import { ClassStyleComponent } from './class-style/class-style.component';
import { ForComponent } from './for/for.component';
import { IfComponent } from './if/if.component';
import { SwitchComponent } from './switch/switch.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { TdfComponent } from './tdf/tdf.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AllDatasComponent } from './all-datas/all-datas.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { UpdateDatasComponent } from './update-datas/update-datas.component';
import { ViewDataComponent } from './view-data/view-data.component';

export const routes: Routes = [
    {path:"attributes",component:ClassStyleComponent},
    {path:"",component:ClassStyleComponent},
    {path:"for",component:ForComponent},
    {path:"if",component:IfComponent},
    {path:"switch",component:SwitchComponent},
    {path:"child",component:ChildComponent},
    {path:"parent",component:ParentComponent},
    {path:"tdf",component:TdfComponent},
    {path:"reactiveform", component:ReactiveFormComponent},
    {path:"alldatas",component:AllDatasComponent},
    {path:"create",component:CreateDataComponent},
    {path:"update/:id",component:UpdateDatasComponent},
    {path:"view/:id",component:ViewDataComponent}
];
