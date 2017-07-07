import { Component } from '@angular/core';

import { Account } from "../model/account.model";
import { AccountStub } from "../model/account.stub";
import { Router } from '@angular/router';
import { Tools } from '../tools';
import { Validate } from '../model/validate.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  newAccount: Account = new Account(Date.now().toString(), null, null, 0);
  errorMessages = [];
  successMessages = [];

  constructor(private router: Router) {
  }

  registerAccount() {
    this.errorMessages = Tools.validate([new Validate(this.newAccount.name, 'ERROR_ACCOUNT_NAME_EMPTY'), new Validate(this.newAccount.email, 'ERROR_ACCOUNT_EMAIL_EMPTY')]);
    if (!this.errorMessages) {
      AccountStub.accounts.push(this.newAccount);
      this.router.navigate(['/book']);
    }
  }
}
