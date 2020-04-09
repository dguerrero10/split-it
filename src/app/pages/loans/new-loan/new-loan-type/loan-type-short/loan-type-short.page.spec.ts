import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanTypeShortPage } from './loan-type-short.page';

describe('LoanTypeShortPage', () => {
  let component: LoanTypeShortPage;
  let fixture: ComponentFixture<LoanTypeShortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanTypeShortPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanTypeShortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
