var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function() {
		event.target.parentNode.remove();
	}, 500);
	
	//Alternativa:
	//var alvoEvento = event.target;
	//var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover
	//paiDoAlvo.remove();
});

//pacientes.forEach(function(paciente) {
//    paciente.addEventListener("dblclick", function() {
//        console.log("Fui clicado com um duplo click");
//        this.remove();
//    });
//});