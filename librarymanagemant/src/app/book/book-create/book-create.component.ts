import { BookService } from './../../service/book.service';
import { Book } from '../../model/book';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  model : Book

  constructor(
    private toastr: ToastrService,
    public service: BookService
  ) { }

  ngOnInit(): void {
    this.model = new Book();
  }
  save() {
    this.service.saveBook(this.model).subscribe(response=>{
      console.log(response);
    })
    this.toastr.success("Saved Successfully")
  }
}
