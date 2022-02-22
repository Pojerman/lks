import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from '../http.service';
import { User } from './user';




@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css'],
	providers: [HttpService]
})
export class FormComponent implements OnInit {
	user: User = new User("", "");
	activeStatus = 0;
	studentId: any;
	constructor(private HttpService: HttpService,
		private cookieService: CookieService) { }
	onSubmit(user: User) {
		this.HttpService.postData(user)
			.subscribe(
				(data: any) => {
					this.cookieService.set('accessToken', data.accessToken);
					return this.HttpService.getProfiles(this.studentId);
				},
				error => {
					this.activeStatus = 1;
				}
			)
	}

	ngOnInit(): void {
	}
}
