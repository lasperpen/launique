function llike(b,a){var d=a.innerHTML;a.innerHTML="Loading...";a.onclick="#";$.get(b,function(){a.className+=" Lnovote";a.innerHTML=d;var c=a.nextSibling,b=parseInt(/\d+/.exec(c.innerHTML)[0])+1;c.innerHTML=c.innerHTML.replace(/\d+/,b)})};

function init_l_like_system() {
	for(var x = $('.vote'), i = 0, vote; (vote = x[i++]); ) {
		var count = 0, plus = 0, bar = $('.vote-bar', vote)[0], button = $('.vote-button', vote)[0];			
		if (bar) {
			var info = bar.title.match(/\d+/g);
			plus = Math.round(parseInt( info[1] ) * parseInt( info[0] )) / 100;
		}
		
		button = button ? '<span onclick="llike(\'' + button.firstChild.href + '\',this);" class="Llike">' + las_like_system.vote_singular + '</span>' : '<span class="Llike Lnovote">' + las_like_system.vote_singular + ' rồi.</span>';		
		var total_button = '<div class="Lvote">' + button + '</div>';
		if(las_like_system.callback) las_like_system.callback(vote, total_button);
	}
	x.remove();
	
};

las_like_system.dom_ready ? init_l_like_system() : $(function () { init_l_like_system() });
