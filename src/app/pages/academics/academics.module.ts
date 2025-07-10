import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicsComponent } from './academics.component';
import { ComponentsModule } from "src/app/components/components.module";
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: AcademicsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
],
  declarations: [AcademicsComponent]
})
export class AcademicsModule { }
