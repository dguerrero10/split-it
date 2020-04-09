import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanTypeLongPage } from './loan-type-long.page';

describe('LoanTypeLongPage', () => {
  let component: LoanTypeLongPage;
  let fixture: ComponentFixture<LoanTypeLongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanTypeLongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanTypeLongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
