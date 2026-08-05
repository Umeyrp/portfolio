import { inject, Service, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Service()
export class LanguageService {
    private translate = inject(TranslateService);

    currentLanguage = this.translate.currentLang;

    switchLanguage(language: string) {
        this.translate.use(language);
    }
}
