package main

import (
    "bufio"
    "fmt"
    "os"
    "strconv"
    "strings"
)

func main() {
    reader := bufio.NewReader(os.Stdin)
    line, _ := reader.ReadString('\n')
    line = strings.TrimSpace(line)
    nums := strings.Split(line, " ")

    for _, numStr := range nums {
        num, err := strconv.Atoi(numStr)
        if err != nil {
            fmt.Println("Error:", err)
            return
        }
        fmt.Printf("%d ", num)
    }
    fmt.Println()
}
