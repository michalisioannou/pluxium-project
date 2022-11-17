import {Component, ElementRef, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {User} from './model/user';
import {AuthService} from "./services/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'admindashboard';
  constructor(private elementRef: ElementRef,  public  _router: Router,
              private dialog: MatDialog, private auth:AuthService) { }

  ngOnInit() {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
    this.auth.retrieveAuthInfoFromUrl();
  }


}
