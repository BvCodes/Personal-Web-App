import { HtmlAstPath } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'follio-app';
  

  ngOnInit(): void {
    //document.querySelector<HTMLElement>("#navCollapse").style.display = "none";
    //document.querySelector<HTMLElement>("#dropD").style.display = "none";
    document.querySelector("#navCollapse").classList.add("hide");
    document.querySelector("#dropD").classList.add("hide");
  }

  navCollapse() {
    var nav = document.querySelector<HTMLElement>("#navCollapse");
    var dropD = document.querySelector<HTMLElement>("#dropD");
    if (nav.style.display == "none") {
      nav.style.display = "flex";
      dropD.style.display = "block"
      
    } else {
      nav.style.display = "none";
      dropD.style.display = "none";
    }
  }

  opacityHide() {
    var nav = document.querySelector<HTMLElement>("#navCollapse");
    var dropD = document.querySelector<HTMLElement>("#dropD");
    var menu = document.querySelector<HTMLElement>("#menu");
    if (dropD.classList.contains("hide")) {
      nav.classList.remove("hide");
      dropD.classList.remove("hide");
      menu.innerHTML = "close";
    } else {
      nav.classList.add("hide");
      dropD.classList.add("hide");
      menu.innerHTML = "menu";
    }
  }
  

}
