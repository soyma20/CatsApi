import {Component, Input, OnInit} from '@angular/core';

import {IBreed} from "../../interfaces/IBreed";
import {BreedService} from "../../services/breed.service";

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {
  breeds: IBreed[];

  @Input()
  search: string;

  constructor(private breedService: BreedService) {
  }

  ngOnInit(): void {
    this.breedService.getAllBreads().subscribe(value => {
      this.breeds = value

    })
  }
}
