import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = ""
  acno = ""
  pass = ""
  constructor(private ds: DataService,private routerLogin:Router) { }

  ngOnInit(): void {
  }
  register() {
    var uname = this.uname
    var acno = this.acno
    var pass = this.pass
    //let database=this.ds.data // service nte ullil ullath
    var result =this.ds.register(acno,uname,pass)
    if(result){
    alert("Account create successfully")
    this.routerLogin.navigateByUrl('')

    }
    else{
      alert("account already exist")
      this.routerLogin.navigateByUrl('')
    }
  }
}
