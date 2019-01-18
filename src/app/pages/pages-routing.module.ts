import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages.component';

const routes: Routes = [
    {
        path: '', 
        component: PageComponent, 
        children: [
            { path: 'home', loadChildren: './home/home.module#StarterModule' },
            { path: 'patient', loadChildren: './patient/patient.module#PatientModule' },
            { path: 'service', loadChildren: './service/service.module#ServiceModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
