$(function()
{
	$('.scroll-pane').jScrollPane();
});



 $(document).ready(function(){	
	$('#issa').click(function(){alert('');});
	mock();
	
	// Muda o foco da linha da tabela para o nome do usuario logado
	
	
	
	$('#musica').click(function(){
		if($(this).hasClass('pause')){
			$('#musica_fundo')[0].pause();
			$(this).attr('class','play');
		}else{
			$('#musica_fundo')[0].play();
			$(this).attr('class','pause');
		}
	});
	

	
	// Functions relativas ao mouse over da table
	$("table tr").mouseover(function() {
		$('table tr').each(function(){		
			$(this).addClass('celulaOut');					
		});
		$(this).removeClass('celulaOut');	
		$(this).addClass('celulaIn');
	}).mouseout(function(){				
		$(this).removeClass('celulaIn');	
	});
	
	$("table").mouseout(function() {
		$('table tr').each(function(){		
			$(this).removeClass('celulaOut');			
		});
	});


 });

function mudarPerfil(){
	$('#arquivo').click();
	imagem = $('#arquivo').val();
	$('#arquivo');
}
