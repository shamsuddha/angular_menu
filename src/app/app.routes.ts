import { Routes } from '@angular/router';
import { DashboardComp } from './dashboard/DashboardComp';
import { SettingComp } from './setting/SettingComp';
import { AdminMenuComp } from './admin_menu/AdminMenuComp';
import { ResponsiveMenuComp } from './responsive_menu/ResponsiveMenuComp';

export const routes: Routes = [
  // {
  //   path: '/', 
  //   loadComponent: () => import('./module/authenticated/AuthenticatedComp').then(m => m.AuthenticatedComp),
  //   children: [
  //     { path: 'dashboard',
  //     loadComponent: () => import('./module/authenticated/dashboard/DashboardComp').then(m => m.DashboardComp)
  //     },
  //   ]
  // },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComp },
  { path: 'settings', component: SettingComp },
  { path: 'admin-menu', component: AdminMenuComp },
  { path: 'responsive-menu', component: ResponsiveMenuComp },
];