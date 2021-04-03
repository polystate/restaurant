//npx webpack --watch to auto watch with webpack

import { onPageLoad } from './modules.js';
import { sectLoad }  from './modules.js';
import { homePageHTML }  from './modules.js';
import { menuPageHTML }  from './modules.js';
import { contactPageHTML }  from './modules.js';
import { footerHTML }  from './modules.js';
import { removeFooter }  from './modules.js';

//Initial On Screen Load Advertisement Text and Section HTMLs
onPageLoad(homePageHTML());
footerHTML();

//Page Section Boolean Switchm Function Call, and Image ID
const pageSection = {
    homesect: [true, sectLoad,"pasta.jpg","Our mouth watering pasta is enough to make you tap dance!"],
    menusect: [false, sectLoad,"checkered.jpg","Choose wisely sailor!"],
    contactsect: [false, sectLoad,"pizza.jpg","We are always available!"]
}

//Link to link section and text content
const linkSection = {
    homelink: ["homesect",homePageHTML()],
    menulink: ["menusect",menuPageHTML()],
    contactlink: ["contactsect",contactPageHTML()]
}

//Link event listener
const links = document.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener('click',function(){
        let sectIDRemove = Object.keys(pageSection).filter(x => pageSection[x][0] === true).join("");
        removeFooter();
        for(let sect in pageSection){
            if(linkSection[link.id][0] === sect && pageSection[sect] !== true){
                pageSection[sect][1](linkSection[link.id][0],linkSection[link.id][1],sectIDRemove,pageSection[sectIDRemove][2],pageSection[sect][2],pageSection[sect][3]);
                pageSection[sect][0] = true;
                footerHTML();
            } else pageSection[sect][0] = false;
        }
    })
})
