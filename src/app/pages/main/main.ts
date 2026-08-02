import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { ArrowRight } from './arrow-right/arrow-right';
import { Skills } from './skills/skills';
import { ArrowLeft } from './arrow-left/arrow-left';
import { PortfolioOverview } from './portfolio-overview/portfolio-overview';

@Component({
    selector: 'app-main',
    imports: [Header, Hero, AboutMe, ArrowRight, Skills, ArrowLeft, PortfolioOverview],
    templateUrl: './main.html',
    styleUrl: './main.scss',
})
export class Main {}
