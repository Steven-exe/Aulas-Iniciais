
            
            const aula1 = {
            //javascript ** Sempre no final para carregar todos os outros elemtentos para o JS ler...
             
             /*----------------------------------------------------------
             console.log("Hello World")
             var nome="Estevan";
             var idade = 20;
             var peso = 80.6
             var humano = true;

             var alunos = ["Estevan", "Leroy", "Wanderson"]

             var aluno ={
                 nome: "Estevan",
                 idade: 20,
             }

             console.log(alunos)
             ----------------------------------------------------------*/
            
                /*-------------------------------------------------------
                function retornasexoIF(sexo){
                    if (sexo === "M"){
                        return "Masculino"
                    } else if (sexo==="F"){
                        return "Feminino"
                    } else {
                        return  "Outro"
                    }
                }
                retornasexoIF("M")

                function retornarSexoSwitch(sexo){
                    switch (sexo) {
                        case 'M':
                            return "Masculino";
                        
                        case "F":
                            return "Feminino";
                    default:
                        return "Outro";
                    }
                }

                console.log(retornarSexoSwitch("F"));

                var sexo = "M";

                let teste = (sexo === 'M') ? 'Masculino' : "Feminino"

                console.log(teste) 
                ------------------------------------------------------------*/

                /*----------------------------------------------------------
                for (var i; i<100;i++){
                    console.log(i);
                }

                 var a = 3541534654983218
                
                while (a>=10 ){
                    console.log(a);
                    a = a*1/2;
                }

                 -----------------   setIntervel setTimeout-------------

                 let num = 0

                    function exibiralgo(){
                    
                        num++

                        console.log("hello world - "+num)
                    }
                    setInterval(exibiralgo, 3000);

                        Loga uma frase em console.log

                        var endereco = {  
                       rua: "Rua dos pinheiros",
                       numero: 1293,
                       bairro: "Centro",
                       cidade: "São Paulo",
                       uf: "SP"
                        };

                        const retorno = "O usuário mora em " + endereco.cidade +" / " + endereco.uf + ", no bairro " +endereco.bairro+ ", na rua "+ "\""+ endereco.rua+"\" com nº "+endereco.numero+"."
                        console.log(retorno);

                        Determina os numeros pares entre um intervalo de numeros com "x % 2" se 0 = par, se 1 = impar

                        function pares(x, y) {
                        if (x<y){
                            for ( x; x<y ;x++){
                                if (x % 2 == 0){
                                    console.log(x);
                                }
                            }
                        } else if (x>y){
                            for ( y; x>y ;y++){
                                if (y % 2 == 0){
                                    console.log(y);
                                }
                            }
                        }
                          
                    }
                          
                    pares(321, 31);

                    --------------Verifica o texte de um array com "indexOf"---------

                     function temHabilidade(array, text){
                    if (array.indexOf(text) === -1){
                        return false
                    } else {
                        return true
                    }
                
                }
                
                var skills = ["JavaScript", "ReactJS", "React Native"];

                console.log(temHabilidade(skills, "ReactJS"));

                -------------------------simples funcção de uso do Switch Case

                function experiencia(anos) {
                      switch(anos){
                          case 0,1: return "Iniciante";
                          case 2,3: return "Intermediário";
                          case 4,5,6: return "Avançado";
                          default:return "Jedi Master";

                      }
                    
                    }
                    
                    var anosEstudo = 3;
                    console.log(experiencia(anosEstudo));

                    // De 0-1 ano: Iniciante
                    // De 1-3 anos: Intermediário
                    // De 3-6 anos: Avançado
                    // De 7 acima: Jedi Master

                -------------------Função que verifica toda a Array Usuarios e lista seus objetes com metodo .join()

                    var usuarios = [
                          { 
                            nome: "Diego",
                            habilidades: ["Javascript", "ReactJS", "Redux"]
                            },

                          {
                            nome: "Gabriel",
                            habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
                          }
                          ];

                          function listaHab(array){
                              for(var i = 0; i <= array.length;i++){
                                  if (array[i] != undefined){
                                      console.log("O "+array[i].nome+" possui as habilidades: "+array[i].habilidades.join(', ')+".")
                                  }
                              }
                          }

                          listaHab(usuarios);

                    */
                        }


                        