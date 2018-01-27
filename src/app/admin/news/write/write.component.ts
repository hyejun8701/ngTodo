import { Component, OnInit } from '@angular/core';
import {NewsVO} from "../../../domain/news-vo";
import {ResultVO} from "../../../domain/result-vo";
import {AdminService} from "../../admin.service";
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {
  news = new NewsVO();
  fileList: FileList;

  constructor(private adminService: AdminService, private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
  }

  addNews() {
    this.adminService.addNews(this.news)
      .subscribe((body: ResultVO) => {
        console.log(body);
        if (body.result === 0) {
          this.snackBar.open('글쓰기가 성공하였습니다.', null, {duration: 2000});
          this.router.navigateByUrl('/admin/news');
        } else {
          this.snackBar.open(body.value, null, {duration: 2000});
        }
      });
  }

  fileChange(event: any) {
    this.fileList = event.target.files;
    console.log(this.fileList);
    // show thumbnail
    const reader = new FileReader();
    reader.readAsDataURL((this.fileList[0]));
    reader.onload = () => {
      // this.thumbnailSrc = reader.result;
      this.imageUpload();
    };
  }

  imageUpload() {
    const formData: FormData = new FormData();
    if (this.fileList && this.fileList.length > 0) {
    const file: File = this.fileList[0];
    formData.append('file', file, file.name);
    }

    this.adminService.imageUpload(formData)
    .subscribe(body => {
    if (body['result'] === 0) {
    // 이미지 경로를 editor에 추가한다.
    console.log(body['value']);
    if (this.news.content) {
    this.news.content += `<img src="http://www.javabrain.kr${body['value']}
    style="max-width: 100%;"">`;
    } else {
    this.news.content = `<img src="http://www.javabrain.kr${body['value']}"
    style="max-width: 100%;">`;
    }
    }
    });
    }
  }
}
