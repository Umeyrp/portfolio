import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { form, FormField, required, email, submit } from '@angular/forms/signals';

interface ContactData {
    name: string;
    email: string;
    message: string;
    privacyAccepted: boolean;
}

@Component({
    selector: 'app-contact',
    imports: [RouterLink, TranslatePipe, FormField],
    templateUrl: './contact.html',
    styleUrl: './contact.scss',
})
export class Contact {
    protected contactModel = signal<ContactData>({
        name: '',
        email: '',
        message: '',
        privacyAccepted: false,
    });

    protected contactForm = form(this.contactModel, (schemaPath) => {
        required(schemaPath.name, { message: 'app.nameRequired' });
        required(schemaPath.email, { message: 'app.emailRequired' });
        email(schemaPath.email, { message: 'app.validEmail' });
        required(schemaPath.message, { message: 'app.messageRequired' });
        required(schemaPath.privacyAccepted, { message: 'app.privacyRequired' });
    });

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    onSubmit(event: Event) {
        event.preventDefault();
        submit(this.contactForm, {
            action: async () => {
                console.log('Sending:', this.contactModel());
                // TODO: HTTP-Aufruf
            },
        });
    }
}
