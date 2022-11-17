import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatDialog } from "@angular/material/dialog";
import {catchError, observable, of as observableOf, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { ExportComponent } from 'src/app/materials/export/export.component';
import { DialogexpComponent } from 'src/app/material/dialogexp/dialogexp.component';
import {ClientsAllService} from "../../../services/clients-all.service";
import {Client} from "../../../model/client";

@Component({
  selector: 'app-clientsall',
  templateUrl: './clientsall.component.html',
  styleUrls: ['./clientsall.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClientsallComponent implements OnInit {
  dataSource = new MatTableDataSource<Client>();
  columnsToDisplay = ['userid', 'fullname', 'email', 'subscription'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Client | null;
  displayedColumns = ['userid', 'fullname', 'email', 'subscription','star'];
  MenuPositionExample: [];
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  options = this._formBuilder.group({
    color: this.colorControl,
    fontSize: this.fontSizeControl,
  });
  durationInSeconds = 5;

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog,
              private _formBuilder: FormBuilder, private clientsAllService: ClientsAllService) {}

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value || 0);
  }

  openDialog() {
    this.dialog.open(DialogexpComponent, {
      height: '450px',
      width: '11500px'
    });
  }

  exportDialog() {
    this.dialog.open(ExportComponent, {
      height: '230px',
      width: '120px'
    }
    );
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.clientsAllService.LoadAllClients().
    pipe(catchError(err => observableOf([]))).subscribe(data => this.dataSource.data = data);
  }
}

class ClientsallComponentImpl extends ClientsallComponent {
}




const ELEMENT_DATA: Client[] = [
  {
    fullname: 'Client Test',
    userid: '123526',
    email: 'test@test.t.',
    subscription: 'Basic',
    description: ``,
  },
  {
    fullname: '2',
    userid: 'Helium',
    email: 'test@test.t.',
    subscription: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    fullname: '3',
    userid: 'Lithium',
    email: 'test@test.t.',
    subscription: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
    fullname: '4',
    userid: 'Beryllium',
    email: 'test@test.t.',
    subscription: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  },
  {
    fullname: '5',
    userid: 'Boron',
    email: 'test@test.t.',
    subscription: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
  },
  {
    fullname: '6',
    userid: 'Carbon',
    email: 'test@test.t.',
    subscription: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
  },
  {
    fullname: '7',
    userid: 'Nitrogen',
    email: 'test@test.t.',
    subscription: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
  },
  {
    fullname: '8',
    userid: 'Oxygen',
    email: 'test@test.t.',
    subscription: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
  },
  {
    fullname: '9',
    userid: 'Fluorine',
    email: 'test@test.t.',
    subscription: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
  },
  {
    fullname: '10',
    userid: 'Neon',
    email: 'test@test.t.',
    subscription: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
];



