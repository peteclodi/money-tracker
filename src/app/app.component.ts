import {Component, OnInit} from '@angular/core';
import {AccountsService} from './accounts.service/accounts.service';
import {Account} from './account/account';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    constructor(private accountsService: AccountsService) {}

    ngOnInit() {
        this.accountsService.getAccounts().then(() => {
            this.accountsService.getCurrentAccount();
        });
    }
}
