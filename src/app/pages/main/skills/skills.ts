import { Component } from '@angular/core';

@Component({
    selector: 'app-skills',
    imports: [],
    templateUrl: './skills.html',
    styleUrl: './skills.scss',
})
export class Skills {
    skills = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Git', 'Scrum', 'REST-API', "PHP", "Python", "Laravel"];
}
