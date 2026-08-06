import { Component, inject, input, signal } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.html',
    styleUrl: './header.scss',
})
export class Header {
    showLanguageButtons = input(true);
    protected languageService = inject(LanguageService);

    switchLanguage(language: string) {
        this.languageService.switchLanguage(language);
    }
}
