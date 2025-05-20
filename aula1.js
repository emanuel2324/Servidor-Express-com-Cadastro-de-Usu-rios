import express from 'express';
const app = express();
const port = 3000;

//middleware para interpretar json
app.use(express.json());


// banco de dados
let usuarios = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'José' }
]

// Rota get
app.get('/usuarios', (req, res) => {
    res.send(usuarios);
});

// Rota post
app.post('/usuarios',(req, res) => { 
    const {nome} = req.body
    if (!nome){
        return res.status(400).json({erro: 'O campo "nome" é obrigatorio'});
    }
    const novoUsuario = {
        id: usuarios.length + 1,
        nome
    }
    usuarios.push(novoUsuario);
    res.status(201).json({mensagem: 'usuario cadastrado com sucesso'})    
}),
app.listen(port, () => {
    console.log(`servidor rodando em: http://localhost:${port}`);
});
