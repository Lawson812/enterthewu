    function bringThePain(){
$.get('/api/random', function(data){
lyrics = data;
         
    $('#randomLyric').text(lyrics)
});

    
    };
var url = "imgs/wutangisforthechildren.mp3"
$('button').on('mouseover',function(){
    $(this).css('opacity', '0.7','border-color','grey');
}).on('mouseleave',function(){
    $(this).css('opacity','1','border-color','white')
}).on('click', function(){
       var audio = new Audio(url);
			audio.play();
    
});

