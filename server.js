// Importa o framework Express para criar a API.
const express = require("express");


// Cria a aplicacao Express (servidor HTTP).
const app = express();

// Rota basica para verificar se a API esta online.
// req: representa a requisicao que chega do cliente.
// res: representa a resposta que a API envia de volta.
app.get("/", (req, res) => {
    res.send("API de Filmes");
});

// Middleware para permitir o uso de JSON no corpo das requisicoes.
// Sem isso, req.body ficaria indefinido em requisicoes com JSON.
app.use(express.json());

// Base de dados em memoria com filmes.
// Cada objeto tem id, titulo e genero.
// Em um sistema real, esses dados viriam de um banco de dados.
const filmes = [
    {
        id: 1,
        titulo: "Senhor dos Anéis: A Sociedade do Anel",
        genero: "Aventura/Fantasia",
    },
    {
        id: 2,
        titulo: "Premonição",
        genero: "Terror/Suspense",
    },
    {
        id: 3,
        titulo: "Os Incriveis",
        genero: "Animação/Ação",
    },
    {
    id: 4,
    titulo: "Matrix",
    genero: "Ficção Científica/Ação",
},
{
    id: 5,
    titulo: "Titanic",
    genero: "Romance/Drama",
},
{
    id: 6,
    titulo: "Jurassic Park",
    genero: "Aventura/Ficção Científica",
},
{
    id: 7,
    titulo: "Vingadores: Ultimato",
    genero: "Ação/Super-herói",
},
{
    id: 8,
    titulo: "Toy Story",
    genero: "Animação/Aventura",
},
{
    id: 9,
    titulo: "Interestelar",
    genero: "Ficção Científica/Drama",
},
{
    id: 10,
    titulo: "Homem-Aranha: No Aranhaverso",
    genero: "Animação/Ação",
}

];

// Rota que lista todos os filmes.
// Responde com o array completo em formato JSON.
app.get("/filmes", (req, res) => {
    res.send(filmes);
});

// Rota que adiciona um novo filme usando dados do corpo da requisicao.
// Espera receber "titulo" e "genero" no JSON enviado pelo cliente.
app.post("/filmes", (req, res) => {
    const novoFilme = {
        // Gera um id simples baseado no tamanho atual da lista.
        // Em banco de dados, o id geralmente e gerado automaticamente.
        id: filmes.length + 1,
        titulo: req.body.titulo,
        genero: req.body.genero,
    }

    // Adiciona o novo filme no array em memoria.
    filmes.push(novoFilme);
    // Retorna uma mensagem simples confirmando a inclusao.
    res.send(`Filme ${novoFilme.titulo} adicionado com sucesso!`);
});


// Base de dados em memoria com series.
const series =[
    {
        id: 1,
        titulo: "Stranger Things",
        genero: "Ficção Científica/Terror",
    },
    {
        id: 2,
        titulo: "La Casa de Papel",
        genero: "Ação/Thriller",
    },
    {  id: 3,
        titulo: "The Crown",
        genero: "Drama Histórico",
    },
    {
        id: 4,
        titulo: "The Mandalorian",
        genero: "Ficção Científica/Aventura",
    },
    {
        id: 5,
        titulo: "Breaking Bad",
        genero: "Crime/Drama",
    },
    {
        id: 6,
        titulo: "Friends",
        genero: "Comédia/Romance",
    },
    {
        id: 7,
        titulo: "The Witcher",
        genero: "Ficção Científica/Fantasia",
    },
    {
        id: 8,
        titulo: "The Office",
        genero: "Comédia",
    },
    {
        id: 9,
        titulo: "Game of Thrones",
        genero: "Ficção Científica/Fantasia",
    },
    {
        id: 10,
        titulo: "Mare of Easttown",
        genero: "Crime/Drama",
    }

]

// Rota que lista todas as series.
app.get("/series", (req, res) => {
    res.send(series);
});

// Rota que adiciona uma nova serie usando dados do corpo da requisicao.
app.post("/series", (req, res) => {
    const novaSerie = {
        // Gera um id simples baseado no tamanho atual da lista.
        id: series.length + 1,
        titulo: req.body.titulo,
        genero: req.body.genero,
    }

    // Adiciona a nova serie no array em memoria.
    series.push(novaSerie);
    // Retorna uma mensagem simples confirmando a inclusao.
    res.send(`Série ${novaSerie.titulo} adicionada com sucesso!`);
});

// Base de dados em memoria com lutas.
const lutas =[
    {
        id: 1,
        titulo: "Luta de Boxe: Tyson vs Holyfield II",
        genero: "Esporte/Boxe",
    },
    {
        id: 2,
        titulo: "Luta de MMA: McGregor vs Diaz",
        genero: "Esporte/MMA",
    },
    {
    id: 3,
    titulo: "Luta de Boxe: Muhammad Ali vs Joe Frazier",
    genero: "Esporte/Boxe",
},
{
    id: 4,
    titulo: "Luta de Boxe: Floyd Mayweather vs Manny Pacquiao",
    genero: "Esporte/Boxe",
},
{
    id: 5,
    titulo: "Luta de MMA: Khabib Nurmagomedov vs Conor McGregor",
    genero: "Esporte/MMA",
},
{
    id: 6,
    titulo: "Luta de MMA: Anderson Silva vs Chael Sonnen",
    genero: "Esporte/MMA",
},
{
    id: 7,
    titulo: "Luta de Boxe: Mike Tyson vs Lennox Lewis",
    genero: "Esporte/Boxe",
},
{
    id: 8,
    titulo: "Luta de MMA: Jon Jones vs Daniel Cormier",
    genero: "Esporte/MMA",
},
{
    id: 9,
    titulo: "Luta de Boxe: George Foreman vs Muhammad Ali",
    genero: "Esporte/Boxe",
},
{
    id: 10,
    titulo: "Luta de MMA: Nate Diaz vs Jorge Masvidal",
    genero: "Esporte/MMA",
}

]

// Rota que lista todas as lutas.
app.get("/lutas", (req, res) => {
    res.send(lutas);
});

// Rota que adiciona uma nova luta usando dados do corpo da requisicao.
app.post("/lutas", (req, res) => {
    const novaLuta = {
        // Gera um id simples baseado no tamanho atual da lista.
        id: lutas.length + 1,
        titulo: req.body.titulo,
        genero: req.body.genero,
    }

    // Adiciona a nova luta no array em memoria.
    lutas.push(novaLuta);
    // Retorna uma mensagem simples confirmando a inclusao.
    res.send(`Luta ${novaLuta.titulo} adicionada com sucesso!`);
});



// Porta onde o servidor vai ouvir.
// Se quiser mudar a porta, altere este valor.
const PORT = 3000;
app.listen(PORT, () => {
    // Exibe uma mensagem no terminal quando o servidor sobe.
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});


// Rota que retorna um filme pelo ID informado na URL.
// Exemplo de URL: /filmes/2
app.get("/filmes/:id", (req, res) => {
    // Converte o parametro id para numero.
    const id = Number(req.params.id);

    // Procura o filme cujo id seja igual ao informado.
    const filmeEncontrado = filmes.find((filme) => filme.id === id)

    // Retorna o filme encontrado (ou undefined se nao existir).
    res.json(filmeEncontrado);
})