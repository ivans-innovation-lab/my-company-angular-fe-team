import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NxModule } from "@nrwl/nx";
import { TeamModule } from "@my-company-frontend/team";

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), TeamModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
