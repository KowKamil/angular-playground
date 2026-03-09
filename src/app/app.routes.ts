import { Routes } from '@angular/router';
import { NotFoundPage } from '../not-found/not-found';
import { PetPage } from '../mini-apps/pet/pet-page';
import { HomePage } from '../home/home-page';


export const routes: Routes = [
{
    path: '',
    component: HomePage,
},
{
    path: '**',
    component: NotFoundPage
}
];
