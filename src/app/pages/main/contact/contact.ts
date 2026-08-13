import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { form, FormField, required, email, submit } from '@angular/forms/signals';
import { ContactService } from '../../../services/contact-service';

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
    private contactService = inject(ContactService);

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

    protected submitStatus = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    onSubmit(event: Event) {
        event.preventDefault();
        submit(this.contactForm, {
            action: async () => {
                this.submitStatus.set('sending');
                try {
                    const { name, email, message } = this.contactModel();
                    const response = await this.contactService.send({ name, email, message });

                    if (response.success) {
                        this.submitStatus.set('success');
                        this.contactModel.set({
                            name: '',
                            email: '',
                            message: '',
                            privacyAccepted: false,
                        });
                        this.contactForm().reset();
                    } else {
                        this.submitStatus.set('error');
                    }
                } catch {
                    this.submitStatus.set('error');
                }
            },
        });
    }
}
