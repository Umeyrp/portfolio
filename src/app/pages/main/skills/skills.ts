import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-skills',
    imports: [TranslatePipe],
    templateUrl: './skills.html',
    styleUrl: './skills.scss',
})
export class Skills {
    skills = [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Git',
        'Scrum',
        'REST-API',
        'PHP',
        'Python',
        'Laravel',
    ];

    scrollToSection(id: string) {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
}
