import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent, BlogListComponent, BlogComponent } from './components/index';

export const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    { 
        path: 'blogs', 
        component: BlogListComponent 
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'blog/:id',
        component: BlogComponent
    }
];