import mongoose from "mongoose";

const url = "mongodb+srv://aluno:aluno123@cluster0.o5akqbr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const conexao = await mongoose.connect(url)

export default conexao;