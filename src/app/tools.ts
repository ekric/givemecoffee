import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Validate } from './model/validate.model';

export class Tools {
  public static translate: TranslateService;

  static getTranslation(key: string): Observable<string> {
    return Tools.translate.get(key).map(res => res);
  }

  static validate(validates: Validate[]) {
    let errorMessages = null;
    for (let validate of validates) {
      if (!validate.object) {
        if (!errorMessages) {
          errorMessages = [];
        }
        Tools.translate.get(validate.errorMessage).subscribe((res: string) => {
          errorMessages.push(res);
        });
      }
    }
    return errorMessages;
  }
}
