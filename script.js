window.onload = function() {
    $('.pagamento').hide();
}



//Pega os dados do produto
function dadosProduto(produto){
    //dados da imagem
    id_imagem = '#imagem'+produto
    imagem = $(id_imagem).attr('src');
    console.log(imagem)

    //dados da descrição
    id_descricao = '#descricao'+produto
    descricao = $(id_descricao).text()
    console.log(descricao)

    //dados do preço (str e float)
    id_preco = '#preco'+produto
    preco = $(id_preco).text()
    let i
    preco_int = parseFloat(preco.slice(2,i))
    console.log(preco_int)
}

//mostra a janela de pagamento e oculta o container
function calculaParcelas(preco_int){
    let i
    parcela1 = preco_int
    parcela2 = preco_int/2
    parcela3 = (preco_int/3 + (preco_int/3)*0.3)
    parcela6 = (preco_int/6 + (preco_int/6)*0.3)
    parcela12 = (preco_int/12 + (preco_int/12)*0.3)

    document.getElementById('1x').innerHTML = "1X de R$"+parcela1.toFixed(2)+" sem juros"
    document.getElementById('2x').innerHTML = "2X de R$"+parcela2.toFixed(2)+" sem juros"
    document.getElementById('3x').innerHTML = "3X de R$"+parcela3.toFixed(2)+" com juros"
    document.getElementById('6x').innerHTML = "6X de R$"+parcela6.toFixed(2)+" com juros"
    document.getElementById('12x').innerHTML = "12X de R$"+parcela12.toFixed(2)+" com juros"


}

function comprarProduto(produto){
    $('.container').hide();
    $('#compraFinalizada').hide();
    $('.pagamento').show();
    $('#pix').hide();
    $('#credito').hide();


    dadosProduto(produto)
    document.getElementById('imagemDescritiva').src = imagem
    document.getElementById('textoDescritivo').innerHTML = descricao
    document.getElementById('precoDescritivo').innerHTML = preco
    calculaParcelas(preco_int)



}

function finalizarCompra(event){
    event.preventDefault();
    $('#compra').hide();
    $('#compraFinalizada').show();
}


//fecha a janela de pagamento
function closeCompra(){
    $('.pagamento').hide();
    $('.container').show();
}

//mostra o método de pagamento por pix
function compraPIX(){
    if($('#credito').is(':visible')){
        $('#credito').hide();
        $('#pix').show();
    }
    else{
        $('#pix').show();
    }
}

//mostra o método de pagamento por cartão de crédito
function compraCredito(){
    if($('#pix').is(':visible')){
        $('#pix').hide();
        $('#credito').show();
    }
    else{
        $('#credito').show();
    }
}



//Máscara para o input do CPF


$(document).ready(function() {
    var elemento = document.getElementById('cpf');
    var mascaras = {
        mask: '000.000.000-00' 
      };
      IMask(elemento, mascaras);
});

$(document).ready(function() {
    var elemento = document.getElementById('numero');
    var mascaras = {
        mask: '0000 0000 0000 0000'
      };
      IMask(elemento, mascaras);
});

$(document).ready(function() {
    var elemento = document.getElementById('validade');
    var mascaras = {
        mask: '00/00'
      };
      IMask(elemento, mascaras);
});

$(document).ready(function() {
    var elemento = document.getElementById('codigo');
    var mascaras = {
        mask: '000'
      };
      IMask(elemento, mascaras);
});

