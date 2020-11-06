import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSellComponent } from './book-sell.component';

describe('BookSellComponent', () => {
  let component: BookSellComponent;
  let fixture: ComponentFixture<BookSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
