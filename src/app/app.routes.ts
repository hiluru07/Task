import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
    {path:"add", component:AddComponent},
    {path:"edit/:id",component:EditComponent},
    {path:"view",component:ViewComponent},
    {path:"",component:ViewComponent}
];
