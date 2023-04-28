import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLangVersionComponent } from './all-lang-version.component';

describe('AllLangVersionComponent', () => {
  let component: AllLangVersionComponent;
  let fixture: ComponentFixture<AllLangVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLangVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLangVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
