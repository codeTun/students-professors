import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProfessorComponent } from './navbar-professor.component';

describe('NavbarProfessorComponent', () => {
  let component: NavbarProfessorComponent;
  let fixture: ComponentFixture<NavbarProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarProfessorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
