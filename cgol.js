var e=eval,p='className',q=1, g;

function c (td)
{
	td[p] = td[p] ? '' : 's';
}

(function(window)
{
	var
	    cols = 50,
	    life = document.getElementById('w'),
	    td='',
	
	get_neighbours = function()
	{
		count=0;
		for (a=0;a<8;a++)
			if ((x=td.n[a]) && x[p])
				count++;
	}, i=cols*40,a=i,count, x;
	
	// Generate Table
	while (a--)
		td += '<b onclick="c(this)"></b>'; 
	life.innerHTML = td;
	life = life.children;

	while (i--)
		life[i].n = [ life[i-cols-1], life[i-cols], life[i-cols+1], 
			      life[i-1], life[i+1], life[i+cols-1], life[i+cols], life[i+cols+1]
			    ];


	window.s = function(i, s) { life[i][p]=s; }

	window.g = function(button)
	{
		if (q%2) return;

		var ev='';
		for (i=0;i<2000;i++)
			switch (get_neighbours(td=life[i]), count)
			{ 
			case 3: if (!td[p]) ev+='s('+i+',"s");';
			case 2: break;
			default:
				if (td[p]) ev+='s('+i+',"");'; 
			}					

		e(ev);
		setTimeout(window.g, 250);
	}
	
})(this)
