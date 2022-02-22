import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from '../http.service';


@Component({
	selector: 'app-lks',
	templateUrl: './lks.component.html',
	styleUrls: ['./lks.component.css'],
	providers: [HttpService]
})
export class LksComponent implements OnInit {

	aboutStudent: any;
	imgUrl: any;
	activeStatus = 0;
	constructor(private HttpService: HttpService,
		private cookieService: CookieService) {
		this.HttpService.getInfo()
			.subscribe(
				(data: any) => {
					this.aboutStudent = data;
					this.imgUrl = `https://lks.volgatech.net/Images/StudentPhoto/${this.aboutStudent.lkPhoto}`;
				},
				error => {
					// window.open('../', '_self');
				}
			)
	}


	logout() {
		return this.HttpService.logout();
	}
	ngOnInit(): void {

	}

	burger() {
		if (this.activeStatus == 1) {
			this.activeStatus = 0;
		} else {
			this.activeStatus = 1;
		}
	}
	close() {
		if (this.activeStatus == 1) {
			this.activeStatus = 0;
		}
	}
}

