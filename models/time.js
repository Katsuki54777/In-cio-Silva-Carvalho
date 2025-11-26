import conexao from "../config/conexao.js";

const TimeSchema = new conexao.Schema({
  nome: {
    type: String,
    required: true
  },
    cidade: {
    type: String,
    required: true
  }
});

const Time = conexao.model("Time", TimeSchema);

export default Time;