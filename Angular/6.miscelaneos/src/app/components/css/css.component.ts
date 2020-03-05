import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-css",
  template: `
    <p>
      css Works!
    </p>
  `,
  styles: [
    `
      p {
        color: red !important;
        font-size: 20px !important;
      }
    `
  ]
})
export class CssComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
