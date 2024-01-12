import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Guy } from './guy';
import { inject } from '@angular/core/testing';
import { TableService } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}

  // activeButton(
  //   _t5: string
  // ): 'link' | 'primary' | 'default' | 'dashed' | 'danger' | 'text' | null {
  //   return this.currentPath === _t5 ? 'primary' : 'default';
  // }
}
