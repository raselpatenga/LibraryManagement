import { BookService } from './../../service/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  rowData: any = [];
  searchText: string;

  constructor(public service: BookService ) { }

  ngOnInit() {
    this.getDataList();
  }

  getDataList() {
    this.service.getBook().subscribe(response => {
      this.rowData = response;
      console.log(this.rowData);
    }, error => {
       console.log(error);
    });
  }

  // Search(){
  //   this.getDataList = this.getDataList.filter(res=>{
  //     return res.searchText.toLo
  //   })
  // }

}
