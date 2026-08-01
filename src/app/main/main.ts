import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';

@Component({
    selector: 'app-main',
    imports: [Header, Hero],
    templateUrl: './main.html',
    styleUrl: './main.scss',
})
export class Main {}
