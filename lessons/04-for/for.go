package main

import "fmt"

func main() {
	// for tradicional
	for i := 0; i < 3; i++ {
		fmt.Println("tradicional:", i)
	}

	// for como while
	i := 1
	for i <= 3 {
		fmt.Println("while:", i)
		i++
	}

	// for infinito com break
	for {
		fmt.Println("infinito")
		break
	}

	// for range
	for n := range 10 {
		fmt.Println("range:", n)
	}

	// continue
	for n := range 10 {
		if n == 5 {
			continue
		}
		fmt.Println("continue:", n)
	}
}