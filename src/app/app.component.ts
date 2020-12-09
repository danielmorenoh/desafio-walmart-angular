import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: any;
  constructor(private appService: AppService) { }
  title = 'desafio-walmart';
  columnas: string[] = ['id', 'brand', 'description', 'price', 'descuento'];
  dataSource = null;

  ngOnInit() { 
    this.appService.getProducts().subscribe(data => {
      this.products = data;
      this.dataSource = new MatTableDataSource(this.products);  
    });
    console.log(this.products);

  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  
}

export class Articulo {
  constructor(public id: number, public brand: string, public description: string, public price: number, public descuento: number) {
  }

}
