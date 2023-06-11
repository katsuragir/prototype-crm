import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { register } from 'src/assets/mock/register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tabLogin: boolean = true;
  tabRegister: boolean = false;
  form!: FormGroup;
  formRegis!: FormGroup;
  invalidPassword: boolean = false;
  msgError!: string | null;
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const isLogin = JSON.parse(localStorage.getItem('isLogin')!);
    if (isLogin) {
      this.router.navigateByUrl('/home');
    }
    this.createForm();
    this.login();
  }

  createForm() {
    this.form = this.fb.group({
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.formRegis = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
   });
  }

  login() {
    this.tabLogin = true;
    this.tabRegister = false;
    this.form.get('email')?.setValue('admin@ridhliver.com');
    this.form.get('password')?.setValue('mypassword');
  }

  register() {
    this.tabLogin = false;
    this.tabRegister = true;
    this.formRegis.reset();
  }

  retryPassword(retry: string,password: string) {
    if (retry !== password) {
      this.msgError = 'password tidak sama!!!'
      this.invalidPassword = true;
    } else {
      this.msgError = null;
      this.invalidPassword = false;
    }
  }

  submitLogin() {
    if (this.form.invalid) {
      return false;
    }

    const user = register.content.find(x => x.user.email == this.form.get('email')?.value);
    console.log(user);
    if (user) {
      if (user.user.password == this.form.get('password')?.value) {
        localStorage.setItem('isLogin', JSON.stringify(true));
        return this.router.navigateByUrl('/home');
      }
      return this.msgError = 'password invalid!!!';
    }
    return this.msgError = 'login invalid!!!';
  }

  submitRegister() {
    console.log(this.formRegis, this.invalidPassword);
    if (this.formRegis.invalid || this.invalidPassword) {
      return false;
    }
    console.log(this.formRegis);
    const user = register.content.find(x => x.user.email == this.formRegis.get('email')?.value);
    if (user) {
      return this.msgError = 'Email sudah terdaftar';
    }
    const newUser = register.content[register.content.length - 1];
    newUser.user.email = this.formRegis.get('email')?.value;
    newUser.user.password = this.formRegis.get('password')?.value;
    console.log(newUser);
    register.content.push(newUser);
    this.tabLogin = true;
    console.log(register);
    return this.tabRegister = false;
  }

}
