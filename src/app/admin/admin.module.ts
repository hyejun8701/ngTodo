import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatInputModule, MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './admin.service';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './news/view/view.component';
import { WriteComponent } from './news/write/write.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  declarations: [AdminComponent, HomeComponent, NewsComponent, ViewComponent, WriteComponent],
  providers: [AdminService]
})
export class AdminModule { }
