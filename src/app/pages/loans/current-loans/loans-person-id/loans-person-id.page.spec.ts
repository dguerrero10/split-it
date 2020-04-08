import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoansPersonIdPage } from './loans-person-id.page';

describe('LoansPersonIdPage', () => {
  let component: LoansPersonIdPage;
  let fixture: ComponentFixture<LoansPersonIdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansPersonIdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoansPersonIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
