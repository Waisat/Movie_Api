import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestDetailComponent } from './newest-detail.component';

describe('NewestDetailComponent', () => {
  let component: NewestDetailComponent;
  let fixture: ComponentFixture<NewestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
