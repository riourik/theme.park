
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre> 
______  _____   _______ _____ ___  
| ___ \/ _ \ \ / /  _  |_   _/ _ \ 
| |_/ / /_\ \ V /| | | | | |/ /_\ \
| ___ \  _  |\ / | | | | | ||  _  |
| |_/ / | | || | \ \_/ / | || | | |
\____/\_| |_/\_/  \___/  \_/\_| |_/ 
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
