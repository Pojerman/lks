import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { LksComponent } from './lks/lks.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
	{ path: 'login', component: FormComponent},
	{ path: 'lks', component: LksComponent},
	{ path: 'table', component: TableComponent},
	{ path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
