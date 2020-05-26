import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoiTacComponent } from './doi-tac.component';

describe('DoiTacComponent', () => {
  let component: DoiTacComponent;
  let fixture: ComponentFixture<DoiTacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoiTacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoiTacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
