
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import { DataTableModule } from 'primeng/primeng';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  users: User[];
  selectedUser: User;
  items: MenuItem[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('api/user/').subscribe(res => {
      this.users = res;
      
    });

    this.items = [
      { label: 'View', icon: 'fa-search', command: (event) => this.viewUser(this.selectedUser) },
      { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteUser(this.selectedUser) },
    
     
    ];
  }
  viewUser(select: User) {
    console.log(JSON.stringify(select));

  }

  createUser(nume:string,prenume:string,email:string) {
    const userz=new User(nume,prenume,email);
   this.apiService.post('api/user/' ,userz).subscribe(res => {
   // this.viewUser(userz);
     console.log(res);
   },error=>{
     console.log(error);
   });
   
  }

  deleteUser(select: User) {
    this.apiService.delete('api/user/' + select.id).subscribe(res => {
      console.log(res);
    });

  }

}

interface User {
  id: string,
  nume: string,
  prenume: string,
  email: string
}

class User{
  id:string;
  nume:string;
  prenume:string;
  email:string;

  constructor(nume?:string,prenume?:string,email?:string)
  {
    this.nume=nume;
    this.prenume=prenume;
    this.email=email;
  }
}