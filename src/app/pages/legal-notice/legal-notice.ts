import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-legal-notice',
    imports: [Header, Footer, TranslatePipe],
    templateUrl: './legal-notice.html',
    styleUrl: './legal-notice.scss',
})
export class LegalNotice {}
