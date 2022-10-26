import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { Table1Component } from './material/table1/table1.component';
import { DialogexpComponent } from './material/dialogexp/dialogexp.component';
import { ClientsallComponent } from './pages/clients/clientsall/clientsall.component';
import { ClientsactiveComponent } from './pages/clients/clientsactive/clientsactive.component';
import { ClientsbreachedComponent } from './pages/clients/clientsbreached/clientsbreached.component';
import { ClientsinactiveComponent } from './pages/clients/clientsinactive/clientsinactive.component';
import { ClientsunconvertedComponent } from './pages/clients/clientsunconverted/clientsunconverted.component';
import { ClientssuspendedComponent } from './pages/clients/clientssuspended/clientssuspended.component';
import { AccountsallComponent } from './pages/accounts/accountsall/accountsall.component';
import { AccountsactiveComponent } from './pages/accounts/accountsactive/accountsactive.component';
import { AccountsinactiveComponent } from './pages/accounts/accountsinactive/accountsinactive.component';
import { AccountsbreachedComponent } from './pages/accounts/accountsbreached/accountsbreached.component';
import { AccountssuspendedComponent } from './pages/accounts/accountssuspended/accountssuspended.component';
import { AccountspassedComponent } from './pages/accounts/accountspassed/accountspassed.component';
import { Challengesmt4Component } from './pages/challenges/challengesmt4/challengesmt4.component';
import { Challengesmt5Component } from './pages/challenges/challengesmt5/challengesmt5.component';
import { ChallengesctraderComponent } from './pages/challenges/challengesctrader/challengesctrader.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'charts-apexcharts', component: ChartsApexchartsComponent },
  { path: 'charts-chartjs', component: ChartsChartjsComponent },
  { path: 'form-editors', component: FormsEditorsComponent },
  { path: 'form-elements', component: FormsElementsComponent },
  { path: 'form-layouts', component: FormsLayoutsComponent },
  { path: 'icons-bootstrap', component: IconsBootstrapComponent },
  { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  { path: 'icons-remix', component: IconsRemixComponent },
  { path: 'list-group', component: ListGroupComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'spinners', component: SpinnersComponent },
  { path: 'tables-data', component: TablesDataComponent },
  { path: 'tables-general', component: TablesGeneralComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'pages-blank', component: PagesBlankComponent },
  { path: 'pages-contact', component: PagesContactComponent },
  { path: 'pages-error404', component: PagesError404Component },
  { path: 'pages-faq', component: PagesFaqComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
  { path: 'table1', component: Table1Component },
  { path: 'dialogexp', component: DialogexpComponent },
  { path: 'clients/clientsall', component: ClientsallComponent },
  { path: 'clients/clientsactive', component: ClientsactiveComponent },
  { path: 'clients/clientsbreached', component: ClientsbreachedComponent },
  { path: 'clients/clientsinactive', component: ClientsinactiveComponent },
  { path: 'clients/clientsunconverted', component: ClientsunconvertedComponent },
  { path: 'clients/clientssuspended', component: ClientssuspendedComponent },
  { path: 'accounts/accountsall', component: AccountsallComponent },
  { path: 'accounts/accountsactive', component: AccountsactiveComponent },
  { path: 'accounts/accountinsactive', component: AccountsinactiveComponent },
  { path: 'accounts/accountsbreached', component: AccountsbreachedComponent },
  { path: 'accounts/accountssuspended', component: AccountssuspendedComponent },
  { path: 'accounts/accountspassed', component: AccountspassedComponent },
  { path: 'challenges/challengesmt5', component: Challengesmt4Component },
  { path: 'challenges/challengesmt5', component: Challengesmt5Component },
  { path: 'challenges/challengesctrader', component: ChallengesctraderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
