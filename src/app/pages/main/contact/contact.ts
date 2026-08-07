import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-contact',
    imports: [RouterLink, TranslatePipe],
    templateUrl: './contact.html',
    styleUrl: './contact.scss',
})
export class Contact {
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
}
