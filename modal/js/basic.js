/*
 * SimpleModal Basic Modal Dialog
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

jQuery(function ($) {

	$('.tr_ranking').click(function(){

		linha = $(this).attr('linha');
		$('#ranking_modal_content').html($('#ranking'+linha).html());
		
		
		
		$("#ranking_modal_content").modal({
			opacity:80,
			overlayCss: {backgroundColor:"#fff"},
			onOpen: function (dialog) {
				dialog.overlay.fadeIn('slow', function () {
					dialog.data.hide();
					dialog.container.fadeIn('slow', function () {
						dialog.data.slideDown('slow');	 
					});
				});
			}
		
		});
		$('#simplemodal-container').append("	<p class='modal_footer' > &nbsp; </p>");
	});


	$('#submenu_skill').click(function (e) {
		$("#skill_modal_content").modal({
			opacity:80,
			overlayCss: {backgroundColor:"#fff"},
			onOpen: function (dialog) {
				dialog.overlay.fadeIn('slow', function () {
					dialog.data.hide();
					dialog.container.fadeIn('slow', function () {
						dialog.data.slideDown('slow');	 
					});
				});
			}
		
		});
		$('#simplemodal-container').append("	<p class='modal_footer' > &nbsp; </p>");
		
	});
	$('#submenu_quest').click(function (e) {
		$("#quest_modal_content").modal({
			opacity:80,
			overlayCss: {backgroundColor:"#fff"},
			onOpen: function (dialog) {
				dialog.overlay.fadeIn('slow', function () {
					dialog.data.hide();
					dialog.container.fadeIn('slow', function () {
						dialog.data.slideDown('slow');	 
					});
				});
			}
		
		});
			$('#simplemodal-container').append("	<p class='modal_footer' > &nbsp; </p>");
	});
	$('#submenu_config').click(function (e) {
		$("#config_modal_content").modal({
			opacity:80,
			overlayCss: {backgroundColor:"#fff"},
			onOpen: function (dialog) {
				dialog.overlay.fadeIn('slow', function () {
					dialog.data.hide();
					dialog.container.fadeIn('slow', function () {
						dialog.data.slideDown('slow');	 
					});
				});
			}
		
		});
			$('#simplemodal-container').append("	<p class='modal_footer' > &nbsp; </p>");
	});
	$('#submenu_desc1').click(function (e) {
	$('.simplemodal-close').click();
		$("#desc1_modal_content").modal({
			opacity:80,
			overlayCss: {backgroundColor:"#fff"},
			onClose:function(dialog){
					$.modal.close();
					$("#quest_modal_content").modal({
						opacity:80,
						overlayCss: {backgroundColor:"#fff"}
		
					});
					$('#simplemodal-container').append("	<p class='modal_footer' > &nbsp; </p>");
					
			},
			onOpen: function (dialog) {
				dialog.overlay.fadeIn('slow', function () {
					dialog.data.hide();
					dialog.container.fadeIn('slow', function () {
						dialog.data.slideDown('slow');	 
					});
				});
			}
		
		});
			$('#simplemodal-container').append("	<p class='modal_footer' > &nbsp; </p>");
	});
	$('#submenu_desc2').click(function (e) {
		$('.simplemodal-close').click();
		$("#desc2_modal_content").modal({
			opacity:80,
			overlayCss: {backgroundColor:"#fff"},
			onClose:function(dialog){
					$.modal.close();
					$("#quest_modal_content").modal({
						opacity:80,
						overlayCss: {backgroundColor:"#fff"}
		
					});
					$('#simplemodal-container').append("	<p class='modal_footer' > &nbsp; </p>");
			},
			onOpen: function (dialog) {
				dialog.overlay.fadeIn('slow', function () {
					dialog.data.hide();
					dialog.container.fadeIn('slow', function () {
						dialog.data.slideDown('slow');	 
					});
				});
			}
		
		});
			$('#simplemodal-container').append("<p class='modal_footer' > &nbsp; </p>");
	});
});