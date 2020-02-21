
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


