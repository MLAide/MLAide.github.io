import { Component } from '@angular/core';
import * as FontAwesomeBrands from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webpage';
  faGithub = FontAwesomeBrands.faGithub;
  faSlack = FontAwesomeBrands.faSlack;
  faTwitter = FontAwesomeBrands.faTwitter;
}
