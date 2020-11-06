import { Book } from './../../model/book';
import { BookSell } from '../../model/book-sell.interface';
import { BookService } from './../../service/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-sell',
  templateUrl: './book-sell.component.html',
  styleUrls: ['./book-sell.component.css']
})
export class BookSellComponent implements OnInit {
  rowData: Book[];
  books: Book[]=[];
  bookList: BookSell[];
  model: Customer;
  keyword:string="";
  constructor(
    public service : BookService
  ) {}

  ngOnInit(): void {
    this.getDataList();
    this.model = new Customer();
  }
  getDataList() {
    this.service.getBook().subscribe(response => {
      this.rowData =  <Book[]>response;
    }, 
    error => {
       console.log(error);
    });
  }

  onSearch() {
    if(this.keyword.length>0){
      let bookdata = this.rowData.filter((item) => {
        return item.bookName.toLowerCase().includes(this.keyword.toLowerCase());
      });
      this.books =  bookdata
    }
    else
    {
      this.books=[];
    }
    this.keyword  ="";
}

  addtoCart(book: BookSell){
    book.sellqty = 1;
    this.model.books.push(book)
    this.totalprice();
    this.totalDiscount();

  } 
  removeCart(index: number){
    this.model.books.splice(index, 1)
    this.totalprice();
    this.totalDiscount();
  }
  totalprice(){
    let total = 0; this.model.total = 0;
    for(let data of this.model.books){
      debugger;
      total += data.sellqty * data.price;
    }
    this.model.total = total;
    console.log(this.model.total);
  }
  paidTotalCalculate(){
    if(this.model.paid > 0){
      this.model.due = this.model.total - this.model.paid;
      console.log(this.model.due);
    }
  }
  totalDiscount(){
    this.model.total = 0;
    this.totalprice();
    this.model.total -= (this.model.total * this.model.discount) / 100;
    console.log(this.model.total);
  }

}

export class Customer {
  constructor() {
    this.books = [];
    this.discount = 0;
  }
  id: number;
  name: string;
  address: string;
  mobile: string;
  total:number
  discount: number
  paid: number
  due: number
  remarks: string
  books: BookSell[]
}
