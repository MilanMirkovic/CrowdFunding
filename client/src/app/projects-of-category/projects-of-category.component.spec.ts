import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsOfCategoryComponent } from './projects-of-category.component';

describe('ProjectsOfCategoryComponent', () => {
  let component: ProjectsOfCategoryComponent;
  let fixture: ComponentFixture<ProjectsOfCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsOfCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsOfCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
