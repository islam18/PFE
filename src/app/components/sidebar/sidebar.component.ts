import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'app/securityServices/token-storage.service';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Tableau de bord',  icon: 'dashboard', class: '' },
    { path: '/table-list', title: 'Liste clients ',  icon:'list', class: '' },
    { path: '/ajouter', title: 'Ajouter client',  icon:'person_add', class: '' },
    {path:'/fatca', title:'Fatca',icon:'content_paste',class:''},
    {path:'/risqueClientPhysique', title:'Liste Surveillance',icon:'description',class:''},
    { path: '/compte', title: 'Demande compte',  icon:'person_add', class: '' },
 
    { path: '/operations', title: 'Operations',  icon:'paid', class: '' },
    {path:'/listeTransactions', title:'Transactions',icon:'receipt_long',class:''},
    {path:'/listeTransactionsDouteuses', title:'Transactions douteuses',icon:'notification_important',class:''}
];
export const ROUTES1: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/table-list', title: 'Liste clients ',  icon:'list', class: '' },
  {path:'/fatca', title:'Fatca',icon:'content_paste',class:''},
  { path: '/operations', title: 'Operations',  icon:'paid', class: '' },
  { path: '/compte', title: 'Demande compte',  icon:'person_add', class: '' },
  {path:'/listeTransactions', title:'Transactions',icon:'receipt_long',class:''},
  //{path:'/risqueClientPhysique', title:'Liste Surveillance',icon:'description',class:''},
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  private roles: string[];
  isUser=false ; 
  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.isUser=this.roles.includes('ROLE_USER')
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_RESPONSABLE');
      this.username = user.username;
    }
    if(this.showAdminBoard==true)
    {this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    if(this.isUser==true)
    { 
      this.menuItems = ROUTES1.filter(menuItem => menuItem);}
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}