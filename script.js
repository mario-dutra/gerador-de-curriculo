
const botao = document.querySelector("#modelo1");

botao.addEventListener("click", function (e) {
   e.preventDefault();
   const adicionar = document.getElementById('foto');
   adicionar.classList.add('foto_personalizada');

   const image = document.querySelector('#preview');
   image.classList.remove('img');

   const topo_p = document.querySelector('#topo');
   topo_p.classList.add('novo_t');

   const nome_p = document.querySelector('#nome2');
   nome_p.classList.add('nome2_p');

   const box_informacao = document.querySelector('#box-informacoes');
   box_informacao.classList.remove('box_informacao');

   const box_experiencias = document.querySelector("#experiencias");
   box_experiencias.classList.remove('box_experiencias');
});


const botao2 = document.querySelector("#modelo2");

botao2.addEventListener("click", function (e) {
   e.preventDefault();
   const adicionar = document.getElementById('foto');
   adicionar.classList.remove('foto_personalizada');

   const image = document.querySelector('#preview');
   image.classList.add('img');

   const topo_p = document.querySelector('#topo');
   topo_p.classList.remove('novo_t');

   const nome_p = document.querySelector('#nome2');
   nome_p.classList.remove('nome2_p');

   const box_informacao = document.querySelector('#box-informacoes');
   box_informacao.classList.add('box_informacao');

   const box_experiencias = document.querySelector("#experiencias");
   box_experiencias.classList.add('box_experiencias');
});


  

const btn = document.querySelector('.enviar');
 
 

   btn.addEventListener("click", function (e) {
   e.preventDefault();

   const var_form = ["nome", "endereco", "email", "telefone", "texto", "curso", "graduacao", "inicio_curso", "fim_curso", "habilidades", "data_e_s_1", "empresa1", "data_e_s_2", "empresa2", "data_e_s_3", "empresa3"];
   const ids = ["#nome", "#endereco", "#email", "#tel", "#texto", "#curso", "#graduacao", "#inicio-curso", "#fim-curso", "#habilidades", "#data_e_s_1", "#empresa1", "#data_e_s_2", "#empresa2", "#data_e_s_3", "#empresa3"];
   const retorno = ['nome2', 'endereco2', 'email2', 'tel2', 'texto2', 'curso2', 'graduacao2', 'inicio-curso2', 'fim-curso2', 'habilidades2', 'data_e_s_1_1', 'empresa_1_1', 'data_e_s_1_2', 'empresa_1_2', 'data_e_s_1_3', 'empresa_1_3'];
   const experiencia = ["experiencia1", "experiencia2", "experiencia3", "c_complementar_1", "c_complementar_2", "c_complementar_3"];
   const exp_id = ["#experiencia1", "#experiencia2", "#experiencia3", "#c_complementar_1", "#c_complementar_2", "#c_complementar_3"];
   const exp_re = ['experiencia1_1', 'experiencia1_2', 'experiencia1_3', 'c_complementar1', 'c_complementar2', 'c_complementar3'];

   for (let cont = 0; cont < experiencia.length; cont++) {

      experiencia[cont] = document.querySelector(exp_id[cont]).value;
      document.getElementById(exp_re[cont]).innerHTML = experiencia[cont].replace(/\n/g, "<br>");

   }


   for (let cont = 0; cont < var_form.length; cont++) {

      var_form[cont] = document.querySelector(ids[cont]).value;
      document.getElementById(retorno[cont]).innerHTML = var_form[cont];

   }



});


// gerar pdf



const btnGerador = document.querySelector("#gerar-pdf");



btnGerador.addEventListener("click", (e) => {
   e.preventDefault();
   //conteudo do pdf

   const content = document.querySelector("#box-geral-curriculo")

   //configuração do arquivo final pdf

   const options = {
      margin: [2, 2, 0, 2],
      filename: "arquivo.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
   }

   //gerar e baixar o pdf

   html2pdf().set(options).from(content).save();

});


// mudar cor


let myButton = document.querySelectorAll('.botoes > div');

myButton.forEach(function(key){
    key.addEventListener('click', function(){
        removeStyles();
        this.setAttribute('class', 'buttonClicked');
    });
})

function removeStyles(){
    for(let i = 0;i < myButton.length;i++){
        document.querySelectorAll('.botoes > div')[i].removeAttribute('class');
    }
}