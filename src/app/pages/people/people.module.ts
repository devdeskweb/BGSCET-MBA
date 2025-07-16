import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { AdministrativeStaffComponent } from './administrative-staff/administrative-staff.component';

const routes: Routes = [
  { path: '', component: PeopleComponent }
];

@NgModule({
  imports: [
    CommonModule,ComponentsModule, RouterModule.forChild(routes)
  ],
  declarations: [PeopleComponent,AdministrativeStaffComponent]
})
export class PeopleModule { }
