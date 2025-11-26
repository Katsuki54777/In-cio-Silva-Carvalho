import conexao from "../config/conexao.js";


const SeriesSchema = new conexao.Schema({
  nome: {
    type: String,
    required: true
  },
  temporada: {
    type: Number,
    required: true
  },
  ano: {
    type: Number,
    required: true
  } ,
  autor: {
    type: String,
    required: true
  },
  foto: {type: Buffer,
  get: (valor) => {
           if (!valor) return null;
             return `data:image/png;base64,${valor.toString('base64')}`;
  }
  }
});



const Series = conexao.model("Series", SeriesSchema);


export default Series;  