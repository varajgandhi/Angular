import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { AddContactComponent } from './components/contact/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact/contact-details/contact-details.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: ConceptsComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'contacts/new', component: AddContactComponent },
  { path: 'contacts/:id', component: ContactDetailsComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard]} //guard returns false
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
