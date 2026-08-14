import { Service, inject, signal, DOCUMENT, effect } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Service()
export class LanguageService {
    private translate = inject(TranslateService);
    private document = inject(DOCUMENT);
    currentLanguage = signal<string>(
        localStorage.getItem('currentLanguage') ??
            this.translate.currentLang() ??
            this.translate.getBrowserLang() ??
            'en',
    );

    constructor() {
        this.translate.use(this.currentLanguage());
        this.document.documentElement.lang = this.currentLanguage();

        this.translate.onLangChange.subscribe((event) => {
            this.currentLanguage.set(event.lang);
            this.document.documentElement.lang = event.lang;
        });

        effect(() => {
            localStorage.setItem("currentLanguage", this.currentLanguage());
        });
    }

    switchLanguage(language: string) {
        this.translate.use(language);
    }
}
