# if e else

Como declarar if e else em go.

Um `if` em Go não é difente das outras linguagens, sendo declarado assim:

```go
if name == "Arthur Morgan" {
  fmt.Println("May I stand unshaken amid, amidst a crashing world")
}
```

Em Go, não é necessário colocar parênteses ao redor da condição de um if.

```go
name := "Arthur Morgan"

if (name == "Arthur Morgan") {
  fmt.Println("Arthur mantém um diário com desenhos e relatos de suas viagens")
}
```

O código acima é equivalente a:

```go
name := "Arthur Morgan"

if name == "Arthur Morgan" {
  fmt.Println("Arthur mantém um diário com desenhos e relatos de suas viagens")
}
```

Embora as duas formas sejam válidas, a segunda é a forma idiomática e recomendada em Go

> [!IMPORTANT]
> Se você vem de outra linguagem, provavelmente está acostumado a usar operadores ternários. Esse recurso não existe em Go.
