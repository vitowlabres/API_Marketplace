import { app } from './src/routes/itensRoutes.js';


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log( `Servidor escutando em http://localhost:${port}`)
})