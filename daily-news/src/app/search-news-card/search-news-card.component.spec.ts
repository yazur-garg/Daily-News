import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNewsCardComponent } from './search-news-card.component';

describe('SearchNewsCardComponent', () => {
  let component: SearchNewsCardComponent;
  let fixture: ComponentFixture<SearchNewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchNewsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
