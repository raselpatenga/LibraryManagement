import { BookService } from './../../service/book.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/model/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm : FormGroup; model : Book
   
  constructor(
    private fb: FormBuilder, 
    public service: BookService, 
    public route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      bookId: new FormControl('',Validators.required),
      bookName: new FormControl('',Validators.required),
      authorName: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required)
    })
    if(this.route.snapshot.params.id>0)
      this.getBookById(this.route.snapshot.params.id) ;
  }
  getBookById(id:number) {
    this.service.getBookById(id).subscribe(response => {
      var data = response;
      // debugger;
      console.log(response);
     this.bookForm.setValue(response)
    //this.model= response;
      // console.log(response);
    }, error => {
       console.log(error);
    });
  }

  UpdateBook() {
    console.log(this.bookForm.value);
    this.model = Object.assign({}, this.bookForm.value);
   var data= this.service.editBook(this.model).subscribe(
    () => {
      console.log('Book Update Successfully');
      this.bookForm.reset();
    }, error => {
      // console.log(error);
    });
      //  console.log(data);
    }

}
