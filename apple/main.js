let $images = $('#thumb>img')

$($images).eq(0).addClass('active').siblings().removeClass('active')  
for(let i =0;i<$images.length;i++){
    $($images[i]).on('click',function(a){
        let index = $(a.currentTarget).index()
        $images.eq(index).on('click',function(){
            $('.images').css({ transform: `translateX(${-(index)*920}px)`})
            $($images).eq(index).addClass('active').siblings().removeClass('active')  
        })
    })
}


// $images.eq(0).on('click',function(){
//     $('.images').css({ transform: 'translateX(0px)'})
// })
// $images.eq(1).on('click',function(){
//     $('.images').css({ transform: 'translateX(-920px)'})
// })
// $images.eq(2).on('click',function(){
//     $('.images').css({ transform: 'translateX(-1840px)'})
// })
// $images.eq(3).on('click',function(){
//     $('.images').css({ transform: 'translateX(-2760px)'})
// })