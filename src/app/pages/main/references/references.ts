import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-references',
    imports: [TranslatePipe],
    templateUrl: './references.html',
    styleUrl: './references.scss',
})
export class References {}
