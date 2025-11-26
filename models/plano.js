import conexao from "../config/conexao.js";


const PlanosSchema = new conexao.Schema({
  nome: {
    type: String,
    required: true
  },
  mensalidade: {
    type: Number,
    required: true
  },
  anuidade: {
    type: Number,
    required: true
  },
});

const Planos = conexao.model("Planos", PlanosSchema);

export default Planos;
