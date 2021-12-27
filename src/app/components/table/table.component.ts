import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { ApiServiceService } from '../api-service.service';
import { Student } from "../../student";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  searchValue: any;
  students: any;
  constructor(private httpClient: HttpClient,  ) { }

  ngOnInit() {
     this.httpClient.get("/assets/Students.json").subscribe(
      data => this.students = data
     )
    // result.subscribe(data=>console.log(data));

    // result.subscribe((data => this.students =data ));    
  }

  

}
