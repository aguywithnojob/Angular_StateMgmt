import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-stats',
  templateUrl: './dashboard-stats.component.html',
  styleUrls: ['./dashboard-stats.component.scss']
})
export class DashboardStatsComponent implements OnInit {

  @Input() public showDashboardData: any;
  constructor() { }

  ngOnInit(): void {
    console.log('ngoninti >>> ', this.showDashboardData)
  }

}
