import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserGraphComponent } from './user-graph.component';
import { TreeModule } from 'ng2-tree';


describe('UserGraphComponent', () => {
  let component: UserGraphComponent;
  let fixture: ComponentFixture<UserGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
