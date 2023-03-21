import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, IUser } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users: IUser[] = [];

  constructor(private authService: AuthService) {}
  siginForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  ngOnInit(): void {
    this.authService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  signIn() {
    // console.log(this.siginForm);
    const user: IUser = this.siginForm.value;
    console.log(user);

    console.log(this.users);
    for (let i = 0; i < this.users.length; i++) {
      if (
        this.users[i].userName === user.userName &&
        this.users[i].password === user.password
      ) {
        console.log(true);
      }
    }
  }
}
