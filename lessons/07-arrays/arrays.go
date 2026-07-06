package main

import "fmt"

func main() {
	// array de missões do Arthur
	missoes := [5]string{"Assalto ao trem", "Resgate do John", "Roubo ao banco", "Emboscada", "Fuga da gang"}

	// acessando por índice
	missoes[0] = "Primeiro assalto"

	// tamanho
	fmt.Println("total de missões:", len(missoes))

	// compilador define o tamanho
	itens := [...]string{"Revólver", "Rifle", "Faca", "Laço"}
	fmt.Println("itens:", itens)

	// array 2D: [membro][atributo] -> força, pontaria
	var gang [3][2]int
	for i := range 3 {
		for j := range 2 {
			gang[i][j] = (i + 1) * (j + 1)
		}
	}
	fmt.Println("gang stats:", gang)
}