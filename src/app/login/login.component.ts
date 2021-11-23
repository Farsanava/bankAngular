import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your perfect banking partner..."  // string interpolation databinding
  accno = "Account Number Please"      //property binding
  acno = ""
  pass = ""

  
  constructor(private routerLogin:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  pswChange(event: any) {
    this.pass = event.target.value
    console.log(this.pass)

  }
  acnoChange(event: any) {
    this.acno = event.target.value
    console.log(this.acno)

  }
  // login(a:any,p:any){
  // login() {
  //   var acno = this.acno
  //   var pass = this.pass
  //   // var acno= a.value
  //   // var pass=p.value
  //   let db = this.ds.data
  //   if (acno in db) {
  //     if (pass == db[acno]["password"]) {
  //       alert("Login success")
  //       this.routerLogin.navigateByUrl('dashboard')
  //     }
  //     else {
  //       alert("Invalid Password")
  //     }
  //   }
  //   else {
  //     alert("Invalid Account Number")
  //   }
  // }
  login() {
    var acno = this.acno
    var pass = this.pass
    // var acno= a.value
    // var pass=p.value
    let result=this.ds.login(acno,pass)
    if (result) {
      
        alert("Login success")
        this.routerLogin.navigateByUrl('dashboard')
      }
  }
}

