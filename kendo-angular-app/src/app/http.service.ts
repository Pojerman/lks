import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { User } from "./form/user";

@Injectable()
export class HttpService {
	
	constructor(private http: HttpClient, private cookieService: CookieService)  { }
	
	postData(user: User) {
		return this.http.post(`https://api.volgatech.net/api/Auth/GetToken`, user);
	}
	
	
	myHeaders = new HttpHeaders({ 'Authorization': `Bearer ` + this.cookieService.get('accessToken') });
	getProfiles(studentId: any) {
		const myHeaders = new HttpHeaders({ 'Authorization': `Bearer ` + this.cookieService.get('accessToken') });
		this.http.get('https://api.volgatech.net/api/Student/GetProfiles', { headers: myHeaders })
			.subscribe(
				(data: any) => {
					studentId = data;			
					this.cookieService.set('studentId', studentId[0].studentId);
					window.open('../lks', '_self');
				},
				error => {
					console.log('false');
				});
	}

	getInfo() {
		return this.http.get(`https://api.volgatech.net/api/Student/GetInfo/${this.cookieService.get('studentId')}
		`, { headers: this.myHeaders});
	}

	logout() {
		this.cookieService.delete('accessToken');
		this.cookieService.delete('studentthiId');
	}
	timeTable(StartDate: any,EndDate: any) {
		return this.http.get(`https://api.volgatech.net/api/Calendar/${this.cookieService.get('studentId')}/${StartDate.toLocaleDateString()}/${EndDate.toLocaleDateString()}`, { headers: this.myHeaders})
	}
}