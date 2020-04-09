import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewLoanTypePage } from './new-loan-type.page';

describe('NewLoanTypePage', () => {
  let component: NewLoanTypePage;
  let fixture: ComponentFixture<NewLoanTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLoanTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewLoanTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
