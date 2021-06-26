window.onbeforeunload = function () {
    window.scrollTo(0,0);
};
  
window.onload = function(){
    var pageLoader = document.getElementById('pageLoader');
    
    $('body').removeClass('remove');
    pageLoader.style.visibility = 'hidden';
    pageLoader.style.opacity = '0';
}

