import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceFormComponent } from './device-form.component';

describe('DeviceFormComponent', () => {
  let component: DeviceFormComponent;
  let fixture: ComponentFixture<DeviceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [DeviceFormComponent]
});
    fixture = TestBed.createComponent(DeviceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
