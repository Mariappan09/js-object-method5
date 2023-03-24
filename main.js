//using find-5
	  const employees=[
	{name:"david carlson",age:30},
	{name:"john cena",age:34},
	{name:"mike sheridan",age:25},
	{name:"jon carteh",age:50}
	];
	 let v=employees.find(function(e){
		return e.name.indexOf("john")>=0
	});
	console.log(v);
	