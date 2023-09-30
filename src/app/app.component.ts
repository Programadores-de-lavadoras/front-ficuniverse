import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EmpAddEditComponent} from "./emp-add-edit/emp-add-edit.component";
import {ComentariosService} from "./services/comentarios.service";
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
    'Contenido',
    'Fecha',
    'id',
      'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _dialog: MatDialog, private _empService: ComentariosService){}

  ngOnInit() {
    this.getListaComentarios()
  }

  openAddEditEmpForm(){
    const dialogRef = this._dialog.open(EmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val: any) =>
      {
        if(val){
          this.getListaComentarios();
        }
      }    })

  }
  getListaComentarios(){
    this._empService.getListaComentarios().subscribe({
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
  deleteComentario(id: number){
    this._empService.deleteComentario(id).subscribe({
      next: (res: any) => {
        alert('Comentario eliminado');
        this.getListaComentarios();
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


