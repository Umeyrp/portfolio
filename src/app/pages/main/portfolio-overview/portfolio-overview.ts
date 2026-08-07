import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-portfolio-overview',
    imports: [TranslatePipe],
    templateUrl: './portfolio-overview.html',
    styleUrl: './portfolio-overview.scss',
})
export class PortfolioOverview {}
