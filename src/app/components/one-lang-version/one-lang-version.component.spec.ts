import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLangVersionComponent } from './one-lang-version.component';

describe('OneLangVersionComponent', () => {
  let component: OneLangVersionComponent;
  let fixture: ComponentFixture<OneLangVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneLangVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneLangVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
