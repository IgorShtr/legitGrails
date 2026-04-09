document.addEventListener("DOMContentLoaded",
  function(){
    $( ".product_faq-item" ).on( "click", function() {
      if ($(this).hasClass("active")) {
        $(".product_faq-item").removeClass("active");
      } else {
        $(".product_faq-item").removeClass("active");
        $(this).addClass("active");
      }
    });
   }
  )