import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  form: FormGroup;

  @Output()
  inputEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    this._createForm()
  }

  _createForm(): void {
    this.form = new FormGroup({
      input: new FormControl(),
    })
  }

  emit() {
    this.inputEmitter.emit(this.form.getRawValue().input)
  }
}
