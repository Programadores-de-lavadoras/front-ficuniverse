import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ComentariosService} from "../services/comentarios.service";
import {DialogRef} from "@angular/cdk/dialog";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
empForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _empService: ComentariosService,
    private _dialogRef: DialogRef<EmpAddEditComponent>,
  ) {
    this.empForm = this._fb.group({
      Usuario:'',
      Contenido:'',
      Fecha:'',
    });
  }

  onFormSubmit(){
    if(this.empForm.valid){
      this._empService.añadirComentario(this.empForm.value).subscribe({
        next: (val: any) => {
        alert('¡Comentario añadido!');
        this._dialogRef.close();
      },
        error: (err: any) =>{
        console.error(err);
      }
      })
    }
  }
}
