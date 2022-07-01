import 'es6-promise/auto'
import 'url-search-params-polyfill'
import * as Game from './game'
import { Board } from './board'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas')
  if (!canvas) {
    console.error('Canvas DOM is null')
    return
  }
  const board = new Board(canvas)
  board.render()

  const modeChooser = document.querySelector('.mode-chooser-submit')
  if (modeChooser) {
    modeChooser.addEventListener('click', () => {
      const modeDOM = document.querySelector('.mode')
      if (modeDOM) {
        Game.initGameLocal2p()

        modeDOM.classList.add('invisible')
        modeDOM.addEventListener('transitionend', () => {
          modeDOM.classList.add('hidden')
        })
      }
    })
  }
})
