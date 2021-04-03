export function onPageLoad(onLoadText){
    
    //Wrapper Div
    const pageContent = document.getElementById("content"); 
    
    //Header Section
    const header = document.createElement("div");
    header.setAttribute("id","header");
    
    //Header Text
    const headerText = document.createElement("h1");
    headerText.innerHTML = "Welcome to Antonio's Italian Cuisine";
    headerText.setAttribute("id","header-text");

    //Home Food Image
    const foodDiv = document.createElement("div");
    foodDiv.setAttribute("id","food-bg")
    const foodImg = document.createElement("img");
    foodImg.setAttribute("id","pasta.jpg")
    foodImg.setAttribute("src","pasta.jpg");
    foodImg.setAttribute("title","Our mouth watering pasta is enough to make you tap dance!");
    foodImg.setAttribute("alt","A picture of Antonio's home-quality spaghetti.");
    foodDiv.appendChild(foodImg);

    //On page load action section
    const homeContent = document.createElement("div");
    homeContent.innerHTML = onLoadText;
    homeContent.setAttribute("id","homesect");
    homeContent.setAttribute("class","bottom-sect");

    //Plain Divider
    const divider = document.createElement("div");
    divider.setAttribute("class","divider");

    //Horizontal Navbar With Links
    const userNav = document.createElement("nav");
    const homeLink = document.createElement("a");
    homeLink.setAttribute("href","javascript:void(0);");
    homeLink.setAttribute("id","homelink");
    homeLink.innerHTML = "Home";
    const menuLink = document.createElement("a");
    menuLink.setAttribute("href","javascript:void(0);");
    menuLink.setAttribute("id","menulink");
    menuLink.innerHTML = "Menu";
    const contactLink = document.createElement("a");
    contactLink.setAttribute("href","javascript:void(0);");
    contactLink.setAttribute("id","contactlink");
    contactLink.innerHTML = "Contact";
    const body = document.querySelector("body");
    body.appendChild(userNav);
    
    //Main Wrapper Div Appending Children
    appendChildren(pageContent,header,foodDiv,homeContent); //divider was at fourth position before usernav

    //Header and Nav Bar Appending Children
    header.appendChild(headerText);
    
    //User Nav Append Children
    appendChildren(userNav,homeLink,menuLink,contactLink);
};

export function sectLoad(sectid,secthtml,sectIDRemove,sectImgRemove,sectImgAdd,imgHoverTxt){
    const pageContent = document.getElementById("content");
    const imageHead = document.getElementById("food-bg");
    const sectContent = document.createElement("div");
    const newImg = document.createElement("img");
    newImg.setAttribute("id",sectImgAdd);
    newImg.setAttribute("src",sectImgAdd);
    newImg.setAttribute("title",imgHoverTxt);
    sectContent.setAttribute("id",`${sectid}`);
    sectContent.setAttribute("class","bottom-sect");
    sectContent.innerHTML = `${secthtml}`;
    document.getElementById(sectIDRemove).remove();
    pageContent.appendChild(sectContent);
    document.getElementById(sectImgRemove).remove();
    imageHead.appendChild(newImg);
}

function appendChildren(elem){
    for(let i = 1; i < arguments.length; i++){
        elem.appendChild(arguments[i]);
    }
}



//Page Section Modules

export const homePageHTML = () => {
    // const muchFood = "<img src=muchfood.jpg id=pizzaimg>";
    const muchFood = "";
    const onLoadHTML = `${muchFood}<p id=hometext>Here at Antonio's, we provide the most <em>mouth-watering, awe-inspiring</em> italian food on the planet. Each of our garlic knots are <em>drenched</em> in fresh basil and are made of <em>delicate pastry</em>. <em>Our</em> waitresses will catch your gaze like that of a <em>thousand suns</em>, as they saunter over to you while carrying a pan of marguerita pizza. Fresh beverages <em>afloat!</em> We have root beer, the finest gin for you pirates, and of course we have Sprite. Now don't hurry off too fast, we also have game night every Thursday with a wide, amiable atmosphere filled with <em>tireless laughter</em>. Our waiting list is being booked up fast for this eventful Thursday, so don't hesitate!<br><br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis optio ab possimus totam similique inventore, praesentium blanditiis repellat repudiandae dolorum? Facilis quis reiciendis vitae quas voluptas error ipsam consequuntur vero! Tempora, vel ad ea consectetur sed ut officia soluta nam veritatis sequi velit dignissimos, eaque commodi illum? Odit quo dolor at harum ipsam itaque recusandae possimus cupiditate ex, maiores, totam inventore vero neque fuga, aspernatur accusamus dignissimos quis pariatur temporibus quas fugiat odio rem iusto. Praesentium, blanditiis!<br><br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis optio ab possimus totam similique inventore, praesentium blanditiis repellat repudiandae dolorum? Facilis quis reiciendis vitae quas voluptas error ipsam consequuntur vero! Tempora, vel ad ea consectetur sed ut officia soluta nam veritatis sequi velit dignissimos, eaque commodi illum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis optio ab possimus totam similique inventore, praesentium blanditiis repellat repudiandae dolorum?</p>`             
    return onLoadHTML;
}

