import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface ContactPayload {
    name: string;
    email: string;
    message: string;
}

export interface ContactResponse {
    success: boolean;
    error?: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
    private http = inject(HttpClient);
    private readonly endpoint = 'https://muhammedkemiksiz.de/send-mail.php';

    send(payload: ContactPayload) {
        return firstValueFrom(
            this.http.post<ContactResponse>(this.endpoint, payload),
        );
    }
}