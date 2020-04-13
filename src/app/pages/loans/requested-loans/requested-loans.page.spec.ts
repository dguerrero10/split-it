import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestedLoansPage } from './requested-loans.page';

describe('RequestedLoansPage', () => {
  let component: RequestedLoansPage;
  let fixture: ComponentFixture<RequestedLoansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedLoansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestedLoansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
