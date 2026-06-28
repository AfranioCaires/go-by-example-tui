# Variáveis

Veja como declarar variáveis em Go.

Para declarar uma variável em Go, você pode utilizar a palavra-chave `var`. Ela permite declarar uma ou mais variáveis, com o tipo informado após os nomes:

```go
var red, dead, redemption2 bool
```

No código acima, foram declaradas três variáveis do tipo `bool`. Como nenhum valor foi atribuído, todas são inicializadas com o valor padrão `false`.

## Variáveis com inicializadores

Também é possível declarar variáveis e atribuir valores diretamente:

```go
var i, j int = 1, 2
```

No trecho acima, declaramos as variáveis `i` e `j` do tipo `int`, com os valores `1` e `2`, respectivamente.

> [!TIP]
> Quando valores iniciais são fornecidos, o tipo pode ser omitido:
>
> ```go
> var name, lastName = "Arthur", "Morgan"
> ```
>
> Também é possível declarar variáveis de tipos diferentes na mesma instrução:
>
> ```go
> var dog, cat, wolf = true, false, "awoo!"
> ```

Dentro de funções, também é possível utilizar a declaração curta `:=`. Nesse caso, o tipo da variável é inferido com base no valor atribuído:

```go
name := "Arthur"
```

A declaração curta também aceita múltiplas variáveis:

```go
name, lastName, wolf := "Arthur", "Morgan", false
```

## Valores zero

Variáveis declaradas sem um valor inicial recebem o **valor zero** correspondente ao seu tipo. Por exemplo:

- `bool`: `false`
- `int`: `0`
- `string`: `""`
- ponteiros: `nil`

## Constantes

Para trabalhar com constantes, basta utilizar o `const`:

```go
const name string = "Arthur Morgan"
```

> [!IMPORTANT]
> Em Go, const não usa :=.
>
> ```go
> const name := "Arthur Morgan"
> ```
>
> resulta em erro.
