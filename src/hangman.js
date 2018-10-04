
class Hangman {

    constructor(word,guessallowed){

	this.word         = word.toLowerCase().split('')
	this.guessallowed = guessallowed
	this.guessedword  = []
	this.status       = 'Playing'

}

getPuzzle() {
let puzzle = ''

  this.word.forEach((letter)=>{
  	this.guessedword.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*'
  })

  return puzzle
}

guess(guess){

	 guess = guess.toLowerCase()
  if(this.status !== 'Playing'){
  	return
  }
  const isUnique = !this.guessedword.includes(guess)
  const correctGuess = isUnique && !this.word.includes(guess)
  const isSpace = this.word.includes(' ') && !this.guessedword.includes(' ')
  isUnique  ?this.guessedword =[...this.guessedword , guess] : console.log('end')
  correctGuess  ? this.guessallowed-- : null
}

currentStatus(){
     const move = document.querySelector('.move')
	 const isCompleted = this.word.every( (letter) => this.guessedword.includes(letter) || letter === ' ' )
 

	if(this.guessallowed === 0 ){
		this.status ='Failed'
		move.textContent = 	`Nice try the correct word is ${this.word.join('')}`
		
	}else if(isCompleted){
		this.status ='Completed'
		move.textContent = `Nice work!`
	}else{
		this.status = 'Playing'
		move.textContent = `Guess Left :${this.guessallowed}`
	}

	console.log(this.status)

}

}

export { Hangman as default}





