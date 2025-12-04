import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { createServer } from 'http';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Caminho correto das views e public
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// COLOCAR OS MODELS AQUI (colocar o caminho ../)

import Usuario from '../models/usuario.js';
import Series from '../models/serie.js';
import Filmes from '../models/filme.js';
import Planos from '../models/plano.js';



//FIM MODELS

// Servir arquivos estáticos
//app.use(express.static(join(__dirname, '../public')));
app.set('views', join(__dirname, '../views'));

// Rotas
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

// COLOCAR AS ROTAS AQUI
app.get('/', (req, res) => {
    res.render("index")
})

app.get('/instrumento/lst', (req, res) => {
    res.render("instrumento/lst")
})

app.get('/instrumento/add', (req, res) => {
    res.render("instrumento/add")
})

app.get('/instrumento/add/ok', (req, res) => {
    res.render("instrumento/addok")
})

app.get('/marca/lst', (req, res) => {
    res.render("marca/lst")
})

app.get('/marca/add', (req, res) => {
    res.render("marca/add")
})

app.get('/marca/add/ok', (req, res) => {
    res.render("marca/addok")
})

/*app.get('/times/lst', async (req, res) => {;
    const times = await Time.find();
    res.render("times/lst", { times:times });
})
app.post('/times/lst', async (req, res) => {
    const pesquisa = req.body.pesquisa;
    const times = await Time.find({nome:{$regex:pesquisa,$options:'i'}});
    res.render("times/lst", { times:times });
})

app.post('/times/addok', async (req, res) => {
    await Time.create(req.body)
    const nometime = req.body.nome
  //  const nometime = req.query.nome
  res.render("times/addok", {nome:nometime});
})

app.get('/times/add', (req, res) => {
    res.render("times/add")
})


app.get('/jogadores/lst', async (req, res) => {
    const jogadores = await Jogadores.find();
    res.render("jogadores/lst", { jogadores:jogadores });
})

app.post('/jogadores/lst', async (req, res) => {
    const pesquisa = req.body.pesquisa;
    const jogadores = await Jogadores.find({nome:{$regex:pesquisa,$options:'i'}});
    res.render("jogadores/lst", { jogadores:jogadores });
})

app.post('/jogadores/addok', async (req, res) => {
    await Jogadores.create(req.body);  
    const nomejogador = req.body.nome;  
    const nometime = req.body.nometi;  
    const posicaojogador = req.body.posicao;  
    const alturajogador = req.body.altura;
    const idadejogador = req.body.idade;  

    res.render("jogadores/addok", {
        nome: nomejogador,
        nometi: nometime,
        posicao: posicaojogador,
        altura: alturajogador,
        idade: idadejogador
    });
});

app.get('/jogadores/add', (req, res) => {
    res.render("jogadores/add")
})

app.get('/torneios/lst', async (req, res) => {
    const torneios = await Torneios.find();
    res.render("torneios/lst", { torneios:torneios });
})
app.post('/torneios/lst', async (req, res) => {
    const pesquisa = req.body.pesquisa;
    const torneios = await Torneios.find({nome:{$regex:pesquisa,$options:'i'}});
    res.render("torneios/lst", { torneios:torneios });
})

app.post('/torneios/addok', async (req, res) => {
    await Torneios.create(req.body)
    const nometorneio = req.body.nome
    const jogotorneio = req.body.jogo
    const periodotorneio = req.body.periodo
    const premiacaotorneio = req.body.premiacao
    const statustorneio = req.body.status
  //  const nometime = req.query.nome
  res.render("torneios/addok", {
    nome:nometorneio,
    jogo:jogotorneio,
    periodo:periodotorneio,
    premiacao:premiacaotorneio,
    status:statustorneio
});
})

app.get('/torneios/add', (req, res) => {
    res.render("torneios/add")
})
*/


app.get('/serie/lst', async (req, res) => {
    const series = await Series.find();
    res.render("serie/lst", { series:series });
})

app.post('/serie/addok', upload.single('foto'), async (req, res) => {
    await Series.create({
        nome: req.body.nome,
        temporada: req.body.temporada,
        ano: req.body.ano,
        autor: req.body.autor,
        foto: req.file.buffer
    });
    
    const nomeserie = req.body.nome
  //  const nometime = req.query.nome
  res.render("serie/addok", {nome:nomeserie});
})

app.get('/serie/add', (req, res) => {
    res.render("serie/add")
})

app.get('/filme/lst', async (req, res) => {
    const filmes = await Filmes.find();
    res.render("filme/lst", { filmes:filmes });
})
app.post('/filme/addok', upload.single('foto'), async (req, res) => {
    // Processar os dados do formulário
    let dublagemValor;
    if (req.body.dublagem !== undefined) {
    dublagemValor = true;
} else {
    dublagemValor = false;
}
    const filmeData = {
        nome: req.body.nome,
        duracao: req.body.duracao,
        ano: req.body.ano,
        dublagem: dublagemValor // Converte para boolean
    };

    await Filmes.create({
        nome: req.body.nome,
        duracao: req.body.duracao,
        ano: req.body.ano,
        dublagem: dublagemValor,
        foto: req.file.buffer
    });
    
     const nomefilme = req.body.nome
    
    res.render("filme/addok", { nome: nomefilme });
});

