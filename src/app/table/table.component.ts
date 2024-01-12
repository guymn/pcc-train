import { Component, OnInit } from '@angular/core';
import { Guy } from '../guy';
import { TableService } from '../table.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  guyList: Guy[] = [];

  paramsToSearch = '';
  selectedSearchType = 'age';

  isModalVisible = false;
  isModalLoading = false;
  modalTitle: string = '';
  guyForm: FormGroup = this.fb.group({
    id: [null, Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: [null, Validators.required],
    gender: ['', Validators.required],
    birthday: [null, Validators.required],
    createdBy: ['', Validators.required],
    updatedBy: ['', Validators.required],
  });

  constructor(private tableService: TableService, private fb: FormBuilder) {}

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

  //showModal
  addGuy() {
    this.isModalVisible = true;
    this.modalTitle = 'Add guy data';
  }

  handleOk(): void {
    console.log(this.guyForm.value);
    if (!this.guyForm.valid) {
      return;
    }
    this.isModalLoading = true;
    setTimeout(() => {
      this.isModalVisible = false;
      this.isModalLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isModalVisible = false;
  }
}
