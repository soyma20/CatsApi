import {Component, Input} from '@angular/core';
import {IImage} from "../../interfaces/IImage";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  @Input()
  image :IImage;
}
