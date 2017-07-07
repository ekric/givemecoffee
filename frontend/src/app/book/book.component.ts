import { Component } from '@angular/core';

import { Account } from '../model/account.model';
import { AccountStub } from '../model/account.stub';
import { Tools } from '../tools';
import { Validate } from '../model/validate.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})

export class BookComponent {
  accounts: Account[] = [];
  errorMessages = [];
  selectedAccount: Account;
  successMessages = [];

  constructor() {
    this.accounts = AccountStub.accounts;
  }

  bookCoffee() {
    this.successMessages = [];
    this.errorMessages = Tools.validate([new Validate(this.selectedAccount, 'ERROR_BOOK_NAME_EMPTY')]);
    if (!this.errorMessages) {
      this.selectedAccount = this.accounts.find(account => account.id === this.selectedAccount.id);
      this.selectedAccount.balance += 1;
      Tools.getTranslation('SUCCESS_BOOKED').subscribe(result => {
        this.successMessages.push(result);
      });
    }
  }
}
