import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages.component';

const routes: Routes = [
    {
        path: '', 
        component: PageComponent, 
        children: [
            { path: 'home', loadChildren: './home/home.module#StarterModule' },
            { path: 'component', loadChildren: './component/component.module#ComponentsModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
