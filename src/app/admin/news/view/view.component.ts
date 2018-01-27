import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../admin.service';
import { NewsVO } from '../../../domain/news-vo';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  news: NewsVO;
  constructor(private route: ActivatedRoute,private adminService: AdminService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      console.log(param);
      this.adminService.findOneNews(+param['news_id'])
        .subscribe((body: NewsVO) => this.news = body);
    });
  }
}
