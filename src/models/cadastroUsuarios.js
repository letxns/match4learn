class Cadastro {
    constructor(nome, email, senha, cep, logradouro, numero, bairro, cidade, uf){
        try{
            this.nome = nome;
            this.email =  email;
            this.senha =  senha;
            this.cep =  cep;
            this.logradouro =  logradouro;
            this.numero =  numero;
            this.bairro =  bairro;
            this.cidade =  cidade;
            this.uf =  uf; 
            
            if(typeof nome != 'string' || typeof cep != 'number'|| typeof numero != 'number'){
                throw new Error("Por gentileza, verifique os dados informados.")
                
            }
        }catch(erro){
            window.alert(erro)
        }
    }
}
/*
let teste1 = new Anotacoes("teste", "ola");
let teste2 = new Anotacoes(5, "ola");*/