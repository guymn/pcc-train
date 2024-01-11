import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { VrtComponent } from './vrt/vrt.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'vrt', component: VrtComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
