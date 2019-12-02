import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authService:AuthenticationService) { }

  ngOnInit() {
  }

}






