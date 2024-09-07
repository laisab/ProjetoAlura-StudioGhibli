function pesquisar(){
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    // Obtém o valor digitado pelo usuário no campo de pesquisa.
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // Verifica se o campo de pesquisa está vazio. Se estiver, exibe uma mensagem de erro e interrompe a função.
    if(!campoPesquisa){
      section.innerHTML = "<p><b>Nada foi encontrado. Você precisa digitar o nome do filme ou do diretor.</b></p>";
      return;
    }

    // Converte o termo de pesquisa para minúsculas para facilitar a comparação.
    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let nomeFilmePort = "";
    let nomeFilmeRom = "";
    let diretor = "";
    let sinopse = "";
    let tags = "";
  
    // Itera sobre cada filme na lista de dados.
    for(let dado of dados){
      // Converte os campos de nome do filme, diretor e sinopse para minúsculas para facilitar a comparação.
      nomeFilmePort = dado.nomeFilmePort.toLowerCase();
      nomeFilmeRom = dado.nomeFilmeRom.toLowerCase();
      diretor = dado.diretor.toLowerCase();
      sinopse = dado.sinopse.toLowerCase();
      tags = dado.tags.toLowerCase();

      // Verifica se o termo de pesquisa está presente em algum dos campos do filme.
      if(nomeFilmePort.includes(campoPesquisa) || nomeFilmeRom.includes(campoPesquisa) ||diretor.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
          <div class="item-resultado">
            <h2>${dado.nomeFilmePort}</h2>
            <img src="${dado.imagem}" alt="Poster do filme">
            <h3>${dado.nomeFilmeJap} (${dado.nomeFilmeRom}) - ${dado.ano}</h3>
            <p class="descricao-meta"><b>Diretor</b>: ${dado.diretor}</p>
            <p class="descricao-meta"><b>Sinopse</b>: ${dado.sinopse}</p>
            <p><a href="${dado.trilhaSonoraSpotify}" target="_blank">Trilha Sonora - Spotify</a></p>
            <p><a href="${dado.trilhaSonoraYTMusic}" target="_blank">Trilha Sonora - YouTube Music</a></p>
          </div>
        `;
      }
    }

    // Verifica se foram encontrados resultados. Se não, exibe uma mensagem informando que nada foi encontrado.
    if(!resultados){
      resultados = "<p><b>Nada encontrado.</b></p>";
    }

    // Atualiza o conteúdo da seção de resultados com os resultados da pesquisa.
    section.innerHTML = resultados;
}

function limpar(){
  // Obtém o elemento HTML do campo de pesquisa e limpa seu valor.
  document.getElementById("campo-pesquisa").value = "";
  // Obtém a seção HTML onde os resultados da pesquisa são exibidos e limpa seu conteúdo.
  document.getElementById("resultados-pesquisa").innerHTML = "";
}