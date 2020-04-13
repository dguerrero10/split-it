import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoansPersonIdPaymentsComponent } from './loans-person-id-payments.component';

describe('LoansPersonIdPaymentsComponent', () => {
  let component: LoansPersonIdPaymentsComponent;
  let fixture: ComponentFixture<LoansPersonIdPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansPersonIdPaymentsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoansPersonIdPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
