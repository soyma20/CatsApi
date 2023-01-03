import {Component, Input} from '@angular/core';
import {IBreed} from "../../interfaces/IBreed";

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent {
  @Input()
  breed :IBreed;
}
