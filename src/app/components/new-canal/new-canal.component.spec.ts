import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCanalComponent } from './new-canal.component';

describe('NewCanalComponent', () => {
  let component: NewCanalComponent;
  let fixture: ComponentFixture<NewCanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
