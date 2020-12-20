import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseManagerService } from 'src/app/services/expense-manager.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  @ViewChild("tabGroup") tabGroup;
  constructor(private route: Router, private expenseService: ExpenseManagerService, private router: Router) { }

  //patterns

  unamePattern: String = "^[a-z0-9_-]{3,15}$";
  emailPattern: String = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  //-------------------

  usersList: User [];
  flag = true;
  newUser: User;
  signInError: Boolean = false;
  signInErrorMsg: String;
  signUpError: Boolean = false;
  signUpErrorMsg: String;
  ngOnInit() {
  }

  onSignInSubmit(value: any) {
    this.expenseService.getUserByEmailId(value.email).subscribe(data => {
      this.usersList = data;
      this.usersList.forEach((user) => {
        if (user.userEmailId == value.email) {
          if (user.userPassword == value.password) {
            localStorage.setItem('username', value.email);
            localStorage.setItem('userId', user.userId.toString());
            sessionStorage.setItem('username', value.email);
            this.expenseService.userId = user.userId;
            this.router.navigate(['ExpenseManager']);
            // window.location.href = "/account";
            return;
          }
        }
      });
    }, err => {
      console.log(err.ok, err.error);
      this.signInError = !err.ok;
      this.signInErrorMsg = err.error;
    });
  }

  onSignUpSubmit(value: any) {
    
    this.newUser = new User();
    this.newUser.userName = value.username;
    this.newUser.userPassword = value.password;
    this.newUser.userEmailId = value.email;
    this.expenseService.createNewUser(this.newUser).subscribe(data => {
      //for snackbar popup      
      this.tabGroup.selectedIndex = 0;
    },
    err => {
      this.signUpError = !err.ok;
      this.signUpErrorMsg = err.error.text;
    });
  }

}

