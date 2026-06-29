# Tipos básicos

Conheça os tipos da linguagem Go.

Go é uma linguagem **fortemente tipada**, isso quer dizer que você precisa declarar formalmente o que cada valor representa. O compilador não adivinha nem converte tipos automaticamente.

No dia-a-dia de um desenvolvedor, será comum trabalhar com os seguintes tipos:

1. `string`: texto em geral, como nomes, mensagens, URLs e JSON.
2. `int`: contadores, índices e loops.
3. `bool`: flags, condições e retorno de validações.
4. `float64`: números com decimal, como preços, porcentagens e cálculos.
5. `byte`: leitura de arquivos, streams de rede e manipulação binária.
6. `rune`: quando precisar iterar sobre texto caractere por caractere respeitando Unicode.

> [!NOTE]
> `byte` e `rune` são aliases de outros tipos: `uint8` e `int32`, respectivamente. Eles existem por valor semântico: `byte` deixa claro que você está trabalhando com dados brutos, e `rune` que você está trabalhando com um caractere Unicode.

---

A linguagem possui outros tipos além dos do dia-a-dia:

| Tipo         | Tamanho         | Descrição                                         |
| ------------ | --------------- | ------------------------------------------------- |
| `bool`       | 1 byte          | `true` ou `false`                                 |
| `string`     | variável        | Texto                                             |
| `int`        | 32 ou 64 bits\* | Número inteiro                                    |
| `int8`       | 1 byte          | Inteiro de −128 a 127                             |
| `int16`      | 2 bytes         | Inteiro de −2¹⁵ a 2¹⁵−1                           |
| `int32`      | 4 bytes         | Inteiro de −2³¹ a 2³¹−1                           |
| `int64`      | 8 bytes         | Inteiro de −2⁶³ a 2⁶³−1                           |
| `uint`       | 32 ou 64 bits\* | Número inteiro sem sinal                          |
| `uint8`      | 1 byte          | Positivo de 0 a 255                               |
| `uint16`     | 2 bytes         | Positivo de 0 a 2¹⁶−1                             |
| `uint32`     | 4 bytes         | Positivo de 0 a 2³²−1                             |
| `uint64`     | 8 bytes         | Positivo de 0 a 2⁶⁴−1                             |
| `uintptr`    | 32 ou 64 bits\* | Inteiro para armazenar endereços de memória       |
| `byte`       | 1 byte          | Alias de `uint8`                                  |
| `rune`       | 4 bytes         | Alias de `int32`, representa um caractere Unicode |
| `float32`    | 4 bytes         | Decimal com ~7 dígitos de precisão                |
| `float64`    | 8 bytes         | Decimal com ~15 dígitos de precisão               |
| `complex64`  | 8 bytes         | Número complexo com partes `float32`              |
| `complex128` | 16 bytes        | Número complexo com partes `float64`              |

> [!NOTE]
> Os tipos marcados com `*` têm tamanho variável: em sistemas de 32 bits valem 32 bits, em sistemas de 64 bits valem 64 bits. A maioria dos ambientes hoje roda em 64 bits.

## Type casting

Digamos que temos um tipo `int` e queremos usá-lo, em algum lugar que espera um tipo de um float64. Como fazemos essa transformação?
É bem simples: Considere um tipo qualquer `T`, basta fazer `T()` envolvendo o tipo que você deseja transformar.

```go
fmt.Println(float64(27))
fmt.Println(int(19.90))
fmt.Println(string(rune(65)))
fmt.Println(int(byte('G')))
```

> [!NOTE]
> `int("10")` não funciona em Go. Type casting só converte entre tipos numéricos compatíveis. Para converter uma `string` para `int` você precisa do pacote `strconv`:
>
> ```go
> n, err := strconv.Atoi("10")
> ```
