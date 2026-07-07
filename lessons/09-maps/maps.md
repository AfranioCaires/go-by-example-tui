# Maps

Veja como utilizar maps em Go.

Maps fazem são definidos por chave e valor, para utilizá-los, precisamos importar o pacote `maps` da biblioteca padrão da linguagem:

```go
import (
	"maps"
)
```

## Criando um map

Uma vez importado, usamos o `make()` para definir um map:

```go
import (
	"maps"
)

func main() {
  m = make(map[string]int))
}
```

o `map[string]int` quer dizer que o a chave será uma `string` o valor será um `int`. Utilizando, temos:

```go
import (
  "fmt"
	"maps"
)

func main() {
  m = make(map[string]int))
  m["um"] = 1
  m["dois"] = 2

  fmt.Println(m)
}
```

Também é pssível definir um `map` e atribuindo um valor diretamente a ele assim:

```go
m := map[string]string{"nome": "Arthur", "sobrenome": "Morgan"}
```

> [!TIP]
> É possível definir uma chave sem o valor, mas a ausência do valor terá um valor-zero atribuído.
>
> ```go
> m["tres"]
> // m["tres"] terá valor 0
> ```

## Verificando o tamanho de um map

Para verificar o tamanho de um map basta utilizar o `len()`, ele retornará o numeros de pares inseridos:

```go
m = make(map[string]int))
m["um"] = 1
m["dois"] = 2
fmt.Println(m)
```

Resultando em:

```bash
2
```

## Limpando ou apagando elementos de um map

Para apagar um valor dentro de um map, basta utilizar um `delete(chave)`

```go
m = make(map[string]int))
m["um"] = 1
m["dois"] = 2
delete("dois")
fmt.Println(m)
```

```bash
1
```

e para limpar um map, utilizamos `clear()`:

```go
m = make(map[string]int))
m["um"] = 1
m["dois"] = 2
clear("dois")
fmt.Println(m)
```

```bash
map[]
```
