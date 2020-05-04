let helloworld: string = 'Hello world'

helloworld = 'what in the world?'
//helloworld = 11 // gone wrong

const countSumTingSilly: number = 1

// WONG WONG WONG WRIGHT :'))))

let didYouFollowFollowYourFire: boolean = true

const lists: number[] = [1, 2, 34, 54, 33]
/* another way:   
const lists: Array<number> = [1, 2, 34, 54, 33]*/

//tuple type ?? :) ??

let x: [string, number]
let y: [boolean, string]

x = ['against the wrodl', 2]
y = [false, 'ca va?']

//enum

// start set to 1, 0 by default
enum Colours {
  Red = 1,
  Green,
  Blue,
}

let c: Colours = Colours.Red
console.log(c)

let notSure: any = 'what'

notSure = []
notSure = 1
notSure = function () {}

const einFunction = (): void => {
  console.log('Give a shit for "return"')
}

einFunction()

const nullAlways: null = null
const undefinedAlways: undefined = undefined

