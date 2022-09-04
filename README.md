# API_Marketplace

<h2>Funcionalidade do projeto</h2>
<p>Com o auxílio dessa ferramenta a gestão de produtos de um marketplace deixa de ser uma  tarefa complexa e passa ser uma tarefa simples com interação direta do usuário.
Ao gerenciar um marketplace via API o próprio usuário consegue criar, verificar, alterar e excluir os produtos comercializados, isso significa maior gestão para seu
negócio sem necessidade de depender de um terceiro para essa conexão.</p>

<h2>Técnicas e tecnologias utilizadas</h2>
<ul>
<li> Visual Studio Code </li>
<li> Node.js </li>
<li> Javascript </li>
<li> HTML </li>
<li> CSS </li>

</ul>
<h2>Desafio</h2>
<p>Como cliente eu necessito de uma aplicação para gerir meus produtos na plataforma de marketplace.</p>
<h2> Instalando dependências necessárias para rodar a aplicação </h2>
<h3>Acesse a pasta com os arquivos no terminal do seu VSCode e utilize as seguintes linhas de comando: </h3>
<ul>
<li> npm install </li>
<li> npm start </li>
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
    <h2><li>Listar itens</h2>
      <ul><li>método utilizado: GET</li>
        <li>rota : http://localhost:3000/itens</li>
        <li>é possível realizar um ou mais filtros, como por exemplo: http://localhost:3000/?categoria=camiseta  ou http://localhost:3000/?cor=verde&tamanho=p </li>
        <img src=https://user-images.githubusercontent.com/109998315/187091932-6e577c2c-fa28-4b7a-9405-21f50efb8f64.png>
        </li></ul>
    <h2><li>Buscar item</h2> 
       <ul><li>método utilizado: GET</li>
       <li>rota : http://localhost:3000/itens/id</li>
       <img src=https://user-images.githubusercontent.com/109998315/187092158-867f47b1-405b-4e76-ac94-34216883c8f2.png>
  </ul>
       <h2><li>Alterar item</h2>
       <ul>   <li>método utilizado: PUT</li>
              <li>rota : http://localhost:3000/itens</li>
     <p><b><li> Se a validação não encontrar o produto, o sistema retornará:</p></b>
       Status 400 – Bad Request com a mensagem: O item informado não existe.</li>
     <p><b><li>Se a validação encontrar o produto, o sistema retornará:</p></b></li>
         <ul>
            <li>id: Number;  
            <li>categoria: String</li>
            <li>tipo: String</li>
            <li>tamanho: Number</li>
            <li>cor: String</li>
            <li>valor: Number</li>
            <li>estoque: Number</li>
          </ul>
<img src=https://user-images.githubusercontent.com/109998315/187092619-6041a3c5-b2b4-4849-8dc2-fb997659cb22.png>
<li>E a mensagem: Item atualizado</li> 
<li>Status 200 - OK</li>
</ul>
</ul>
<ul>
      <h2><li>Excluir item</h2>
       <ul> <li>método utilizado: DELETE</li>
            <li>rota : http://localhost:3000/itens/id</li>
            <li>Se não existir: Retornará o status 400 - Bad Request com a mensagem: O item informado não existe.</li>
            <li> Se existir: Retornará o status 200 – OK com a mensagem: Item de id (número) removido com sucesso.</li>
       </ul>
 <img src=https://user-images.githubusercontent.com/109998315/187092915-a35a439c-8283-4c53-9f32-eaeb1037b3f4.png>

  <h3> Ana Raquel Hermes</h3>
  <b>https://github.com/AnaHermes</b> 
  <h3>  Larissa Vardiero </h3> 
  <b>https://github.com/LariStar</b>
  <h3> Marcelo Augusto Silva</h3>
  <b>https://github.com/Wowcelo</b>
  <h3>   Vitor Labres </h3> 
  <b>https://github.com/vitowlabres</b>
