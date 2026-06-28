package main

import "fmt"

func main() {
	name := "Arthur Morgan"
	honor := 75

	// if simples
	if name == "Arthur Morgan" {
		fmt.Println("Arthur Morgan mantém um diário com desenhos e relatos.")
	}

	// Os parênteses são opcionais.
	if (name == "Arthur Morgan") {
		fmt.Println("Este if também funciona.")
	}

	// if e else
	if honor >= 50 {
		fmt.Println("Arthur possui uma honra positiva.")
	} else {
		fmt.Println("Arthur possui uma honra negativa.")
	}

	// if, else if e else
	if honor >= 80 {
		fmt.Println("Arthur possui honra alta.")
	} else if honor >= 50 {
		fmt.Println("Arthur possui honra média.")
	} else {
		fmt.Println("Arthur possui honra baixa.")
	}
}
