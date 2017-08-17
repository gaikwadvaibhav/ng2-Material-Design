import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  template: `
    <p>
      one Works!
    </p>
  `,
  styles: []
})
export class OneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
