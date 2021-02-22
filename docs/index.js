function PageChanger(page) {
    document.location = page;
    document.NavForm.PullDown.options[0].selected = true;
}

var platform = navigator.platform;

if (platform == 'Android') {
    document.write("Sajnáljuk, az oldal telefonokon még nem érhető el!")
} 

