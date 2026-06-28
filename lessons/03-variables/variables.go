package main

import "fmt"

func main() {
	var game = "Red Dead Redemption 2"
	fmt.Println(game)

	var i, j int = 1, 2
	fmt.Println(i, j)

	var dog, cat, wolf = true, false, "awoo!"
	fmt.Println(dog, cat, wolf)

	var red, dead, redemption2 bool
	fmt.Println(red, dead, redemption2)

	var number int
	fmt.Println(number)

	name := "Arthur"
	fmt.Println(name)

	firstName, lastName, isOutlaw := "Arthur", "Morgan", true
	fmt.Println(firstName, lastName, isOutlaw)
}