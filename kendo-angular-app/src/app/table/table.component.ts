import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from '../http.service';
import { LksComponent } from '../lks/lks.component';
import { IntlService } from "@progress/kendo-angular-intl";

export interface JsonModel {
	birthDate: string;
}
export interface User {
	birthDate: Date;
}

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css'],
	providers: [HttpService],
})
export class TableComponent implements OnInit {
	public user!: User;
	public model: JsonModel = JSON.parse('{ "birthDate": "2017-06-30" }');
	public output: string = JSON.stringify(this.model);

	aboutStudent: any;
	imgUrl: any;
	activeStatus = 0;
	timeTable: any;
	constructor(private HttpService: HttpService,
		private cookieService: CookieService,
		private intl: IntlService) {
		this.HttpService.getInfo()
			.subscribe(
				(data: any) => {
					this.aboutStudent = data;
					this.imgUrl = `https://lks.volgatech.net/Images/StudentPhoto/${this.aboutStudent.lkPhoto}`;
					this.returnedData();
				},
				error => {
					// window.open('../', '_self');
				}
			);
	}


	ngOnInit(): void {
		this.user = this.parse(this.model);
	}
	public handleChange(value: Date) {
		this.model.birthDate = this.intl.formatDate(value, "dd-MM-yyyy");
		this.output = JSON.stringify(this.model);
	}
	private parse(json: any) {
		Object.keys(json).map((key) => {
			const date = new Date(json[key]);
			if (!isNaN(date.getTime())) {
				json[key] = date;
			}
		});
		console.log(json);

		return json;
	}
	gridData: any;
	returnedData() {
		let StartDate, EndDate;
		var today = new Date();
		var day = today.getDay();
		StartDate = new Date();
		EndDate = new Date();
		StartDate.setHours(0, 0, 0, 0);
		EndDate.setHours(0, 0, 0, 0);
		StartDate.setDate(today.getDate() - day + 1);
		EndDate.setDate(today.getDate() - day + 7);
		this.HttpService.timeTable(StartDate, EndDate)
			.subscribe(
				(data: any) => {
					this.timeTable = data;
					this.fillTable(this.timeTable)
				}
			)
	}

	fillTable(dataTable: any) {
		console.log(dataTable[0]);
			this.gridData = [
				{
					abc: '123',
					EmptyFirst: '',
					LessonsNumber: 1,
					Time: '08:00 - 09:35',
					TypeLesson: '',
					LessonName: dataTable[0].events[0].description,
					Teacher: dataTable[0].events[0].fio,
					Room: '',
					EmptySecond: '',
				},
				{
					EmptyFirst: '',
					LessonsNumber: 2,
					Time: '09:45 - 11:20',
					TypeLesson: '',
					LessonName: '',
					Teacher: dataTable[0].events[1].fio,
					Room: '',
					EmptySecond: '',
				},
				{
					EmptyFirst: '',
					LessonsNumber: 3,
					Time: '11:30 - 13:05',
					TypeLesson: '',
					LessonName: '',
					Teacher: dataTable[0].events[2].fio,
					Room: '',
					EmptySecond: '',
				},
				{
					EmptyFirst: '',
					LessonsNumber: 4,
					Time: '13:30 - 15:05',
					TypeLesson: '',
					LessonName: '',
					Teacher: dataTable[0].events[3].fio,
					Room: '',
					EmptySecond: '',
				},
				{
					EmptyFirst: '',
					LessonsNumber: 5,
					Time: '15:15 - 16:50',
					TypeLesson: '',
					LessonName: '',
					Teacher: '',
					Room: '',
					EmptySecond: '',
				},
				{
					EmptyFirst: '',
					LessonsNumber: 6,
					Time: '17:00 - 18:35',
					TypeLesson: '',
					LessonName: '',
					Teacher: '',
					Room: '',
					EmptySecond: '',
				},
				{
					EmptyFirst: '',
					LessonsNumber: 7,
					Time: '18:45 - 20:20',
					TypeLesson: '',
					LessonName: '',
					Teacher: '',
					Room: '',
					EmptySecond: '',
				},
				{
					EmptyFirst: '',
					LessonsNumber: 8,
					Time: '20:25 - 21:45',
					TypeLesson: '',
					LessonName: '',
					Teacher: '',
					Room: '',
					EmptySecond: '',
				},
			];	
	}
	logout() {
		return this.HttpService.logout();
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
