package main

import "fmt"

func main() {
	personagem := "Arthur Morgan"
	switch personagem {
	case "Arthur Morgan":
		fmt.Println("Você é um fora da lei.")
	case "John Marston":
		fmt.Println("Você busca redenção.")
	default:
		fmt.Println("Personagem desconhecido.")
	}

	honra := 80
	switch {
	case honra >= 75:
		fmt.Println("Alta honra.")
	case honra >= 50:
		fmt.Println("Honra neutra.")
	default:
		fmt.Println("Baixa honra.")
	}
}