import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TemplateComponent } from "./components/template/template.component";
import { DataComponent } from "./components/data/data.component";

@NgModule({
  declarations: [AppComponent, TemplateComponent, DataComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
