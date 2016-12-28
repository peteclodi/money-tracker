import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {MenuBarComponent} from './menu-bar/menu-bar.component';
import {AccountListDialogComponent} from './account-list-dialog/account-list-dialog.component';
import {AccountsService} from './accounts.service/accounts.service';

@NgModule({
    declarations: [
        AppComponent,
        MenuBarComponent,
        AccountListDialogComponent
    ],
    entryComponents: [
        AccountListDialogComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot()
    ],
    providers: [
        AccountsService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
