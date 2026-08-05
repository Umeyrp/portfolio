import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../../services/language';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.html',
    styleUrl: './header.scss',
})
export class Header {
    protected languageService = inject(LanguageService);

    switchLanguage(language: string) {
        this.languageService.switchLanguage(language);
    }
}
