nome_usuar='Zezinho';

level=5;
xp=100;
maxXp = 100 * level;

java_pontos='100';
net_pontos='50';
delphi_pontos='25';
html5_pontos='25';
css3_pontos='25';
javascript_pontos='25';

quest1Porc='72';
quest2Porc='50';

nome='Zezinho da Silva Junior';
frase='Eu sou o Máximo';
sexo='Masculino';

function mock(){
			divTemplate = "<h3>Descrição</h3><div class='flex_modal'><div class='itens'><p style='height:25px'>NOME: </p><p style='height:25px'>RANKING: </p><p style='height:25px'>PATENTE: </p><p style='height:25px'>PONTUACAO: </p><p>LEVEL: </p></div><div><p><span class='spanDesc'>#1#<\span></p><p><span class='spanDesc'>#2#<\span></p><p><span class='spanDesc'>#3#<\span></p><p><span class='spanDesc'>#4#<\span></p><p><span class='spanDesc'>#5#<\span></p></div>";
			

			for(i=1;i<=50;i++){
				patente = '';
				nome = "Nome"+i;
				ranking = 'Ranking';
				pontuacao = (50*76-76*i);
				
				if(i == 10){
					nome = nome_usuar;
				}
				
				if( i == 1 || i == 2 ||i == 3 ||i == 4 ||i == 5 ){
					patente = 'Marechal';
				}
				else if( i == 6 || i == 7||i == 8 ||i == 9 ||i == 10 ){
					patente = 'Coronel';
				}
				else if( i == 11 || i == 12 ||i == 13 ||i == 14 ||i == 15 ){
					patente = 'Capitao';
				}
				else if( i == 16 || i == 17||i == 18 ||i == 19 ||i == 20 ){
					patente = 'Tenente';
				}
				else if( i == 21 || i == 22||i == 23 ||i == 24 ||i == 25 ){
					patente = 'Sargento';
				}else if( i == 26 || i == 27||i == 28 ||i == 29 ||i == 30 ){
					patente = 'Cabo';
				}else{
					patente = 'Aspirante';
				}
			
				patente = "<img class='patente' src='img/"+patente+".png'/>"+patente;
				
				divTemplateAux = divTemplate;
				html = "<tr id='tr_"+nome+"' class='tr_ranking' style='cursor:pointer;' linha="+i+" title='"+nome+"'>";
				html+= "<td class='ranking_cell'>"+i+"</td>";				
				html+= "<td>"+nome+"</td>";
				html+= "<td class='alinhaPatente'>"+patente+"</td>";
				html+= "<td>"+pontuacao+"</td>";
				html+= "<td id='ranking"+i+"'  style='display:none;'>";
				divTemplateAux = divTemplateAux.replace('#1#','<span class="spanDesc" style="font-size:18px">'+nome+'</span>');
				divTemplateAux = divTemplateAux.replace('#2#','<span class="spanDesc" style="font-size:18px">'+i+'o'+'</span>');
				divTemplateAux = divTemplateAux.replace('#3#','<span class="spanDesc" style="font-size:18px">'+patente+'</span>');
				divTemplateAux = divTemplateAux.replace('#4#','<span class="spanDesc" style="font-size:18px">'+pontuacao+'</span>');
				divTemplateAux = divTemplateAux.replace('#5#','<span class="spanDesc" style="font-size:18px">Level 3 </span><progress value="182" max="400"></progress> <span class="spanDesc" style="font-family:Calibri;font-weight:bold;font-size:18px">1548/182354xp</span>');
				html+= divTemplateAux;
				html+="</td>";
				$('#table_ranking').append(html);
			
			}		
}

$(document).ready(function(){
/************* Ola, fulano *************/
		$('#ola').html('&nbsp;Ol&aacute;, ' + nome_usuar);

/************* Level, Barra de xp e Pontos de xp *************/
		$('#level').html('LEVEL' + level);
		$('#xp_barra').attr("value",xp);
		$('#xp_barra').attr("max",maxXp);
		$('#xp_pontos').html($('#xp_barra').attr('value') + "/" + maxXp + "xp");
		
/************* MODAL DE QUESTS *************/
		$('#quest1_barra').attr("value",quest1Porc);
		$('#quest1_porc').html($('#quest1_barra').attr('value') + '%');
		
		$('#quest2_barra').attr("value",quest2Porc);
		$('#quest2_porc').html($('#quest2_barra').attr('value') + '%');
		
		totalQuests = (parseInt($('#quest1_barra').attr('value')) + parseInt($('#quest2_barra').attr('value'))) / 2;
		$('#total_barra_quests').attr("value",totalQuests);
		$('#total_porc').html(totalQuests + "%");

/************* MODAL DE SKILLS *************/	
		$('#java_barra').attr("value",java_pontos);
		$('#java_pontos').html($('#java_barra').attr('value') + "/200pts");
		
		$('#net_barra').attr("value",net_pontos);
		$('#net_pontos').html($('#net_barra').attr('value') + "/200pts");
		
		$('#delphi_barra').attr("value",delphi_pontos);
		$('#delphi_pontos').html($('#delphi_barra').attr('value') + "/200pts");
		
		$('#html5_barra').attr("value",html5_pontos);
		$('#html5_pontos').html($('#html5_barra').attr('value') + "/200pts");
		
		$('#css3_barra').attr("value",css3_pontos);
		$('#css3_pontos').html($('#css3_barra').attr('value') + "/200pts");
		
		$('#javascript_barra').attr("value",javascript_pontos);
		$('#javascript_pontos').html($('#javascript_barra').attr('value') + "/200pts");
		
		totalSkills = parseInt($('#java_barra').attr('value')) + 
		parseInt($('#net_barra').attr('value')) + 
		parseInt($('#delphi_barra').attr('value')) +
		parseInt($('#html5_barra').attr('value')) +
		parseInt($('#css3_barra').attr('value')) +
		parseInt($('#javascript_barra').attr('value'));
		
		$('#total_barra_skills').attr("value",totalSkills);
		$('#total_pontos').html(totalSkills + "/1200pts");		
		
/************* Dados de Registro *************/	
		$('#nome').html('<strong>&nbsp;Nome: </strong>' + nome);
		$('.frase').html('<strong>&nbsp;Frase: </strong>' + frase);
		$('#sexo').html('<strong>&nbsp;Sexo: </strong>' + sexo);
		
		

		
		
		
});