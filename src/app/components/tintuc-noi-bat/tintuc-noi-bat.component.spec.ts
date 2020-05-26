import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TintucNoiBatComponent } from './tintuc-noi-bat.component';

describe('TintucNoiBatComponent', () => {
  let component: TintucNoiBatComponent;
  let fixture: ComponentFixture<TintucNoiBatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TintucNoiBatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TintucNoiBatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
