import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCodecampEventComponent } from './create-codecamp-event.component';

describe('CreateCodecampEventComponent', () => {
  let component: CreateCodecampEventComponent;
  let fixture: ComponentFixture<CreateCodecampEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCodecampEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCodecampEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
