$(function () {
	//Quando o elemento com id login for clicado executará uma função.
	$("#login").click(function () {
		//Carrega o conteudo do elemento com id login do arquivo conteudo.html
		$("#descLogin").load("conteudo.html #login");		
	});
	
	//Quando o elemento com id desc for clicado executará uma função.
	$("#desc").click(function () {
		//Carrega o conteudo do elemento com id desc do arquivo conteudo.html
		$("#descLogin").load("login.html #descricao");		
	});
});
