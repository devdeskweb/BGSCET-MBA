import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampusComponent } from './campus.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CampusComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [CampusComponent]
})
export class CampusModule { }
