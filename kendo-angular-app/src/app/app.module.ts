import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IntlModule } from "@progress/kendo-angular-intl";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { GridModule } from "@progress/kendo-angular-grid";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { LksComponent } from './lks/lks.component';
import { TableComponent } from './table/table.component';
;



@NgModule({
	declarations: [
		AppComponent,
		FormComponent,
		LksComponent,
		TableComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		IntlModule,
		LabelModule,
		ButtonsModule,
		DateInputsModule,
		GridModule,
		InputsModule
	],
	providers: [CookieService],
	bootstrap: [AppComponent],
})
export class AppModule { }
