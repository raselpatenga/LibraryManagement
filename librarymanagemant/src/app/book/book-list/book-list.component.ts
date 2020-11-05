import { BookService } from './../../service/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  
  searchText: string;

  columnDefs = [
    { headerName: 'Id',  field: 'bookId', filter: true, width:250 },
    { headerName: 'Book Name', field: 'bookName', filter: true, width:300 },
    { headerName: 'Author Name', field: 'authorName', filter: true, width:300},
    { headerName: 'Price', field: 'price', filter: true, width:250},
    { headerName: 'Action', filter: true, width:250},
];
rowData: any = [];
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
