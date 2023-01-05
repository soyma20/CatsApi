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
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

import {AppComponent} from './app.component';
import {AppEffects} from "./app.effects";
import {metaReducers, reducers} from "./reducers";
import {BreedsComponent} from './components/breeds/breeds.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {BreedComponent} from './components/breed/breed.component';
import {SearchInputComponent} from './components/search-input/search-input.component';
import {ImagesComponent} from './components/images/images.component';
import {ImageComponent} from './components/image/image.component';
import {ChipsComponent} from './components/chips/chips.component';
import {ChipComponent} from './components/chip/chip.component';
import {PaginatorComponent} from './components/paginator/paginator.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    BreedsComponent,
    BreedComponent,
    SearchInputComponent,
    ImagesComponent,
    ImageComponent,
    ChipsComponent,
    ChipComponent,
    PaginatorComponent,
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
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
