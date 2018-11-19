
jQuery(function ($) {

	$('.tr_ranking').click(function(){
		linha = $(this).attr('linha');
		$('#ranking_modal_content').html($('#ranking'+linha).html());		
		modal_default('#ranking_modal_content');		
	});

	$('#submenu_skill').click(function (e) {
		modal_default('#skill_modal_content');			
	});
	$('#submenu_quest').click(function (e) {	
		modal_default('#quest_modal_content');			
	});	
	$('#submenu_config').click(function (e) {
		modal_default('#config_modal_content');
	});
	$('#submenu_desc1').click(function (e) {
		modal_close_open('#desc1_modal_content', '#quest_modal_content');
	});
	$('#submenu_desc2').click(function (e) {
		modal_close_open('#desc2_modal_content', '#quest_modal_content');
	});
});


function modal_default_close_function(){
		$('#reload')[0].play();
		$.modal.close();
}
function modal_default_open_function(dialog){
		$('#reload')[0].play();
		dialog.overlay.fadeIn('slow', function () {
			dialog.data.hide();
			dialog.container.fadeIn('slow', function () {
				dialog.data.slideDown('slow');	 
			});
		});
}
//id_modal_proximo = o modal que se abrirá ao se fechar o 'id_modal_atual'
function modal_close_open(id_modal_atual, id_modal_proximo){
	$('.simplemodal-close').click();
	$(id_modal_atual).modal({
		opacity:80,
		overlayCss: {backgroundColor:"#fff"},
		onOpen: function (dialog) {modal_default_open_function(dialog);},
		onClose: function (dialog) {$.modal.close();modal_default(id_modal_proximo);}
	});
	$('#simplemodal-container').append("<p class='modal_footer' > &nbsp; </p>");
}

function modal_default(id_modal){
	$(id_modal).modal({
		opacity:80,
		overlayCss: {backgroundColor:"#fff"},
		onOpen: function (dialog) {modal_default_open_function(dialog);},
		onClose: function (dialog) {modal_default_close_function();}
	});
	$('#simplemodal-container').append("<p class='modal_footer' > &nbsp; </p>");
}
