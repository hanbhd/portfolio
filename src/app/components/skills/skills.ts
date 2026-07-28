import { Component } from '@angular/core';

interface Skill {
  name: string;
  iconClass: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly skills: Skill[] = [
    { name: 'HTML', iconClass: 'devicon-html5-plain colored' },
    { name: 'CSS', iconClass: 'devicon-css3-plain colored' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
    { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
    { name: 'Angular', iconClass: 'devicon-angularjs-plain colored' },
    { name: 'Python', iconClass: 'devicon-python-plain colored' },
    { name: 'C', iconClass: 'devicon-c-plain colored' },
    { name: 'C++', iconClass: 'devicon-cplusplus-plain colored' },
    { name: 'Java', iconClass: 'devicon-java-plain colored' },
    { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
  ];
}
