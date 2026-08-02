import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';

@Component({
    selector: 'app-main',
    imports: [Header, Hero, AboutMe],
    templateUrl: './main.html',
    styleUrl: './main.scss',
})
export class Main {}
