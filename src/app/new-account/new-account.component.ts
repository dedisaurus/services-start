import { LoggingServices } from './../logging.service';
import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingServices]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  //inisialisasi component lain
  constructor(private loggingService: LoggingServices){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    //the reason use this below because more clear of throughout this moduile
    // const service = new LoggingServices();
    // service.logStatusChange(accountStatus);

    //still same but we doing use inject 
    this.loggingService.logStatusChange(accountStatus);
  }
}
