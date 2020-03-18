import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
