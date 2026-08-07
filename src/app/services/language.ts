import { Service, inject, signal, DOCUMENT } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Service()
export class LanguageService {
    private translate = inject(TranslateService);
    private document = inject(DOCUMENT);
    currentLanguage = signal<string>(
        this.translate.currentLang() ?? this.translate.getBrowserLang() ?? 'en',
    );
    constructor() {
        this.translate.onLangChange.subscribe((event) => {
            this.currentLanguage.set(event.lang);
            this.document.documentElement.lang = event.lang;
        });
    }

    switchLanguage(language: string) {
        this.translate.use(language);
    }
}
