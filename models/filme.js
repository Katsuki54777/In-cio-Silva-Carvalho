import conexao from "../config/conexao.js";

const FilmesSchema = new conexao.Schema({
  nome: {
    type: String,
    required: true
  },
  duracao: {
    type: Number,
    required: true
  },
  ano: {
    type: Number,
    required: true
  },
 dublagem: {
    type: Boolean,
    required: true
  },
   foto: {type: Buffer,
  get: (valor) => {
           if (!valor) return null;
             return `data:image/png;base64,${valor.toString('base64')}`;
  }
  }
});

const Filmes = conexao.model("Filmes", FilmesSchema);

export default Filmes;
