import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextNotificationsPage } from './text-notifications.page';

describe('TextNotificationsPage', () => {
  let component: TextNotificationsPage;
  let fixture: ComponentFixture<TextNotificationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextNotificationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextNotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