export const menuPageHTML = () => {
    const foodItems = "<p class=menu-item>Pizza</p><p class=menu-item>Garlic Knots</p><p class=menu-item>Spaghetti</p><p class=menu-item>Special Pasta</p><p class=menu-item>Sandwich</p><p class=menu-item>French Fries</p><p class=menu-item>All You Can Eat</p>"
    const foodPrices = "<p class=menu-price>$5.99</p><p class=menu-price>$3.99</p><p class=menu-price>$4.99</p><p class=menu-price>$8.99</p><p class=menu-price>$5.99</p><p class=menu-price>$3.99</p><p class=menu-price>$12.99</p>"
    const drinkItems = "<p class=menu-item>Coke</p><p class=menu-item>Sprite</p><p class=menu-item>Gin</p><p class=menu-item>Orange Juice</p><p class=menu-item>Cocktail</p><p class=menu-item>Cranberry</p><p class=menu-item>Antonio's Special Water</p>"
    const drinkPrices = "<p class=drink-price>$1.99</p><p class=drink-price>$1.99</p><p class=drink-price>$6.99</p><p class=drink-price>$2.99</p><p class=drink-price>$8.99</p><p class=drink-price>$4.99</p><p class=drink-price>Free</p>";
    const titleMenu = "<p id=title-menu>Menu</p></div><div id=body-menu><div id=paper><div id=menu-titles><p id=food-header class=menu-header>Food</p><p id=food-price class=menu-header>Price</p><p id=drinks-header class=menu-header>Drinks</p><p id=drinks-price class=menu-header>Price</p>"
    const menuHTML = `<div id=header-menu>${titleMenu}</div><div class=flex-row><div class=flex-food>${foodItems}</div><div class=flex-prices>${foodPrices}</div><div class=flex-food>${drinkItems}</div><div class=flex-prices>${drinkPrices}</div></div></div></div>`;
    return menuHTML;
}

export const contactPageHTML = () => {
    const contactHTML = "<form><label for=fname>First Name</label><input type=text id=fname name=firstname placeholder=Your&nbsp;first&nbsp;name><label for=lname>Last Name</label><input type=text id=lname name=lastname placeholder=Your&nbsp;last&nbsp;name><label for=email>E-Mail</label><input type=text id=email name=email placeholder=Your&nbsp;E-Mail><label for=area>Area</label><select id=area name=area><option value=miami>Miami</option><option value=orlando>Orlando</option><option value=gainesville>Gainesville</option><option value=westpalm>West&nbsp;Palm</option><option value=other>Other</option></select><label for=feedback>Feedback</label><textarea id=feedback name=feedback placeholder=Tell&nbsp;us&nbsp;the&nbsp;truth! style=height:200px></textarea><input type=submit value=Submit href=#></form>";
    return contactHTML;
}

export const footerHTML = () => {
    const footer = document.createElement("footer");
    footer.setAttribute("id","footer");
    const footerText = document.createElement("p");
    footerText.innerHTML = "<span id=copy>&copy</span> &nbsp;Antonio's Italian Cuisine - This website is not real, although there <s>probably</s> is an Antonio's Italian Cuisine out there."
    const pageContent = document.getElementById("content");
    footer.appendChild(footerText);
    pageContent.appendChild(footer);
}

export const removeFooter = () => {
    document.getElementById("footer").remove();
}








