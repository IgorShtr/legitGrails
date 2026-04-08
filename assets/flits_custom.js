
/****PLEASE DON'T MAKE CHANGES IN THIS FILE IT'S AFFECT THE CODE IF YOU NEED ANY HELP PLEASE CONTACT TO FLITS TEAM support@getflits.com ****/
(function(Flits) {
  /* To load js in all pages */
  if(window.flitsObjects.allCssJs.socialLoginJs){
        Flits.LoadStyleScript('socialLoginJs',window.flitsObjects.allCssJs.socialLoginJs.url);
    }
  if(Flits.Metafields.IS_STORE_CREDIT_PAID && Flits.Metafields.is_store_credit_enable){
  	Flits.LoadStyleScript('cartJs',window.flitsObjects.allCssJs.cartJs.url);
  }
  Flits(document).on('Flits:Navigation:Loaded', function(event){
    var settings = event.detail.settings;
    var listToDelete = ['Delivery Address'];
    for (var i = 0; i < settings.navs.length; i++) {
      var obj = settings.navs[i];
      if (listToDelete.indexOf(obj.title) !== -1) {
        settings.navs.splice(i, 1);
        i--;
      }
    }
  });
  Flits('[data-order-status-url]').each(function(index,item){
    var url = Flits(item).attr('data-order-status-url');
	var loc = new URL(url);
    url = loc.origin +loc.pathname.replace('authenticate','');
    Flits.ajax({
      url: url,
      method: "get",
      success: function (res) {
		var token = res.split('Shopify.Checkout.token')[1].split(';')[0].trim().replace('=','').trim().replace(/"/g,'');
        console.log(token)
      }
    });
  });
}(Flits));
