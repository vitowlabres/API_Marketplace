# API_Marketplace

<h2>Funcionalidade do projeto</h2>

<p>Com o auxílio dessa ferramenta a gestão de produtos de um marketplace deixa de ser uma  tarefa complexa e passa ser uma tarefa simples com interação direta do usuário.
Ao gerenciar um marketplace via API o próprio usuário consegue criar, verificar, alterar e excluir os produtos comercializados, isso significa maior gestão para seu
negócio sem necessidade de depender de um terceiro para essa conexão.</p>

[imagem imsomnia]


<h2>Técnicas e tecnologias utilizadas</h2>

<ul>
<li> Visual Studio Code </li>
<li> Nodemon </li>
<li> Express </li>
<li> Insomnia </li>
<li> Chalk </li>
</ul>

<h2>Desafio</h2>

<p>Como cliente eu necessito de uma aplicação para gerir meus produtos na plataforma de marketplace.</p>

<h2> Instalando dependências necessárias para rodar a aplicação </h2>
<h3>Acesse o terminal do seu VSCode e utilize as seguintes linhas de comando: </h3>

<ul>
<li> Nodemon</li>
             npm install nodemon
<li> Express </li>
           npm install express
<li> Chalk </li>
        npm install chalk
</ul>

<h1>Recursos disponíveis</h1>
<ul>
<h2><li> Adicionar item </h2>
   <ul> <li>método utilizado: POST</li>
        <li>rota : http://localhost:3000/itens</li>
        <li> Parâmetros à serem informados:
        <ul>    
                <li>categoria: String</li>
                <li>tipo: String</li>
                <li>tamanho: Number</li>
                <li>cor: String</li>
                <li>valor: Number</li>
                <li>estoque: Number</li>
 <img src=https://user-images.githubusercontent.com/109998315/187091063-5a91678c-52af-4c74-8d3d-743ddb1309d1.png>
        </ul>
        <li>
        <p> O id do produto será criado automaticamente de forma sequencial.
Ao enviar as informações será feita uma validação se o produto já existe no banco de dados.

Se o produto existir: Retornará o status 400 - Bad Request com a mensagem: O id informado já existe.

Se o produto não existir: Retornará o status 201 Created com a mensagem: Item do tipo (tipo informado) adicionado ao marketplace no id (criado automaticamente).
</p>

                
</ul>
    </li>





