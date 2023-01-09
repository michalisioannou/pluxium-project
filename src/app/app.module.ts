import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';[]
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Table1Component } from './material/table1/table1.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from '@angular/cdk/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DialogexpComponent } from './material/dialogexp/dialogexp.component';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ExtradaysComponent } from './materials/extradays/extradays.component';
import { ConfirmationComponent } from './materials/dialog/confirmation/confirmation.component';
import { CreateNewComponent } from './materials/dialog/create-new/create-new.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { ExportComponent } from './materials/export/export.component';
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
import { AccountspassedComponent } from './pages/accounts/accountspassed/accountspassed.component';
import { AccountssuspendedComponent } from './pages/accounts/accountssuspended/accountssuspended.component';
import { ChallengesctraderComponent } from './pages/challenges/challengesctrader/challengesctrader.component';
import { Challengesmt5Component } from './pages/challenges/challengesmt5/challengesmt5.component';
import { Challengesmt4Component } from './pages/challenges/challengesmt4/challengesmt4.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Accountsmt5Service } from './services/accountsmt5.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {AuthInterceptor} from "./services/auth.interceptor";
import {ClientsAllService} from "./services/clients-all.service";
import { EditcolumnComponent } from './material/editcolumn/editcolumn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    AlertsComponent,
    AccordionComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    ListGroupComponent,
    ModalComponent,
    TabsComponent,
    PaginationComponent,
    ProgressComponent,
    SpinnersComponent,
    TooltipsComponent,
    FormsElementsComponent,
    FormsLayoutsComponent,
    FormsEditorsComponent,
    TablesGeneralComponent,
    TablesDataComponent,
    ChartsChartjsComponent,
    ChartsApexchartsComponent,
    IconsBootstrapComponent,
    IconsRemixComponent,
    IconsBoxiconsComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    Table1Component,
    DialogexpComponent,
    ExtradaysComponent,
    ConfirmationComponent,
    CreateNewComponent,
    ExportComponent,
    ClientsallComponent,
    ClientsactiveComponent,
    ClientsbreachedComponent,
    ClientsinactiveComponent,
    ClientsunconvertedComponent,
    ClientssuspendedComponent,
    AccountsallComponent,
    AccountsactiveComponent,
    AccountsinactiveComponent,
    AccountsbreachedComponent,
    AccountspassedComponent,
    AccountssuspendedComponent,
    ChallengesctraderComponent,
    Challengesmt5Component,
    Challengesmt4Component,
    ConfirmDialogComponent,
    EditcolumnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule,
    DialogModule,
    MatAutocompleteModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableExporterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    HttpClientModule,

  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    ClientsAllService
  ],
  bootstrap: [
    AppComponent,
    Accountsmt5Service
  ]
})
export class AppModule {
}
