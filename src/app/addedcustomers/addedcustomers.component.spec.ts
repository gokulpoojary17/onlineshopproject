import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedcustomersComponent } from './addedcustomers.component';

describe('AddedcustomersComponent', () => {
  let component: AddedcustomersComponent;
  let fixture: ComponentFixture<AddedcustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddedcustomersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddedcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
