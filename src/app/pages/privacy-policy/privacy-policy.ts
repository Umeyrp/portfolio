import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-privacy-policy',
    imports: [Header, Footer, TranslatePipe],
    templateUrl: './privacy-policy.html',
    styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {}
