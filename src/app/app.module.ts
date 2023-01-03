import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AppEffects} from "./app.effects";
import {metaReducers, reducers} from "./reducers";
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {BreedsComponent} from './components/breeds/breeds.component';
import {BreedComponent} from './components/breed/breed.component';
import {SearchInputComponent} from './components/search-input/search-input.component';
import {ImagesComponent} from './components/images/images.component';
import {ImageComponent} from './components/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    BreedsComponent,
    BreedComponent,
    SearchInputComponent,
    ImagesComponent,
    ImageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot(),
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
