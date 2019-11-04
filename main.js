$('document').ready(()=>{

    //animacion de menu
    $('.nav-item').on('mouseenter',event=>{        
        $(event.currentTarget).find('.list-hr').animate({
            opacity:'1',
            width:'20%'
        },200);
    }).on('mouseleave',()=>{        
        $(event.currentTarget).find('.list-hr').animate({
            opacity:'0',
            width:'80%'
        },200);
    })

    //Modal
    $('.hovereffect').on('click',event=>{
        let dir = $(event.currentTarget).find('.img-fluid').attr('src');
        $('.modal-content').find('.img-fluid').attr('src',dir)        
    })

    /*var mediaquery = window.matchMedia("(max-width: 768px)");    
    
    //Funcion de verificacion del ancho de la pantalla    
    function eve(mediaquery){
        if (mediaquery.matches) {
            // mediaquery es 768
            $('.hovereffect').on('click',event=>{
                let dir = $(event.currentTarget).find('.img-fluid').attr('src');
                $('.modal-content').find('.img-fluid').attr('src',dir)        
            })            
        }
        if (!mediaquery.matches){
            // mediaquery no es 768
            $('.hovereffect').off('click')
        }
    };
    
    mediaquery.addListener(eve);

    eve(mediaquery); //Condicion de inicio.*/

});

