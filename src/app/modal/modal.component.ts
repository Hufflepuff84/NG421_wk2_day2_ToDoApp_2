import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  
  modalInstance: NgbModalRef;

  constructor() { }

  ngOnInit() {
  }

  close(){
    this.modalInstance.close('no');
  }
  yes(){
    this.modalInstance.close('yes');
  }
}