import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  accounts = [];
  errorMessages = [];
  names = [];
  newAccount: { key: string, value: string };
  register = false;
  selectAccount: { key: string, value: number };
  selectedName: string;

  bookCoffee() {
    if (this.validate(this.selectedName, 'Please select your name from the list!')) {
      this.selectAccount = this.accounts.find(account => account.key === this.selectedName);
      this.selectAccount.value += 1;
    }
  }

  showBalance() {
    if (this.validate(this.selectedName, 'Please select your name from the list!')) {
      this.selectAccount = this.accounts.find(account => account.key === this.selectedName);
    }
  }

  switchView() {
    this.errorMessages = [];
    this.register = true;
    let key = Date.now().toString();
    this.newAccount = { key: key, value: null };
  }

  registerAccount() {
    if (this.validate(this.newAccount.value, 'Please enter your name!')) {
      this.accounts.push({ key: this.newAccount.key, value: 0 });
      this.names.push(this.newAccount);
      this.register = false;
    }
  }

  validate(object, errorMessages) {
    this.errorMessages = [];
    if (object) {
      return true;
    } else {
      this.errorMessages.push(errorMessages);
      return false;
    }
  }
}
