import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchPeoplePage } from './search-people.page';

describe('SearchPeoplePage', () => {
  let component: SearchPeoplePage;
  let fixture: ComponentFixture<SearchPeoplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPeoplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPeoplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
