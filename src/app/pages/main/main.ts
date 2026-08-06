import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { ArrowRight } from './arrow-right/arrow-right';
import { Skills } from './skills/skills';
import { ArrowLeft } from './arrow-left/arrow-left';
import { PortfolioOverview } from './portfolio-overview/portfolio-overview';
import { References } from './references/references';
import { Footer } from '../../shared/footer/footer';
import { Contact } from './contact/contact';

@Component({
    selector: 'app-main',
    imports: [
        Header,
        Hero,
        AboutMe,
        ArrowRight,
        Skills,
        ArrowLeft,
        PortfolioOverview,
        References,
        Contact,
        Footer,
    ],
    templateUrl: './main.html',
    styleUrl: './main.scss',
})
export class Main {}
