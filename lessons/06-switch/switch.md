# Switch

Controle de fluxo com Switch em Go.

Para fazer switch case em Go basta utilizar:

```go
personagem := "Arthur Morgan"
switch personagem {
case "Arthur Morgan":
    fmt.Println("Você é um fora da lei.")
case "John Marston":
    fmt.Println("Você busca redenção.")
}
```

Também é possível incluir um caso default com `default`:

```go
personagem := "Arthur Morgan"
switch personagem {
case "Arthur Morgan":
    fmt.Println("Você é um fora da lei.")
case "John Marston":
    fmt.Println("Você busca redenção.")
default:
    fmt.Println("Personagem desconhecido.")
}
```

## Switch sem expressão

Sem expressão, o switch se comporta como um `if/else` e cada case recebe uma condição booleana:

```go
honra := 80
switch {
case honra >= 75:
    fmt.Println("Alta honra.")
case honra >= 50:
    fmt.Println("Honra neutra.")
default:
    fmt.Println("Baixa honra.")
}
```
