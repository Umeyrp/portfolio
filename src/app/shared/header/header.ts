import { Component, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    imports: [TranslatePipe, RouterLink],
    templateUrl: './header.html',
    styleUrl: './header.scss',
})
export class Header {
    showLanguageButtons = input(true);
    protected languageService = inject(LanguageService);
    private router = inject(Router);

    isMenuOpen = signal(false);

    switchLanguage(language: string) {
        this.languageService.switchLanguage(language);
    }

    toggleMenu() {
        this.isMenuOpen.update((open) => !open);
    }

    closeMenu() {
        this.isMenuOpen.set(false);
    }

    async goToSection(id: string) {
        this.isMenuOpen.set(false);

        const onLegalPage = ['/privacy-policy', '/legal-notice'].includes(this.router.url);

        if (onLegalPage) {
            await this.router.navigate(['/']);
        }

        this.scrollToSection(id);
    }

    private scrollToSection(id: string) {
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }, 50);
    }
}