import { AccountService } from './account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
accounts: {name: string, status: string}[] =[];

//add providers sebagai reference so angular can know about how to create it
constructor(private accountService: AccountService){}
ngOnInit(){
  this.accounts = this.accountService.accounts;
}

}


