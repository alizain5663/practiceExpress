const dotenv= require ('dotenv')
let myEnvironment ={}
if (process.env.NODE_ENV==='tesing'){
    myEnvironment=dotenv.config({path:`${__dirname}/../routes/application-testing-environmaent.env`})

}