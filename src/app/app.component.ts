import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EmpAddEditComponent} from "./emp-add-edit/emp-add-edit.component";
import {usuariosService} from "./services/usuarios.service";
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  displayedColumns: string[] = ['Usuario',
    'contrasenia',
    'correo',
    'id',
      'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _dialog: MatDialog, private _empService: usuariosService){}

  ngOnInit() {
    this.getListausuario()
  }

  openAddEditEmpForm(){
    const dialogRef = this._dialog.open(EmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val: any) =>
      {
        if(val){
          this.getListausuario();
        }
      }    })

  }
  getListausuario(){
    this._empService.getListausuario().subscribe({
      next: (res: any) =>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) =>{
        console.log(err)
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteusuario(id: number){
    this._empService.deleteusuario(id).subscribe({
      next: (res: any) => {
        alert('Usuario eliminado');
        this.getListausuario();
      },
    })
  }

  openEditForm(data: any){
    this._dialog.open(EmpAddEditComponent, {
      data,
    });

  }

  protected readonly EmpAddEditComponent = EmpAddEditComponent;
}


