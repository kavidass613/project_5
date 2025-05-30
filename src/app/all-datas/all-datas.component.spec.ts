import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDatasComponent } from './all-datas.component';

describe('AllDatasComponent', () => {
  let component: AllDatasComponent;
  let fixture: ComponentFixture<AllDatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllDatasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
