var e=eval,p='className',q=0;

function c (td)
{
	td[p] = td[p] ? '' : 's';
}

(function(window)
{
	var
	    cols = 50,
	    life = w, //document.getElementById('w'),
	    td='',
	
	get_neighbours = function()
	{
		count=0;
		for (a=0;a<8;a++)
			if ((x=td.n[a]) && x[p])
				count++;
	},
	getv = function(x)
	{
		return (x>=0 && x<len) ? life[x] : 0;
	},
	i=cols*40,a=i,count, x,ev,len=i;
	
	// Generate Table
	while (a--)
		td += '<b onclick="c(this)"></b>'; 
	life.innerHTML = td;
	life = life.children;

	while (i--)
		life[i].n = [ getv(i-cols-1), getv(i-cols), getv(i-cols+1), 
			      getv(i-1), getv(i+1), getv(i+cols-1), getv(i+cols), getv(i+cols+1)
			    ];


	window.s = function(i, s) { life[i][p]=s; }

	window.g = function(button)
	{
		if (q%2)
		{
			for (i=0,ev='';i<len;i++)
			{
				get_neighbours(td=life[i]);
				if (count!=2)
				{
					if (count==3) ev+= td[p] ? '' : 's('+i+',"s");'; 
					else
						if (td[p]) ev+='s('+i+',"");'; 
				}
			}

			e(ev);
			setTimeout(window.g, 250);
		}
	}
	
})(this)
