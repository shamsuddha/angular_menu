import { Routes } from '@angular/router';
import { AdminMenuComp } from './theme/admin_menu/AdminMenuComp';

export const routes: Routes = [
  {
    path: '', 
    loadComponent: () => import('./theme/ThemeComp').then(m => m.ThemeComp),
    children: [
      { path: 'river',
      loadComponent: () => import('./theme/river/RiverComp').then(m => m.RiverComp)
      },    
      { path: 'mountain',
      loadComponent: () => import('./theme/mountain/MountainComp').then(m => m.MountainComp)
      }
    ]
  },

  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  
];