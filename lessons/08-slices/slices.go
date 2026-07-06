package main

import "fmt"

func main() {
	gang := []string{"Arthur Morgan", "John Marston", "Dutch van der Linde"}

	// adicionando membro
	gang = append(gang, "Lenny Summers")
	fmt.Println("gang:", gang)

	// acessando por índice
	fmt.Println("líder:", gang[0])

	// subslice
	parte := gang[1:3]
	fmt.Println("parte:", parte)

	// comprimento e capacidade
	fmt.Println("len:", len(gang), "cap:", cap(gang))

	// cópia independente
	copia := make([]string, len(gang))
	copy(copia, gang)
	copia[0] = "Micah Bell"
	fmt.Println("original:", gang)
	fmt.Println("cópia:", copia)
}