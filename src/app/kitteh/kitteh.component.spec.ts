import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittehComponent } from './kitteh.component';

describe('KittehComponent', () => {
  let component: KittehComponent;
  let fixture: ComponentFixture<KittehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
