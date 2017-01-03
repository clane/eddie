import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ModalService {
  isModal:boolean;
  stateChange: Subject<boolean> = new Subject<boolean>();

  constructor(){
    this.isModal = false;
  }
  showModal(){ 
    this.isModal = true; 
    this.stateChange.next(this.isModal);
    console.log('from modal service showModal, isModal = ' + this.isModal);
  }

  hideModal(){ 
    this.isModal = false;   
    this.stateChange.next(this.isModal);
    console.log('from modal service hideModal, isModal = ' + this.isModal);
  }
}
