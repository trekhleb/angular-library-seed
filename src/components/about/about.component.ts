import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about',
  styleUrls: ['./about.component.scss'],
  templateUrl: './about.component.html'
})
export class AboutComponent {

  @Input() public title: string;
  @Input() public details: string;

}
