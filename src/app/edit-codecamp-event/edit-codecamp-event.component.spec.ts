import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCodecampEventComponent } from './edit-codecamp-event.component';

describe('EditCodecampEventComponent', () => {
  let component: EditCodecampEventComponent;
  let fixture: ComponentFixture<EditCodecampEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCodecampEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCodecampEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
