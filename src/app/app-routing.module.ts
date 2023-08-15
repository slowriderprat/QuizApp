import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'quiz' },
    { path: 'quiz', component: HomeComponent },
    { path: 'result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
