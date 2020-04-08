import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentLoansPage } from './current-loans.page';

describe('CurrentLoansPage', () => {
  let component: CurrentLoansPage;
  let fixture: ComponentFixture<CurrentLoansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLoansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentLoansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
