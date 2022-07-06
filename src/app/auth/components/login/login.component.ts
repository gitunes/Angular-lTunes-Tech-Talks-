
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }
  loginForm!: FormGroup;
  message: string = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
    })
  }
  onSubmit() {
    
    if (!this.loginForm.valid) {
      setTimeout(() => {
        this.message = ""
      }, 2000);
      this.message = "Tüm alanlar zorunludur!"
      return
    }
    this.authService.fetchLogin(this.loginForm.value).subscribe(res => {
      
      this.router.navigate([''])
      this.authService.user.subscribe(res => console.log(res))
    })
  }

}