app.get('/filme/add', async(req, res) => {
    const filmes = await Filmes.find();
    res.render("filme/add", { filmes:filmes });
})

app.get('/plano/lst', async (req, res) => {
    const planos = await Planos.find();
    res.render("plano/lst", { planos:planos });
})

app.post('/plano/addok', async (req, res) => {
    const nomeplano = req.body.nome
    await Planos.create(req.body)
  //  const nometime = req.query.nome
  res.render("plano/addok", {nome:nomeplano});
})

app.get('/plano/add', (req, res) => {
    res.render("plano/add")
})

app.get('/usuario/lst', async (req, res) => {
    const usuarios = await Usuario.find();
    res.render("usuario/lst", { usuarios:usuarios });
})

app.post('/usuario/addok', async (req, res) => {
    const nomeusuario = req.body.nome
    await Usuario.create(req.body)
  //  const nometime = req.query.nome
    res.render("usuario/addok", {nome:nomeusuario});
})

app.get('/usuario/add', (req, res) => {
    res.render("usuario/add")
})



//Excluir
/*
app.get('/times/del/:id', async (req, res) => {

const time = await Time.findByIdAndDelete(req.params.id)

res.redirect("/times/lst")

})

app.get('/jogadores/del/:id', async (req, res) => {

const jogador = await Jogadores.findByIdAndDelete(req.params.id)

res.redirect("/jogadores/lst")
})

app.get('/torneios/del/:id', async (req, res) => {

const torneio = await Torneios.findByIdAndDelete(req.params.id)

res.redirect("/torneios/lst")

})
*/

app.get('/serie/del/:id', async (req, res) => {

const serie = await Series.findByIdAndDelete(req.params.id)

res.redirect("/serie/lst")

})

app.get('/filme/del/:id', async (req, res) => {

const filme = await Filmes.findByIdAndDelete(req.params.id)

res.redirect("/filme/lst")

})

app.get('/plano/del/:id', async (req, res) => {

const plano = await Planos.findByIdAndDelete(req.params.id)

res.redirect("/plano/lst")

})

app.get('/usuario/del/:id', async (req, res) => {

const usuario = await Usuario.findByIdAndDelete(req.params.id)

res.redirect("/usuario/lst")

})

//Edição
/*
app.get('/times/edt/:id', async (req, res) => {

const time = await Time.findById(req.params.id)

res.render("times/edt", {time})

})

app.post('/times/edt/:id', async (req, res) => {

const time = await Time.findByIdAndUpdate(req.params.id, req.body)

res.render("times/edtok")

})



app.get('/jogadores/edt/:id', async (req, res) => {

const jogador = await Jogadores.findById(req.params.id)

res.render("jogadores/edt", {jogador})

})

app.post('/jogadores/edt/:id', async (req, res) => {

const jogador = await Jogadores.findByIdAndUpdate(req.params.id, req.body)

res.render("jogadores/edtok")

})

app.get('/torneios/edt/:id', async (req, res) => {

const torneio = await Torneios.findById(req.params.id)

res.render("torneios/edt", {torneio})

})

app.post('/torneios/edt/:id', async (req, res) => {

const torneio = await Torneios.findByIdAndUpdate(req.params.id, req.body)

res.render("torneios/edtok")

})
*/

app.get('/serie/edt/:id', async (req, res) => {

const serie = await Series.findById(req.params.id)

res.render("serie/edt", {serie})

})

app.post('/serie/edt/:id', async (req, res) => {

const serie = await Series.findByIdAndUpdate(req.params.id, req.body)

res.render("serie/edtok")

})

app.get('/filme/edt/:id', async (req, res) => {

    const filme = await Filmes.findById(req.params.id);
    res.render('filme/edt', { filme: filme,
    // Converter boolean para string para o checkbox     
    dublagemChecked: filme.dublagem ? 'checked' : ''
    });
    
});

app.post('/filme/edt/:id', async (req, res) => {

    const filme = await Filmes.findById(req.params.id);

    // Atualizar os dados do filme
    filme.nome = req.body.nome;
    filme.duracao = req.body.duracao;
    filme.ano = req.body.ano;
    filme.dublagem = req.body.dublagem !== undefined; // Atualiza o valor de dublagem com base no checkbox

    await filme.save();

    res.render("filme/edtok");
}); 


app.get('/plano/edt/:id', async (req, res) => {

const plano = await Planos.findById(req.params.id)

res.render("plano/edt", {plano})

})

app.post('/plano/edt/:id', async (req, res) => {

const plano = await Planos.findByIdAndUpdate(req.params.id, req.body)

res.render("plano/edtok")

})

app.get('/usuario/edt/:id', async (req, res) => {

const usuario = await Usuario.findById(req.params.id)

res.render("usuario/edt", {usuario})

})

app.post('/usuario/edt/:id', async (req, res) => {

const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body)

res.render("usuario/edtok")

})

//site

app.get('/site', async (req, res) =>{
    const filmes = await Filmes.find()
    const series = await Series.find()
    res.render("site/index", {filmes, series})
})



//FIM ROTAS
app.listen(3007)
// Exporta o handler compatível com Vercel
export default app;