import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSearchInputComponent } from './top-search-input.component';

describe('TopSearchInputComponent', () => {
  let component: TopSearchInputComponent;
  let fixture: ComponentFixture<TopSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSearchInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
