import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStock } from '../Interfaces/istock';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  private urlBase: string =
    'http://localhost:2020/SEXTO_PHP_ANGULAR/Inventario/Controllers/Stock.Controller.php?op=';
  constructor(private cliente: HttpClient) {}

  todos(): Observable<IStock[]> {
    return this.cliente.get<IStock[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<IStock> {
    var stocks = new FormData();
    return this.cliente.post<IStock>(this.urlBase + 'uno', stocks);
  }
  insertar(stocks: IStock): Observable<any> {
    var stok = new FormData();
    stok.append('StockId', stocks.stockId.toString());
    stok.append('ProductoId', stocks.productoId.toString());
    stok.append('ProveedorId',stocks.proveedorId.toString());
    stok.append('FechaIngreso',stocks.precio_Venta.toString());
    return this.cliente.post(this.urlBase + 'insertar', stok);
  }
  actualizar(stocks: IStock): Observable<any> {
    var stok = new FormData();
    stok.append('StockId', stocks.stockId.toString());
    stok.append('ProductoId', stocks.productoId.toString());
    stok.append('ProveedorId',stocks.proveedorId.toString());
    stok.append('FechaIngreso',stocks.precio_Venta.toString());
    return this.cliente.post(this.urlBase + 'actualizar', stok);
  }
  eliminar(id: number): Observable<any> {
    var stok = new FormData();
    stok.append('id', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', stok);
  }
}
