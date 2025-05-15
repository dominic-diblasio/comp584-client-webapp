import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProfilesComponent } from './all-profiles.component';

describe('AllProfilesComponent', () => {
  let component: AllProfilesComponent;
  let fixture: ComponentFixture<AllProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllProfilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
