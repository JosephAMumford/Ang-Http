import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../http-client.service';
import { Mydata } from '../mydata';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  constructor(private dataService: HttpClientService) { }

  data: Mydata[] = [];

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.dataService.get().subscribe(
      data => this.data = data
    )
  }
}
