import {Component, OnInit} from '@angular/core';
import {ImageService} from "../../services/image.service";
import {IImage} from "../../interfaces/IImage";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit{
  images: IImage[]

  constructor(private imageService:ImageService) {
  }

  ngOnInit(): void {
    this.imageService.getImages().subscribe(value => this.images = value)
  }


}
