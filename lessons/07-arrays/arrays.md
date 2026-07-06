# Arrays

Veja como declarar arrays em Go.

Para declarar uma array basta utilizar:

```go
var arr [5]int
fmt.Println("array:", arr)
```

O resultado do print será:

```bash
array: [0 0 0 0 0]
```

## Incluindo valores

Para inserir valores, acessamos a array assim:

```go
array[numero]
```

Assim com `arr[4] = 100` inserimos o valor 100 no array.

Também é possível inserir valores ao declarar o array:

```go
arr := [5]int{1, 2, 3, 4, 5}
fmt.Println("valores:", arr)
```

## Tamanhos

Para verificar o tamanho de um array, usamos a função `len()`:

```go
arr := [5]int{1, 2, 3, 4, 5}
fmt.Println("tamanho:", len(arr))
```

```bash
tamanho: 5
```

### Deixando o compilador definir o tamanho

É possível que o compilador infira o tamanho de um array com o `[...]`:

```go
arr := [...]int{1, 2, 3, 4, 5}
fmt.Println("Array com tamanho definido em compilação:", arr)
```

Também é possível declarar o índice diretamente, mas o compilador colocará valores-zero entre eles:

```go
b := [...]int{100, 3: 400, 500}
fmt.Println("idx:", b)
```

### Arrays multidimensionais

```go
var twoD [2][3]int
for i := range 2 {
    for j := range 3 {
        twoD[i][j] = i + j
    }
}
fmt.Println("2d:", twoD)
```
