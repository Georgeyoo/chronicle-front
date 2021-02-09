import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaDlButtonComponent } from './media-dl-button.component';

describe('MediaDlButtonComponent', () => {
  let component: MediaDlButtonComponent;
  let fixture: ComponentFixture<MediaDlButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaDlButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaDlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
