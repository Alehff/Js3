      
function fillheader() {
    document.getElementById ("texto1").innerHTML="Animal: TIGRE"
    document.getElementById ("texto2").innerHTML="Espécie: Panthera tigris"
    document.getElementById ("imagem").src="../public/R.jfif"
}

function fillmainsection() {
    document.getElementById ("texto3").innerHTML="Uma breve descrição: Tigre é um animal muito brabo! Ele é o bixão, por onde passa quem manda é ele. O maior felino do mundo, ele é o único dos animais selvagens que tem coragem de peitar um dragão, vide a obra baseada em fatos reais 'o tigre e o dragão' "
    document.getElementById ("texto4").innerHTML="Habitat: O Tigre vive onde ele quiser, bixo. Ninguém se atreve a dizer pro tigre onde ele deve morar. Ele é bixo solto, gosta de andar sozinho mesmo porque é descolado. Historicamente estavam localizados em ecossistemas com climas mais secos e frios, assim como sua personalidade. Mas atualmente ele ta numa parada good vibes e é mais facil encontra-lo em florestas tropicais"
    document.getElementById ("imagem2").src="../public/tigre1.jfif"
    document.getElementById ("imagem3").src="../public/tawky-tawny-shazam_cke.jpg"
    document.getElementById ("imagem4").src="../public/tigre2.jfif"
}

function fillFooter() {
    document.getElementById ("texto5").innerHTML="Links pra saber mais sobre TIGRE"
    document.querySelector("#texto6").innerHTML="Links: Toque aqui"
    document.querySelector("#texto7").innerHTML="Links: Toque aqui"
    document.querySelector("#texto8").innerHTML="Links: Toque aqui"
}

fillheader();

fillmainsection();

fillFooter();
