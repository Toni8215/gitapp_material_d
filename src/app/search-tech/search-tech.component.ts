import { GitService } from './../git.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-tech',
  templateUrl: './search-tech.component.html',
  styleUrls: ['./search-tech.component.css']
})
export class SearchTechComponent implements OnInit {

  constructor(private gitservice: GitService) { }
  usertech = this.gitservice.tech;
  ngOnInit() {
  }

}
