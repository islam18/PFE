import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { DetailsComponent } from 'app/table-list/details/details.component';
import { TestComponent } from 'app/test/test.component';
import { DetailsPMComponent } from 'app/icons/details-pm/details-pm.component';
import { DetailsRisqueComponent } from 'app/icons/details-risque/details-risque.component';
import { RisqueComponent } from 'app/table-list/risque/risque.component';
import { OperationsComponent } from 'app/operations/operations.component';
import { ListePersonnePhyComponent } from 'app/table-list/liste-personne-phy/liste-personne-phy.component';
import { AffichageComponent } from 'app/fatca/affichage/affichage.component';
import { AffichageRisqueComponent } from 'app/risque/affichage-risque/affichage-risque.component';
import { RisquePersonneMoraleComponent } from 'app/risque/risque-personne-morale/risque-personne-morale.component';
import { FatcaComponent } from 'app/fatca/fatca.component';
import { CompteComponent } from 'app/compte/compte.component';
import { OuvertureCompteComponent } from 'app/compte/ouverture-compte/ouverture-compte.component';
import { TransactionComponent } from 'app/operations/transaction/transaction.component';
import { TransactionParClientComponent } from 'app/operations/transaction-par-client/transaction-par-client.component';
import { DetailsTransactionComponent } from 'app/operations/details-transaction/details-transaction.component';
import { PersonneMoraleComponent } from 'app/icons/personne-morale/personne-morale.component';
import { PersonnePhysiqueComponent } from 'app/table-list/personne-physique/personne-physique.component';
import { DetailsFatcaComponent } from 'app/fatca/details-fatca/details-fatca.component';
import { HomeComponent } from 'app/security/home/home.component';
import { LoginComponent } from 'app/security/login/login.component';
import { RegisterComponent } from 'app/security/register/register.component';
import { ProfileComponent } from 'app/security/profile/profile.component';
import { BoardUserComponent } from 'app/security/board-user/board-user.component';
import { BoardModeratorComponent } from 'app/security/board-moderator/board-moderator.component';
import { BoardAdminComponent } from 'app/security/board-admin/board-admin.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'clientsMorales',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path:'test/:id',             component: TestComponent },
    { path:'details/:id',          component: DetailsComponent },
    { path:'detailsClientMorale/:id',          component:DetailsPMComponent },
    { path:'risqueClientMorale/:id', component:DetailsRisqueComponent},
    {path:'risqueClientPhysique/:id',component:RisqueComponent},
    {path:'operations', component:OperationsComponent},
    {path:'clientsPhysiques', component:ListePersonnePhyComponent},
    {path:'fatca', component:AffichageComponent},
    {path:'risqueClientPhysique',component:AffichageRisqueComponent},
    {path:'risqueClientMorale', component:RisquePersonneMoraleComponent},
    {path:'compte',component:CompteComponent},
    {path:'ouvertureCompte/:id',component:OuvertureCompteComponent},
    {path:'listeTransactions', component: TransactionComponent},
    {path:'transactionsClient/:id',component:TransactionParClientComponent},
    {path:'detailsTransaction/:id',component:DetailsTransactionComponent},
    {path: 'clientMoral/:id', component:PersonneMoraleComponent},
    {path:'clientPhysique/:id',component:PersonnePhysiqueComponent},
    {path:'detailsFatca/:id', component:DetailsFatcaComponent},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'user', component: BoardUserComponent },
    { path: 'mod', component: BoardModeratorComponent },
    { path: 'admin', component: BoardAdminComponent },
    


    
];
