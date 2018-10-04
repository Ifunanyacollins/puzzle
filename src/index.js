import Hangman from './hangman'
import getWord from './request'
import validator from 'validator'

console.log(validator.isAlpha('hello3' ,['en-US' ]))

const word = document.querySelector('.word')

let game 


window.addEventListener('keypress',function(e){
	game.guess(e.key)
	render()

})


const render = () => {

 word.textContent = game.getPuzzle()
 game.currentStatus()

}

const startGame = async () =>{

	const puzzle = await getWord(2)
	game = new Hangman(puzzle,5)
	render()

}




startGame()


const person = {
	name:'Collins Ogbuzuru',
	age:23
}

const location = {
	city:'Abia',
	country:'Nigeria'
}

const overView = { ...person,...location}
console.log(overView)