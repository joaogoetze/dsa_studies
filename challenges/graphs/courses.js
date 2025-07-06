// Verificar se existem loops nas dependências de cursos

function courses(numCourses, prerequisites) {

    // Cria um grafo para cada curso com as 'dependencias' vazias
    graph = {};
    for (i=0; i<numCourses; i++) {
        graph[i] = [];
    }

    // Adiciona um curso -> cursos que dependem dele
    // Exemplo: curso 0 -> 1, curso 1 -> null
    for (const [a, b] of prerequisites) {
        graph[b].push(a);
    }

    let state = new Array(numCourses).fill(0);

    // ESTADOS
    //  0 = não visitado
    //  1 = visitando
    //  2 = visitado

    // Para cadas curso, passa pela função que verifica loops
    for(i=0; i<numCourses; i++) {
        if (hasCycle(i)) {
            return false;
        }    
    }
    return true;

    function hasCycle(x) {
        // Se o estado  do curso que estamos visitando
        // for 1, ou seja
        // estamos visitando o curso no momento
        // já temos um loop, então retorna true
        if (state[x] == 1) {
            return true;
        }
        // Se o estado  do curso que estamos visitando
        // for 2, ou seja
        // essa curso já foi visitado
        // não temos um loop, então retorna false
        if (state[x] == 2) {
            return false;
        }
        //Define status como 1
        state[x] = 1;
        for (let neighbor of graph[x]) {
            if (hasCycle(neighbor)) {
                return true;
            }
        }
        state[x] = 2;
        return false;
    }
}

console.log(courses(2, [[1, 0], [0, 1]])); // Output: false (cycle exists)
console.log(courses(2, [[1, 0]]));
//2 = Quantidade de cursos
// [[1,0]] = para fazer o curso 1, é necessário ter feito o curso 0