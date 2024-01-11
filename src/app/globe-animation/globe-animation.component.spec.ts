import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobeAnimationComponent } from './globe-animation.component';

describe('GlobeAnimationComponent', () => {
  let component: GlobeAnimationComponent;
  let fixture: ComponentFixture<GlobeAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobeAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
