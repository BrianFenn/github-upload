import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];				//define an object "users:" from Array called "Users[]" which we will you below.
  showExtended: boolean = false;		//define an object "showExtended" to show the User content, but initially set to false (i.e. User details not expanded)
  showUserForm: boolean = false;		//define an object "showUserForm" that will be used to hide the User Form, set to false to not show it initially
  loaded: boolean = false;		//define an object "loaded" that will be used to display a message "Users are loading..." is Users are being accessed, but not available to see yet
  enableAdd: boolean = true;		//define an object "enableAdd" that will be used to prevent the user from attempting to add a user without completing the "userForm"

  @ViewChild('userForm') form: any;		//from <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)"> inside "users.component.html" file

  //@ViewChild('NAMEOFFORM') form: any;
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    birthDay: null,
  }

  constructor() { }

  ngOnInit(): void {
    this.users = [ {
      firstName: 'Brian',
      lastName: 'Fennessy',
      email: 'B_Fennessy@mail.fhsu.edu',
      hide: true,
      isActive: false,
      birthDay: new Date( '11/01/2020 09:29:00')
    },{
      firstName: 'John',
      lastName: 'Johnson',
      email: 'B_Fennessy@mail.fhsu.edu',
      hide: true,
      isActive: false,
      birthDay: new Date( '11/01/2020 09:30:00')
    },{
      firstName: 'Will',
      lastName: 'Williams',
      email: 'B_Fennessy@mail.fhsu.edu',
      hide: true,
      isActive: false,
      birthDay: new Date( '11/01/2020 09:31:00')
    }]
    this.loaded = true; //no longer wil the loaded boolean be false
    this.showExtended = true; //no longer will the showExtended object be false
  }

onSubmit({ value, valid } : { value: User, valid: boolean }) {
  if(!valid) {
    console.log('Form is not valid');
  }else {
    value.isActive = true;
    value.birthDay = new Date ();
    value.hide = true;
    this.users.unshift(value);
    this.form.reset();
  }
}
 
}
