
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                                                          
 ____                                                             __     ____                  __       __      
/\  _`\                                 /'\_/`\                  /\ \__ /\  _`\   __          /\ \     /\ \__   
\ \,\L\_\      __     __  __      __   /\      \   __  __    ____\ \ ,_\\ \ \L\_\/\_\      __ \ \ \___ \ \ ,_\  
 \/_\__ \    /'__`\  /\ \/\ \   /'__`\ \ \ \__\ \ /\ \/\ \  /',__\\ \ \/ \ \  _\/\/\ \   /'_ `\\ \  _ `\\ \ \/  
   /\ \L\ \ /\ \L\.\_\ \ \_\ \ /\ \L\.\_\ \ \_/\ \\ \ \_\ \/\__, `\\ \ \_ \ \ \/  \ \ \ /\ \L\ \\ \ \ \ \\ \ \_ 
   \ `\____\\ \__/.\_\\/`____ \\ \__/.\_\\ \_\\ \_\\ \____/\/\____/ \ \__\ \ \_\   \ \_\\ \____ \\ \_\ \_\\ \__\
    \/_____/ \/__/\/_/ `/___/> \\/__/\/_/ \/_/ \/_/ \/___/  \/___/   \/__/  \/_/    \/_/ \/___L\ \\/_/\/_/ \/__/
                          /\___/                                                           /\____/              
                          \/__/                                                            \_/__/                   
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
