import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './components/mainMenu/main-menu/main-menu.component';
import { StudentsComponent } from './components/students/students/students.component';
import { ProductsCategoriesComponent } from './components/sawingProducts/products-categories/products-categories.component';
import { ProductsComponent } from './components/sawingProducts/products/products.component';
import { ModelsComponent } from './components/models/models/models.component';

const routes: Routes = [
  {path: '', component: MainMenuComponent},
  {path: 'students', component: StudentsComponent },
  {path: 'products-categories', component: ProductsCategoriesComponent },
  {path: 'products/:id', component: ProductsComponent },
  {path: 'models', component: ModelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
