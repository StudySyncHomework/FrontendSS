import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NewHomeworkComponent } from './new-homework/new-homework.component';

const routes: Routes = [
  {path: '', component: HomepageComponent  },
  {path: 'new-homework', component: NewHomeworkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
