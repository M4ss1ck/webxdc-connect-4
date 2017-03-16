import { Board, BoardPiece } from './board';
import { GameBase } from './game-base';
import { Player } from './player';
import { PlayerHumanFlyweb } from './player-human-flyweb';
import { PlayerHumanFlywebClient } from './player-human-flyweb-client';
import { Utils } from './utils';

export class Game extends GameBase {
  constructor(players: Array<Player>, canvas: HTMLCanvasElement) {
    super(players, canvas)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas')
  const game = new Game([
    new PlayerHumanFlyweb(BoardPiece.PLAYER_1, canvas),
    new PlayerHumanFlywebClient(BoardPiece.PLAYER_2, canvas)
  ], canvas)
  game.start()
  canvas.addEventListener('click', async () => {
    if (game.isGameWon) {
      game.reset()
      await Utils.animationFrame()
      game.start()
    }
  })
})
