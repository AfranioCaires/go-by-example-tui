# hello-world

Seu primeiro programa em Go.

Em Go, todo programa começa com a declaração de um **pacote**.
O pacote `main` é especial: ele indica que este arquivo é o ponto de entrada do programa. Sem ele, o Go não gera um executável.

```go
package main
```

Em seguida, importamos o pacote `fmt`, que fornece funções de formatação e saída de texto:

```go
import "fmt"
```

Todo programa executável em Go precisa de uma função `main()`. Ela é chamada automaticamente pelo runtime ao iniciar o programa:

```go
func main() {
    fmt.Println("hello world")
}
```

> [!TIP]
> Para executar, aperte `[ r ]`, ou aperte `[ c ]` para copiar o código e rodar em outro lugar.

Ao executar, você verá:

```bash
$ go run hello-world.go
hello world
```

Além de executar diretamente, você pode **compilar** o programa em um binário:

```bash
$ go build hello-world.go
```

Listando os arquivos, verá que um executável foi gerado com o mesmo nome do arquivo:

```bash
$ ls
hello-world    hello-world.go
```

> [!INFO]
> No Windows, o binário terá a extensão `.exe`: `hello-world.exe`

Agora você pode executá-lo diretamente, sem precisar do Go instalado na máquina:

```bash
$ ./hello-world
hello world
```
