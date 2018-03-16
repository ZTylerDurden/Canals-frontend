import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalDetailsComponent } from './canal-details.component';

describe('CanalDetailsComponent', () => {
  let component: CanalDetailsComponent;
  let fixture: ComponentFixture<CanalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
