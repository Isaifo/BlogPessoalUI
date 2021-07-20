import { Injectable } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal'
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {
    

  constructor(private bsModalService: BsModalService) { }

  private showAlert(message: string, type: string){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertasComponent)
    // mostra o componente como um modal
    bsModalRef.content.type = type
    bsModalRef.content.message = message //  criando o conteudo do modal
  }

  showAlertDanger(message: string){
    this.showAlert(message, 'danger')
  }

  showAlertSuccess(message: string){
    this.showAlert(message, 'success')
  }

  showAlertInfo(message: string){
    this.showAlert(message, 'info')
  }
}
