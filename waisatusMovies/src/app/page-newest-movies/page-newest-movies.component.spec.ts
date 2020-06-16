import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewestMoviesComponent } from './page-newest-movies.component';

describe('PageNewestMoviesComponent', () => {
  let component: PageNewestMoviesComponent;
  let fixture: ComponentFixture<PageNewestMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewestMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewestMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
