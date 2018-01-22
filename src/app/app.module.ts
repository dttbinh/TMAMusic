import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes,ActivatedRoute} from '@angular/router';


import { AppComponent } from './app.component';

import { HomePageComponent } from './homepage/homepage.component';
import { HeaderPageComponent } from './homepage/headerpage/headerpage.component';
import { ContentPageComponent } from './homepage/contentpage/contentpage.component';
import { FooterPageComponent } from './homepage/footerpage/footerpage.component';

  const routes:Routes=[
     
      {
       path:'',
       component: HomePageComponent
     },
      { path: '',
        redirectTo: '/homepage',
        pathMatch: 'full'
        },
      {
       path:'genre',
       component:  ContentPageComponent,
      }

   ]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderPageComponent,
    ContentPageComponent,
    FooterPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
