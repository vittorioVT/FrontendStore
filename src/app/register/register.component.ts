import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthFrontService } from '../auth-front.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
    private service: AuthFrontService,
    private router: Router) {
    this.registerForm = fb.group({
      userName: ['', Validators.required],
      email: new FormControl(null, [Validators.required, , Validators.email]),
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validator: matchingFields('password', 'confirmPassword') });
  }
  onSubmit() {
    delete this.registerForm.value.confirmPassword;
    this.service.register(this.registerForm.value).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('userName', data.UserName);
      localStorage.setItem('token_value', data.Token);
      this.router.navigate(['/']);
    })
  }
}

  function matchingFields(field1, field2) {
    return form => {
      if (form.controls[field1].value !== form.controls[field2].value)
        return {matchingFields: true}
    }
  }
