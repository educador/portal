(function($){	
	$(document).ready(function() {
		// Cria uma div.paginas que receber� os paginadores
		var div = $('<div></div>').addClass('paginas');
		// Insere a div criada antes da lista de fotos
		$('#fotos ul').before(div);		
		// roda o jcycle na ul dentro da div fotos
		$('#fotos ul').cycle({
			pager: 'div.paginas', // pagina��o
			pause: true, // pausa ao deixar o mouse sobre a imagens
			pauseOnPagerHover: true, // pausa ao deixar o mouse sobre a pagina��o
			fx:     'fade',
			speed:  2000,
			timeout: 5000, 			
			// Executa uma fun��o antes de cada troca de slide
			before: function(atual, proximo, opcoes, avancando) {
				 // Esconde o par�grafo e a div.barra_semi-transparente que est�o no slide atual
				$('p, div.barra_semi-transparente', atual).slideUp('fast');
			},			
			// Executa uma fun��o depois de cada troca de slide
			after: function(atual, proximo, opcoes, avancando) {
			
				// mostra o par�grafo e a div.barra_semi-transparente do slide atual
				$('p, div.barra_semi-transparente', proximo).slideDown('fast');
			}
		});		
	});	
})(jQuery);