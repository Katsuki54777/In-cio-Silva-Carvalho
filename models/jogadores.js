import conexao from "../config/conexao.js";
import Times from "./time.js";

const JogadoresSchema = new conexao.Schema({
  nome: {
    type: String,
    required: true
  },
   nometi: {
    type: String,
    required: true
  },
  posicao: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  altura: {
    type: Number,
    required: true
  } 
});

const Jogadores = conexao.model("Jogadores", JogadoresSchema);

export default Jogadores;