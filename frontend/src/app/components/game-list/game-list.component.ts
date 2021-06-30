import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { GamesService} from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  games: any = [];
  constructor(private gamesService: GamesService, private router: Router) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.gamesService.getGames().subscribe(
      res => {
        console.log(res);
        this.games = res;
      },
      err => console.error(err)
    )
  }

  deleteGame(id:string) {
    this.gamesService.deleteGame(id)
      .subscribe(
        res => {
          console.log(res);
          this.getGames();
        },
        err => console.log(err)
      )
  }

  /*editGame(id:string) {
    this.gamesService.updateGame(id)
      .subscribe(
        res => {
          console.log(res);
          this.getGames();
        },
        err => console.log(err)
      )
  }*/
}
