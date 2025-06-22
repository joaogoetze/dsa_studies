function dijkstra(graph, start) {
    const min_heap = [[0, start]]; // Fila de prioridade (simulada com array) que armazena [distância, nó]; inicia com distância 0 até o nó inicial
    const distances = {};
    
    // Inicializa todas as distâncias como infinito
    for (const node in graph) {
        distances[node] = Infinity;
    }
    // O que isso faz é definir a menor distância de cada nó até o ponto inicial como infinito, 
    // indicando que ainda não sabemos o caminho mais curto até eles.

    distances[start] = 0; // A distância do nó inicial até ele mesmo é 0

    // Enquanto houverem elementos na fila (ou seja, ainda há nós a serem processados)
    while (min_heap.length > 0) {
        // Ordena a fila com base na menor distância (simulando uma fila de prioridade)
        min_heap.sort((a, b) => a[0] - b[0]); 
        const [current_distance, current_node] = min_heap.shift(); 
        // Remove o elemento com a menor distância da fila e armazena sua distância e seu nome
        
        // Para cada vizinho do nó atual
        for (const neighbor in graph[current_node]) {
            // Calcula a nova distância até o vizinho passando pelo nó atual
            const distance = current_distance + graph[current_node][neighbor];

            // Se a nova distância for menor que a distância atual registrada para o vizinho
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance; // Atualiza a menor distância para esse vizinho
                min_heap.push([distance, neighbor]); // Adiciona o vizinho na fila para ser processado depois
            }
        }
    }

    return distances; // Retorna um objeto com a menor distância de cada nó até o nó inicial
}

graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}

console.log(dijkstra(graph, 'A')); // Acha o menor caminho de A até todos os outros nós
