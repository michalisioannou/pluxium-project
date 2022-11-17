import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {

  }

  login() {
    this.auth.login();
  }
}
