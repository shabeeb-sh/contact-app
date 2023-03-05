import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  //AllContactComponent
  {
    path:'',component:AllContactsComponent
  },
  // AddContactsComponent
  {
    path:'add-contacts',component:AddContactsComponent
  },
  // EditContactsComponent
  {
    path:'edit-contacts/:id',component:EditContactsComponent
  },
  // ViewContactComponent
  {
    path:'view-contact/:id',component:ViewContactComponent
  },
  //page not found
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
