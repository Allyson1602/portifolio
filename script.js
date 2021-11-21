$(document).ready(function(){

    $('.icone-mais-info').on('click', function(){
        $(this).css('color', 'white');
        $('#'+$(this).parent().attr('id')+' .projeto-descricao').toggle('slow');
    });

    var acc = $('.accordion');
    var i;
    for(i = 0; i<acc.length;i++){
        acc[i].addEventListener('click', function(){
            this.classList.toggle('active');

            var painel = this.nextElementSibling;
            if(painel.style.display === 'block'){
                painel.style.display = 'none';
            }else{
                painel.style.display = 'block';
            }
            if(painel.style.maxHeight){
                painel.style.maxHeight = null;
            }else{
                painel.style.maxHeight = painel.scrollHeight + 'px';
            }
        });
    }
});