# Loops

Veja como declarar loops em Go.

Diferente de outras linguagens, Go não possui while, `do-while`. Ele possui apenas `for`.
Na sua forma básica, é possível declarar um for assim:

```go
for i := 0; i < 3; i++ {
  fmt.Println(i)
}
```

Este é o loop tradicional, mas como eu comentei, Go não pusui `while`. Então como faz algo parecido?

Simples: usando `for`:

```go
i := 1
for i <= 3 {
  fmt.Println(i)
  i++
}
```

Também é possível fazer apenas um `for`:

```go
for {
  fmt.Println("Loop infinito")
}
```

Porém nesse caso, você pode interromper o loop com o `break`

```go
for {
  fmt.Println("Olá")
  break
}
```

Se você é familiarizado com o python, você já deve ter visto o for in range e isso também é possível em Go:

```go
for n := range 10 {
  fmt.Println("n: ", n)
}
```

Também é possível interormper um ciclo de um loop e avancar para o próximo com o `continue`:

```go
for n := range 10 {
  fmt.Println("n: ", n)

if n == 5 {
  continue
}
```
