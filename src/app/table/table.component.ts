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
  guyForm: FormGroup = this.fb.group({});
  selectedBirthday: Date | null | undefined;

  constructor(private tableService: TableService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fetchData();
    this.setDefultGuyForm();
  }

  setDefultGuyForm() {
    this.guyForm = this.fb.group({
      id: [null],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [0, Validators.required],
      gender: ['ชาย', Validators.required],
      birthday: [null, Validators.required],
      createdBy: [''],
      updatedBy: ['guy', Validators.required],
    });
  }

  fetchData(): void {
    this.tableService.getData(this.paramsToSearch).subscribe((response) => {
      this.guyList = response;
    });
  }

  deleteGuy(id: number) {
    if (!confirm(`ต้องการลบข้อมูลชึดที่ ${id} ใช่หรือไม่`)) {
      return;
    }
    this.tableService.deleteData(id).subscribe(() => {
      this.fetchData();
    });
  }

  postGuy(callback: () => void) {
    const guyObject = {
      id: this.guyForm.get('id')?.value,
      firstName: this.guyForm.get('firstName')?.value,
      lastName: this.guyForm.get('lastName')?.value,
      age: this.guyForm.get('age')?.value,
      gender: this.guyForm.get('gender')?.value,
      birthday: this.formatDateToddMMyyy(this.guyForm.get('birthday')?.value),
      createdBy: this.guyForm.get('createdBy')?.value,
      updatedBy: this.guyForm.get('firstName')?.value,
    };

    if (!guyObject.id) {
      guyObject.createdBy = guyObject.firstName;
    }

    return this.tableService.postData(guyObject).subscribe(() => {
      callback();
      this.ngOnInit();
    });
  }

  transformDateToBuddhistEraYear(date: Date): string {
    const adjustedDate = new Date(date);
    adjustedDate.setDate(adjustedDate.getDate() + 1);
    adjustedDate.setFullYear(adjustedDate.getFullYear() + 543);
    return adjustedDate.toISOString().split('T')[0];
  }

  formatDateToddMMyyy(date: Date): string {
    const adjustedDate = new Date(date);
    adjustedDate.setFullYear(adjustedDate.getFullYear() + 543);

    const day = adjustedDate.getDate().toString().padStart(2, '0');
    const month = (adjustedDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = adjustedDate.getFullYear();

    return `${day}/${month}/${year}`;
  }

  search(input: string) {
    this.paramsToSearch = `${this.selectedSearchType}=${input}`;
    this.fetchData();
  }

  //showModal
  addGuy() {
    this.isModalVisible = true;
    this.modalTitle = 'เพิ่มข้อมูล';
  }

  editGuy(guy: Guy) {
    this.guyForm = this.fb.group({
      id: [guy.id],
      firstName: [guy.firstName, Validators.required],
      lastName: [guy.lastName, Validators.required],
      age: [guy.age, Validators.required],
      gender: [guy.gender, Validators.required],
      birthday: [guy.birthday, Validators.required],
      createdBy: [guy.createdBy],
      updatedBy: [guy.updatedBy, Validators.required],
    });

    this.isModalVisible = true;
    this.modalTitle = 'แก้ใขข้อมูลลำดับที่  ' + guy.id;
  }

  onChangeBirthday(event: Date) {
    this.calcurateAge();
  }

  closeModal() {
    this.isModalVisible = false;
    this.isModalLoading = false;
  }

  handleOk(): void {
    if (!this.guyForm.valid) {
      Object.values(this.guyForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    this.isModalLoading = true;

    this.postGuy(() => {
      this.closeModal();
      this.setDefultGuyForm();
    });
  }

  handleCancel(): void {
    this.closeModal();
  }

  calcurateAge() {
    const birthdayControl = this.guyForm.get('birthday');
    const ageControl = this.guyForm.get('age');

    if (birthdayControl && ageControl) {
      const birthdate = birthdayControl.value;

      if (birthdate) {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();

        ageControl.setValue(age);
      }
    }
  }
}
