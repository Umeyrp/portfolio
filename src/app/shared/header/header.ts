import { Component, inject, input, signal } from '@angular/core';
import { LanguageService } from '../../services/language';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    imports: [TranslatePipe],
    templateUrl: './header.html',
    styleUrl: './header.scss',
})
export class Header {
    showLanguageButtons = input(true);
    protected languageService = inject(LanguageService);

    isMenuOpen = signal(false);

    switchLanguage(language: string) {
        this.languageService.switchLanguage(language);
    }

    toggleMenu() {
        this.isMenuOpen.update((open) => !open);
    }

    scrollToSection(id: string) {
        this.isMenuOpen.set(false);
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }, 50);
    }
}
