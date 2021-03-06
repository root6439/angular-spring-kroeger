import { IProduct } from './../../../shared/models/Products.model';

import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  products: MatTableDataSource<IProduct>;
  displayedColumns: string[] = ['id', 'title', 'description', 'price'];

  constructor(private route: ActivatedRoute) {
    this.route.data.forEach((data) => {
      this.products = new MatTableDataSource(data['products']);
    });
  }

  ngAfterViewInit() {
    this.products.paginator = this.paginator;
    this.products.sort = this.sort;
  }

}
