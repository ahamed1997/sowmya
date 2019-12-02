import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit() { }

}