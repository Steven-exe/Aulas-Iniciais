

/*
var minhaPromise = function () {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/Steven-exe');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else{
                    reject('Erro na aquisiçao');
                }
            }
        }

    })
}


    function verificaIdade(idade){
        return new Promise(function(resolve, reject){
            setTimeout(()=>{
                if (idade>= 18){
                    resolve()
                } else {
                    reject();
                }
            },2000)
        })
    }

    verificaIdade(20)
        .then(function() {
            console.log("Maior que 18")
        })
        .catch(function() {
            console.log("Menor que 18")
        })

        axios.get('https://api.github.com/users/Steven-exe')
    .then(function(response){
        console.log(response.data.login);
    })
    .catch(function(error) {
        console.warn(error);
    });
*/



function pegaGit(){
    var bDados = document.querySelector('#gitApi ul').innerHTML= ''
    bDados.innerHtml= '';
    var usuario = document.querySelector('#gitApi input').value
    axios.get('https://api.github.com/users/'+usuario+'')
        .then(function(response){
                var repo = {login:'', ava:'',html:'', repos:''}
                repo.login = response.data.login;
                repo.ava = response.data.avatar_url;
                repo.html = response.data.html_url;
                repo.repos = response.data.repos_url;
                var foto = document.createElement('img')
                foto.setAttribute('src', repo.ava);
                foto.setAttribute('alt', repo.login+' user photo')
                var bDados = document.querySelector('#gitApi ul')
                bDados.appendChild(foto)
                
                for (var inf in repo){
                        if(repo[inf] !== repo.ava){
                            var cDado = document.createElement('li')
                            var dado = document.createTextNode(repo[inf])
                            cDado.appendChild(dado)
                            bDados.appendChild(cDado);
                    }
                }
                    console.log(repo)
                
                //bDados.appendChild(dados)
                //console.log(verUsu, verAva, verHtml, verRep);
            })
        .catch(function() {
                console.warn("Usuario não encontrado!");
                alert("Usuario não encontrado")
            });
        
    document.querySelector('#gitApi input').value=''



}



var linkElement = document.createElement("a");
    linkElement.setAttribute('href', "https://www.youtube.com/watch?v=K6xaSrNuB5k&feature=youtu.be", '_blank')
    linkElement.setAttribute('title', "meu comeco de site")

    var textElement = document.createTextNode('Acessar site da live no YT');
        linkElement.appendChild(textElement);

        btnCriar = document.querySelector('button.criarQuad')

        function getRandomColor(pos) {
            var letters = "0123456789ABCDEF";
            var color = "#";
        
              for (var i = 0; i < 6; i++) {
                  color += letters[Math.floor(Math.random() * 16)];
              }
          return color;
          }

//-------------------Fazer quadrados----------------------------
    var cxVerd = document.querySelector('#caixa')
    var btnElement = document.querySelector('.criarQuad')

    var listQuad = [];

     function colocarAT(pos){
         var pegador = document.querySelector('#'+pos+'')
         pegador.setAttribute('style', 'background-color:'+getRandomColor()+'')
     }
        
    btnElement.onclick = function (){
        var iden = "A"+Math.floor(Math.random() * 192837)
        console.log(iden) 
        var mod = document.createElement('div')
        var cor = getRandomColor();
        mod.setAttribute('class', 'quadrado')
        mod.setAttribute('id', ''+iden+'')
        mod.setAttribute('style', 'background-color:'+cor+'')
        mod.setAttribute('onmouseover', 'colocarAT("'+iden+'")')
        cxVerd.appendChild(mod);

        listQuad.push(iden)
        }



//------------------ Lista -------------------------

    var nomes = JSON.parse(localStorage.getItem('list_toDos')) || [];

    var pLista = document.querySelector("#lista");
    var blocoLista = document.querySelector("#lista ul");
    var barraText = document.createElement('input');
        barraText.setAttribute('type', "text");
            barraText.setAttribute('name', "nome");


    var btLista = document.createElement("button") 
            btLista.setAttribute("onClick", "adicionar()")
                barraText.setAttribute("id", "barr")

    var texbt = document.createTextNode("Adicionar")
        btLista.appendChild(texbt);
            pLista.appendChild(barraText);
                pLista.appendChild(btLista);

        function adicionar(){
  var pegText = document.querySelector('#lista input').value;
  //var segText = pegText.value;
  nomes.push(pegText);
  document.getElementById('barr').value = "";

  listNomes();

  console.log("foi em Adicionar()");

  svOnStorage();
        }

        function listNomes(){

        blocoLista.innerHTML = '';
        console.log("Apagou lista antiga");
            
        for (nome of nomes){
            var bloco = document.createElement("li");
            var textList = document.createTextNode(nome);
            var btnExcluir = document.createElement("a");
            var btnExTxt = document.createTextNode("Excluir");
            btnExcluir.appendChild(btnExTxt);

            btnExcluir.setAttribute("href", "#");

            var pos = nomes.indexOf(nome);
            btnExcluir.setAttribute('onclick', 'deleteNome('+pos+')')

            blocoLista.appendChild(bloco);
            blocoLista.append(btnExcluir);
            bloco.appendChild(textList);

                console.log("printou listNomes")
            }
        }

        function deleteNome(pos){
            nomes.splice(pos, 1);
            listNomes();
            svOnStorage();
        }

        function svOnStorage(){
            localStorage.setItem('list_toDos', JSON.stringify(nomes));
        }

        listNomes();


