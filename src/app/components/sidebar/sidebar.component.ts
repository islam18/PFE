import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/table-list', title: 'Liste clients ',  icon:'list', class: '' },
    //{ path: '/user-profile', title: 'Client Physique',  icon:'person', class: '' },
    {path:'/fatca', title:'Fatca',icon:'content_paste',class:''},
    {path:'/risqueClientPhysique', title:'Liste Surveillance',icon:'description',class:''},
    //{ path: '/typography', title: 'Client Morale',  icon:'library_books', class: '' },
    //{ path: '/icons', title: 'Liste clients morales',  icon:'content_paste', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/operations', title: 'Operations',  icon:'paid', class: '' },
    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    { path: '/compte', title: 'Demande compte',  icon:'person_add', class: '' },
    {path:'/listeTransactions', title:'Transactions',icon:'receipt_long',class:''}
   
    
  
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
