var networkDelayTime = function(times, n, k) {
    // Criar uma tabela de adjacência para representar o grafo
    const table = {};

    // Preenche a tabela de adjacência com os tempos de transmissão
    times.forEach(t => {
        if (!table[t[0]]) {
            // Se o nó de origem não existe na tabela, cria uma entrada
            table[t[0]] = { [t[1]]: t[2] };
        } else {
            // Adiciona ou atualiza o tempo para o nó de destino
            table[t[0]][t[1]] = t[2];
        }
    });

        // Inicializa as distâncias: começa com o nó k com distância 0
    const distances = {[k]: 0};
    // Cria uma min-heap (simulada com array) para armazenar nós a serem processados
    const min_heap = [];
    // Adiciona o nó inicial k com distância 0 na heap
    min_heap.push([0, k]);

     while (min_heap.length > 0) {
        // Encontra o elemento com a menor distância na heap
        let minIndex = 0;
        for (let i = 1; i < min_heap.length; i++) {
            if (min_heap[i][0] < min_heap[minIndex][0]) {
                minIndex = i;
            }
        }
        // Remove e peg a o nó com menor distância atual
        const [dist, node] = min_heap[minIndex];
        min_heap.splice(minIndex, 1);

                // Pega todos os vizinhos do nó atual
        const neighbors = table[node];
        if (neighbors) {
            // Para cada vizinho do nó atual
            for (const [key, value] of Object.entries(neighbors)) {
                // Calcula a distância atual do vizinho (ou infinito se não conhecida)
                const currentDistance = distances[key] !== undefined ? distances[key] : Infinity;
                // Se encontrarmos um caminho mais curto, atualiza
                if (dist + value < currentDistance) {    
                    distances[key] = dist + value;
                    // Adiciona o vizinho na heap com a nova distância
                    min_heap.push([dist + value, key]);
                }
            }
        }
    }

    // Verifica se alcançamos todos os nós
    if (Object.keys(distances).length < n) {
        return -1; // Se não, retorna -1 (grafo não conectado)
    }

    // Retorna a maior distância encontrada (tempo para alcançar o último nó)
    return Math.max(...Object.values(distances));
};

times = [[2,1,1],[2,3,1],[3,4,1]];
console.log(networkDelayTime(times, 4 ,2));
