import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Rent } from '../../model/Rent';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.scss'
})
export class RentComponent {
  data: Rent[] = [
    { _id: "0", date: this.formartDate(new Date("12/01/2024").toLocaleDateString("pt-BR")), street: "rua João", number: 12, complement: "apartamento", renant: "joão", value: 700.90, paid: true },
    { _id: "1", date: this.formartDate(new Date("12/02/2024").toLocaleDateString("pt-BR")), street: "rua maria", number: 21, complement: "casa", renant: "maria", value: 1000.90, paid: false },
  ]
  constructor(){
    registerLocaleData(localePT)
  }

  readonly displayedColumns: string[] = ["date", "street", "number", "complement", "renant", "value", "paid", "actions"]
  dataSource = new MatTableDataSource(this.data)

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  formartDate(date: string): string{
    const dateArr = date.split("/")
    const temp = dateArr[0]
    dateArr[0] = dateArr[1]
    dateArr[1] = temp
    return dateArr.join("/")
  }
}
