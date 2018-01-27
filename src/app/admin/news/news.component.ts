import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { NewsVO } from '../../domain/news-vo';
import { PageVO } from '../../domain/page-vo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsList:Array<NewsVO>;
  page = new PageVO(0, 5, 0);

  constructor(private adminService: AdminService, private router: Router) {
  }

  ngOnInit() {
    this.findNews()
  }

  findNews() {
    const params = {
      start_index: this.page.pageIndex * this.page.pageSize,
      page_size: this.page.pageSize
    }

    this.adminService.findNews(params)
    .subscribe((body) => {
      this.newsList = body['data'];
      this.page.totalCount = body['total'];
      console.log(this.newsList);
    });
  }

  pageChanged(event: any) {
    console.log(event);
    this.page.pageIndex = event['pageIndex'];
    this.page.pageSize = event['pageSize'];
    this.findNews();
  }

  gotoView(news: NewsVO) {
    this.router.navigateByUrl(`/admin/news/view/${news.news_id}`);
    //this.router.navigate([`/admin/news/view/`, news.news_id]);
  }
}