const express = require('express');

const routes = express.Router();
const users = [{
    id:1,
    name:'Tiago',
    email:'tiago.magalhaes@aluno.uece.br',
    password: '123456',
    confirmPassword: '123456'
}];

routes.post('/login', (req,res)=>{
    const { email, password, confirmPassword} = req.body;

    const user = users.find(user => user.email === email && user.password === password && user.confirmPassword === confirmPassword);
    

    if (user){
        return res.status(200).json({message: "Usuário logado com sucesso"})
    } else if(confirmPassword != password){
        return res.status(401).json({message: "Suas senhas não correspondem"})
    } else if(!password || !email || !confirmPassword){
        return res.status(401).json({message: "Preencha os campos!"});
    } else
    {
        return res.status(401).json({message: 'Credenciais inválidas'});
    }
    
});

module.exports = routes;