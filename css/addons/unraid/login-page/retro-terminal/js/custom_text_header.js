
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
  _________                        _____                  __ ___________.__       .__     __   
 /   _____/____  ___.__._____     /     \\  __ __  _______/  |\\_   _____/|__| ____ |  |___/  |_ 
 \\_____  \\\\__  \\<   |  |\\__  \\   /  \\ /  \\|  |  \\/  ___/\\   __\\    __)  |  |/ ___\\|  |  \\   __\\
 /        \\/ __ \\\\___  | / __ \\_/    Y    \\  |  /\\___ \\  |  | |     \\   |  / /_/  >   Y  \\  |  
/_______  (____  / ____|(____  /\\____|__  /____//____  > |__| \\___  /   |__\\___  /|___|  /__|  
        \\/     \\/\\/          \\/         \\/           \\/           \\/      /_____/      \\/      
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
