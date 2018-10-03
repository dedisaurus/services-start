import { AccountService } from './../account.service';
import { LoggingServices } from './../logging.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  
  //inisialisasi component lain
  constructor(private loggingService: LoggingServices,
              private accountService: AccountService){
                this.accountService.statusUpdate.subscribe(
                  (status : string) => alert('new status: '+ status) 
                )
              }

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.updateStatus(this.id, status);
    //this.loggingService.logStatusChange(status);
  }
}


//kenapa account sservice di provider di hapus karena sekarang untuk account service kita
//kita punya 3 instance. pertama di buat di app component.
//jadi kita provide a tier app component receives its own service
//or its an instance of the service or lets say as to all the child component
// because new account and account adalah anak komponen. oleh karena itu kita meng override instance
//jika ada error pastikan di provider tidak ada service yg dipanggil yg sudah disediakan di appcomponent
// jika ada hapus dan yg di constructor jangan dihapus