import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { Account } from '../account/account';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountsService {
    public currentAccountSubject: BehaviorSubject<Account>;
    public accountsSubject: BehaviorSubject<Array<Account>>;

    constructor(private http: Http) {
        this.currentAccountSubject = new BehaviorSubject<Account>(undefined);
        this.accountsSubject = new BehaviorSubject<Array<Account>>(undefined);
    }

    getCurrentAccount() {
        return this.http.get('http://localhost:3000/selected-account').toPromise()
            .then(res => {
                let accountId = res.json().id;
                return this.accountsSubject.getValue().filter(account => account.id === accountId)[0];
            }).catch(error => {
                return this.accountsSubject.getValue()[0];
            }).then(account => {
                this.currentAccountSubject.next(account);
                return account;
            });
    }

    setCurrentAccount(account: Account) {
        this.currentAccountSubject.next(account);
        return this.http.post('http://localhost:3000/selected-account', {
            "id": account.id
        }, new RequestOptions({
            headers: new Headers({'Content-Type': 'application/json'})
        }));
    }

    getAccounts() {
        return this.http.get('http://localhost:3000/accounts').toPromise()
            .then(res => {
                let accounts = res.json() as Array<Account>;
                this.accountsSubject.next(accounts);
                return accounts;
            });
    }

    setAccounts(accounts: Account[]) {
        return this.http.post('http://localhost:3000/accounts', accounts).toPromise()
            .then(res => {
                let accounts = res.json() as Array<Account>;
                this.accountsSubject.next(accounts);
                return accounts;
            });
    }
}
