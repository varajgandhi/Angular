import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { SearchComponent } from './components/shared/header/search.component';
import { SiComponent } from './components/concepts/databinding/si/si.component';
import { PbComponent } from './components/concepts/databinding/pb/pb.component';
import { EbComponent } from './components/concepts/databinding/eb/eb.component';
import { TwbComponent } from './components/concepts/databinding/twb/twb.component';
import { CpbComponent } from './components/concepts/databinding/cpb/cpb.component';
import { CebComponent } from './components/concepts/databinding/ceb/ceb.component';
import { SdComponent } from './components/concepts/directives/sd/sd.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddContactComponent } from './components/contact/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact/contact-details/contact-details.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SearchComponent,
    SiComponent,
    PbComponent,
    EbComponent,
    TwbComponent,
    CpbComponent,
    CebComponent,
    SdComponent,
    ConceptsComponent,
    AboutComponent,
    ContactComponent,
    AddContactComponent,
    ContactDetailsComponent,
    EllipsisPipe,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
