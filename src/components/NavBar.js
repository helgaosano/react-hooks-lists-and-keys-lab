import React from "react";

function NavBar() {

const links = ["home", "about", "projects"];
const allLinks = links.map(element => 
<a key={element} href={"#" + element}>{element}</a> )

return <nav>{allLinks}</nav>;

}


export default NavBar;

/**
 * Inside the function NavBar, I have declared a variable, links an array consisting of three strings (home, about, projects) .
 * .map method is used to iterate over the links
 * Each <a> element has a unique key prop passed.
 * We replace this - <a href ="#home">home</a> with line 7
 */