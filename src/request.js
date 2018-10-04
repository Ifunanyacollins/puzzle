

const getWord = async (count)=>{
	const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${count}`)

	if(response.status === 200){
      const puzzle_object = await response.json()
      return puzzle_object.puzzle
	}else{
		throw new Error('Unable to fetch data')
	}

}

export {getWord as default}




