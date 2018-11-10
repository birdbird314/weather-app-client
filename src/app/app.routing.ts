import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_services/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './_services/admin.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
    { path: 'forbidden', component: ForbiddenComponent }
];

export const routing = RouterModule.forRoot(appRoutes);