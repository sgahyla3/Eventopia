import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { LoginPage } from './pages/login/login.page';


export const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'event',
    loadComponent: () => import('./pages/event/event.page').then( m => m.EventPage)
  },
  {
    path: 'friends',
    loadComponent: () => import('./pages/friends/friends.page').then( m => m.FriendsPage)
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('./tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('./tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('./tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'tab4',
        loadComponent: () =>
          import('./tab4/tab4.page').then((m) => m.Tab4Page),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
