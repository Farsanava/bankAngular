import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any = {
    1000: { accno: 1000, uname: "sanu", password: 1000, balance: 5000 },
    1001: { accno: 1001, uname: "shabi", password: 1001, balance: 6000 },
    1002: { accno: 1002, uname: "nichu", password: 1002, balance: 4000 },
    1003: { accno: 1003, uname: "hadiashir", password: 1003, balance: 5000 }
  }
  constructor() { }
  register(accno:any,uname:any,password:any){
    let database=this.data

    if(accno in database){
        return false
    }
    else{
       database[accno]={
        accno,
        uname,
        password,
        balance:0
       }
       return true
    }
  }
  login(acno:any,pass:any){
    let database = this.data
    if (acno in database) {
      if (pass == database[acno]["password"]) {
        return true
      }
      else {
        alert("Invalid Password")
        return false
      }
    }
    else {
      alert("Invalid Account Number")
      return false
    }
  }
}
