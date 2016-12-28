import {Component, OnInit, OnDestroy} from '@angular/core';
import {MdDialog} from '@angular/material';
import {AccountListDialogComponent} from '../account-list-dialog/account-list-dialog.component';
import {Subscription} from 'rxjs';
import {AccountsService} from '../accounts.service/accounts.service';

@Component({
    selector: 'menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.scss']
})

export class MenuBarComponent implements OnInit, OnDestroy {
    private selectedAccount: string;
    private subscription: Subscription;

    constructor(private accountsService: AccountsService, public mdDialog: MdDialog) { }

    ngOnInit() {

    }

    ngOnDestroy() {
        if(this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    goHome() {
        console.log('Go Home!');
    }

    pickAccount() {
        this.subscription = this.mdDialog.open(AccountListDialogComponent, {
            height: ((3/10) *100) + '%'
        }).afterClosed().subscribe(newAccount => {
            if(newAccount) {
                this.selectedAccount = newAccount;
                this.accountsService.setCurrentAccount(newAccount);
            }
        });
    }

    accountSettings() {
        console.log('Account Settings');
    }
}
