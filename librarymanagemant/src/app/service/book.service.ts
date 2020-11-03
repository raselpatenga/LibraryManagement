import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService 
{
constructor(private Http: HttpClient) { }


getBook(): Observable<Book> {
    console.log(Book);
  return this.Http.get<Book>('http://localhost:25663/api/Book');
}

getBookById(id:number): Observable<Book> {
  return this.Http.get<Book>('http://localhost:25663/api/Book/'+id);
}

saveBook(model:Book) {
    console.log(model);
    return this.Http.post('http://localhost:25663/api/Book', model);
  }

  editBook(model:Book){
    console.log(model);
    return this.Http.put('http://localhost:25663/api/Book/'+model.bookId,model)
  }
}