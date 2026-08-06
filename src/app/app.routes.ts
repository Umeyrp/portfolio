import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { LegalNotice } from './pages/legal-notice/legal-notice';

export const routes: Routes = [
    { path: 'privacy-policy', component: PrivacyPolicy },
    { path: 'legal-notice', component: LegalNotice },
    { path: '**', component: Main },
];
