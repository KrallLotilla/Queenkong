// pagination.component.ts
import { Component, OnInit } from '@angular/core';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  items: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 20;

  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.paginationService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  nextPage() {
    this.currentPage++;
  }

  previousPage() {
    this.currentPage--;
  }

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
  }
}
