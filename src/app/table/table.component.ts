import { Component, OnInit } from '@angular/core';
import { Guy } from '../guy';
import { TableService } from '../table.service';
import { Gender } from '../gender.enum';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  guyList: Guy[] = [];

  paramsToSearch = '';
  selectedSearchType = 'age';

  constructor(private tableService: TableService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.tableService.getData(this.paramsToSearch).subscribe((response) => {
      this.guyList = response;
    });
  }

  editGuy(guy: Guy) {
    console.log(guy);
  }

  deleteGuy(index: number) {
    console.log(index);
  }

  transformDateToBuddhistEraYear(date: Date): string {
    const adjustedDate = new Date(date);
    adjustedDate.setFullYear(adjustedDate.getFullYear() + 543);
    return adjustedDate.toISOString().split('T')[0];
  }

  search(input: string) {
    this.paramsToSearch = `${this.selectedSearchType}=${input}`;
    this.fetchData();
  }
}
