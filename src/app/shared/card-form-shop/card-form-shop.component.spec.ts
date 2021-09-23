import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormShopComponent } from './card-form-shop.component';

describe('CardFormShopComponent', () => {
  let component: CardFormShopComponent;
  let fixture: ComponentFixture<CardFormShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFormShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
