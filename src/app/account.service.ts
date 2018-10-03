import { LoggingServices } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      //add the sttus update event. which could be a new event emitter which we import
      //(sambungan dri file app.component.html)
      statusUpdate = new EventEmitter<string>();
      

      constructor(private loggingService: LoggingServices){}

      AddAccount(name: string, status: string)
      {
        this.accounts.push({name: name, status:status});
        this.loggingService.logStatusChange(status);
      }
      updateStatus(id: number, status: string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
      }
}

//if error uncaught metadata resolver.js:1138
// with message can't resolve all parameters for accountservice
// the reason is if you inject a service into something this something 
// needs to have some meta data attached.
// because in this file doesnt have any meta data we get error

// we must add @injectable so this service is injectable or can be injected in there
// to be precise.
//you dont add at injectable to the service you want to inject but to the service very you want to inject
// and you dont need to add it to any service if you dont want inject anything in a service 