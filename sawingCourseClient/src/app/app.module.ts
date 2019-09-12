import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/mainMenu/main-menu/main-menu.component';
import { MenuComponent } from './components/mainMenu/menu/menu.component';
import { ProductsCategoriesComponent } from './components/sawingProducts/products-categories/products-categories.component';
import { ModelsComponent } from './components/models/models/models.component';
import { SawingInstructionsComponent } from './components/sawingInstructions/sawing-instructions/sawing-instructions.component';
import { StudentsComponent } from './components/students/students/students.component';
import { FinancialComponent } from './components/financial/financial/financial.component';
import { StudentsTableComponent } from './components/students/students-table/students-table.component';
import {  HttpClientModule } from '@angular/common/http'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './components/sawingProducts/products/products.component';
import { UpdateStudentComponent } from './components/students/update-student/update-student.component';
import { SelectColorComponent } from './components/sawingProducts/select-color/select-color.component';
import { ModelComponent } from './components/models/model/model.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AddPayComponent } from './components/students/add-pay/add-pay.component';
import { FormsModule } from '@angular/forms';
import { NewStudentComponent } from './components/students/new-student/new-student.component';
import { CartProductsComponent } from './components/sawingProducts/cart-products/cart-products.component';
import { DealFormComponent } from './components/sawingProducts/deal-form/deal-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MenuComponent,
    ProductsCategoriesComponent,
    ModelsComponent,
    SawingInstructionsComponent,
    StudentsComponent,
    FinancialComponent,
    StudentsTableComponent,
    ProductsComponent,
    UpdateStudentComponent,
    SelectColorComponent,
    ModelComponent,
    AddPayComponent,
    NewStudentComponent,
    CartProductsComponent,
    DealFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

