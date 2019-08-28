import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-app-style';

  changeTheme(theme) {
    let fontColor;
    let linkColor;
    let primaryColor;
    let secondaryColor;

    switch (theme) {
      case 'theme1':
        fontColor = '#3abcd0';
        linkColor = '#1b1b1b';
        primaryColor = '#003366';
        secondaryColor = '#ffd700';
        break;
      case 'theme2':
        fontColor = '#f1ad6c';
        linkColor = '#e9c349';
        primaryColor = '#4c4c4c';
        secondaryColor = '#e9c349';
        break;
      case 'theme3':
        fontColor = '#6b597c';
        linkColor = '#b4b9cc';
        primaryColor = '#ee5f82';
        secondaryColor = '#b4b9cc';
        break;
      case 'theme4':
        fontColor = '#9d2a2d';
        linkColor = '#fef4ad';
        primaryColor = '#345c66';
        secondaryColor = '#fef4ad';
        break;
      default:
        fontColor = '#222';
        linkColor = '#63d491';
        primaryColor = '#132f4d';
        secondaryColor = '#63d491';
        break;
    }

    document.body.style.setProperty('--font-color', fontColor);
    document.body.style.setProperty('--link-color', linkColor);
    document.body.style.setProperty('--primary-color', primaryColor);
    document.body.style.setProperty('--secondary-color', secondaryColor);
  }
}
