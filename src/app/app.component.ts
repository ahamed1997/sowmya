import { Component } from '@angular/core';
 import { AuthenticationService } from './shared/authentication.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ThirdApp';
}


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent {
//  // title = 'ThirdApp';
 

// constructor( public authService: AuthService) {
  
//   }
//   email: string;
//   password: string;

// SignUp() 
//   {
//     this.au.SignUp(this.email, this.password);
//     this.email = ''; 
//     this.password = '';
//   }

//   signIn() 
//   {
//     this.email = ''; 
//     this.password = '';
//   }

//   signOut()
//    {
//     this.authenticationService.SignOut();
//   }

// }  



