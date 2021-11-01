import { Game } from './../game.model';
import { GameService } from './../game.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GameListComponent } from './game-list.component';
import { of } from 'rxjs';


describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;
  let service: GameService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameListComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        GameService
      ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(GameService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar o serviço para listar todos os games findAll', () => {
    jest.spyOn(service, 'findAll').mockReturnValue(of([new Game()]));
    component.ngOnInit();
    fixture.detectChanges();
    expect(service.findAll).toHaveBeenCalled();
    expect(component.lista.length).toBe(1);
  });
});
