import {Component, OnInit, OnDestroy} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Subscription} from 'rxjs';
import {AccountsService} from '../accounts.service/accounts.service';
import {Account} from '../account/account';

@Component({
    selector: 'account-list-dialog',
    templateUrl: './account-list-dialog.component.html',
    styleUrls: ['./account-list-dialog.component.scss']
})

export class AccountListDialogComponent implements OnInit, OnDestroy {
    private selectedAccount: Account;
    private accounts: Array<Account>;
    private accountsSubscription: Subscription;
    private currentAccountSubscription: Subscription;

    constructor(private accountsService: AccountsService, private mdDialogRef: MdDialogRef<AccountListDialogComponent>) { }

    ngOnInit() {
        this.accountsSubscription = this.accountsService.accountsSubject.subscribe(accounts => {
            this.accounts = accounts;

            this.currentAccountSubscription = this.accountsService.currentAccountSubject.subscribe(currentAccount => {
                this.selectedAccount = currentAccount;
            });
        });
    }

    ngOnDestroy() {
        this.accountsSubscription.unsubscribe();
        this.currentAccountSubscription.unsubscribe();
    }

    selectAccount() {
        this.mdDialogRef.close(this.selectedAccount);
    }
}
