import Imagem from "./imagem/ronaldinho.jpg"
import Img from "./imagem/toninhooo.jpg"
import ProfileImage from './components/ProfileImage'
import Comentario from "./components/Comentario"
import './App.css';

function App() {
  return (
    <div className="App">

      <ProfileImage 

      
      titulo="Qual foi o desfecho da prisão de Ronaldinho no Paraguai por passaporte falso?"   

      imagem={Imagem}
      descrição="
      Ao fim do processo, o Ministério Público do Paraguai chegou a conclusão que Ronaldinho não sabia da origem
       ilegal da documentação apresentada, apenas Assis tinha esse conhecimento, mas colaborou nas investigações.
        Nesse sentido, o MP decidiu que não apresentaria novas denúncias contra os irmãos e estabeleceu medidas cabíveis que a 
        dupla deveria cumprir para não ficarem pendentes com a Justiça No total, o camisa 10 e o irmão ficaram presos 171 dias em Assunção, 
        cerca de seis meses. No entanto, eles passaram uma parte do tempo em um hotel na capital do país, cumprindo prisão domicilar."

       categoria="A prisão de Ronaldinho e seu irmão Assis completou três anos em 2023"


       descrição2="
       

Ronaldinho e Assis chegaram ao Paraguai no dia 4 de março de 2020 para realizar ações publicitárias de um livro, sendo recebidos com festa logo no aeroporto de Assunção. Eles apresentaram passaportes falsos logo no desembarque, que afirmavam que os dois eram paraguaios naturalizados, o que é mentira. Os policiais notaram a veracidade duvidosa dos documentos na hora, mas optaram por não realizar as prisões de imediato para não gerar um grande alvoroço no local.

Na madrugada do dia 4 para 5, uma equipe policial chegou no local onde os dois brasileiros estavam hospedados para realizar uma investigação, onde encontraram os dois passaportes falsificados. Tanto Ronaldinho como Roberto foram levados à uma delegacia para prestar depoimentos.

O Ministério Público culpou o empresário Wilmondes Sousa Lira, que teria sido acusado de confeccionar os documentos falsificados, e as paraguaias María Isabel Galloso e Esperanza Apolonia Caballero por participarem do esquema. Todavia, Ronaldinho e Roberto Assis teriam sido enganados e, por colaborarem com detalhes ricos à investigação e admitirem culpa no caso, foram enquadrados no esquema de critério de oportunidade pela promotoria paraguaia, que os deixariam livres de qualquer processo judicial no país.
       
       "
       
      />
     < div className="coment">


      <Comentario
   
      img={Img}
      
      nome="Toninho tornado:
      "


      comentario="Iveto Sangalo
      Mato Atlântico
      Casos Bahio
      Rito Cadilaco
      Madono
      Patrício Poeto
      Sansungo
      Tubaíno
      Valesco Popozudo
      Braganço Paulisto
      Caldo de Cano
      Chora na Tora"


      />



     </div>
    </div>

 


  );
}

export default App;