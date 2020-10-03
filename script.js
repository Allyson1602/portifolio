$(document).ready(function(){
    $('.projetos-close').hover(function(){
        // $('.grupo-projetos-md').toggle('slow');
        // $(this).toggle('slow');

        // $('.btn-projetos-md i').toggleClass('efeito-projetos-md');
    });

    $('.icone-mais-info').on('click', function(){
        $(this).css('color', 'white');
        $('#'+$(this).parent().attr('id')+' .projeto-descricao').toggle('slow');
    });

    var acc = $('.accordion');
    var i;
    for(i = 0; i<acc.length;i++){
        acc[i].addEventListener('click', function(){
            this.classList.toggle('active');

            var panel = this.nextElementSibling;
            if(panel.style.display === 'block'){
                panel.style.display = 'none';
            }else{
                panel.style.display = 'block';
            }
            if(panel.style.maxHeight){
                panel.style.maxHeight = null;
            }else{
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    }
});