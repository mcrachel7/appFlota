import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoComponent } from './vehiculo.component';

describe('VehiculoComponent', () => {
  let component: VehiculoComponent;
  let fixture: ComponentFixture<VehiculoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});