import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceComponent } from './maintenance.component';
import { DeviceModelComponent } from './components/device-model/device-model.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateDeviceModelComponent } from './components/device-model/components/create-device-model/create-device-model.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    MaintenanceComponent,
    DeviceModelComponent,
    CreateDeviceModelComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class MaintenanceModule { }
