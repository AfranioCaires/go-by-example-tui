# Slices

Veja como declarar Slices em Go.

Se você vem de outra linguagem, deve estar se perguntando o que é uma slice. Bom, é um array dinâmico.

Vamos declarar um slice:

```go
var numeros []int
```

Ou declarando e atribuindo valores:

```go
nomes := []string{"Arthur Morgan", "John Marston"}
```

Também é possível usar `make(tipo, tamanho)` para criar um slice:

```go
numeros := make([]int, 5)
```

## Adicionando elementos

Para adicionar elementos, podemos usar `append(slice, valor)`:

```go
numeros := []int{1, 2, 3, 4, 5}
numeros = append(numeros, 6, 7)
```

## Acessando elementos

Para acessar elementos usamos `slice[posição]`:

```go
numeros := []int{1, 2, 3, 4, 5}
fmt.Println(numeros[0])
```

```bash
1
```

## Criando um slice a partir de outro

Acessamos o slice original com a sintaxe `[inicio:fim]`:

```go
numeros := []int{1, 2, 3, 4, 5}
parte := numeros[1:4]
fmt.Println(parte)
```

```bash
[2 3 4]
```

## Comprimento e capacidade

Para verificar o comprimento usamos `len(slice)` e `cap(slice)` para verificar a capacidade de um slice.

> [!IMPORTANT]
> Subslices compartilham memória. Fique atento com o seguinte exemplo:
>
> ```go
> a := []int{1, 2, 3, 4}
> b := a[1:3]
> b[0] = 99
> fmt.Println(a)
> fmt.Println(b)
> ```

Resultará em:

```bash
[1 99 3 4]
[99 3]
```

## Copiando um slice

Para criar uma cópia independente, usamos `copy(slice que recebe a cópia, slice que será copiado)`:

```go
numeros := []int{1, 2, 3, 4, 5}
b := make([]int, len(numeros))
copy(b, numeros)
```
