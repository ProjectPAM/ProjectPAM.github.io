(function(d, s, id) 
{
	var js, fjs = d.getElementsByTagName(s)[0];
	
	if (d.getElementById(id)) return;
	
	js = d.createElement(s); js.id = id;
	
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0&appId=1539245689627931";
	
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
	
!function(d,s,id)
{
	var js,fjs=d.getElementsByTagName(s)[0], p=/^http:/.test(d.location)?'http':'https';
	
	if(!d.getElementById(id))
	{
		js=d.createElement(s);
		
		js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
		
		fjs.parentNode.insertBefore(js,fjs);
	}
}(document, 'script', 'twitter-wjs');