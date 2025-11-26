import conexao from "../config/conexao.js";

const TorneioSchema = new conexao.Schema({
  nome: {
    type: String,
    required: true
  },
  jogo: {
    type: String,
    required: true
  },
  periodo: {
    type: String,
    required: true
  },
  premiacao: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

const torneios = conexao.model("Torneio", TorneioSchema);

export default torneios;
