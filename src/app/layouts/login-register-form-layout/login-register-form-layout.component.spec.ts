import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterFormLayoutComponent } from './login-register-form-layout.component';

describe('LoginRegisterFormLayoutComponent', () => {
  let component: LoginRegisterFormLayoutComponent;
  let fixture: ComponentFixture<LoginRegisterFormLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegisterFormLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRegisterFormLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
