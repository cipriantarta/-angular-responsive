import {Component} from "@angular/core";

export class MenuItem {
    constructor(public link: string, public title: string, public text: string, public cssClasses: string[] = []) {}
}

@Component({
    selector: "main-menu",
    template: `
    <nav class="main-menu" [ngClass]="{shown: expanded}">
  <button class="menu-toggle" (click)="toggle()">
    <span></span>
    <span></span>
  </button>
  <div class="container">
    <div class="menu-header">
      <a class="menu-brand" href="/">Brand</a>
    </div>
    <ul class="menu-inner" [ngClass]="{expanded: expanded}">
      <li class="menu-item" *ngFor="let menuItem of menuItems; let i = index;" [ngStyle]="{'transition-delay': (300 + i * 50) + 'ms,' + (300 + i * 50) + 'ms', '-webkit-transition-delay': (300 + i * 50) + 'ms,' + (300 + i * 50) + 'ms' }">

        <!-- Swap to [routerLink] if needed -->
        <a href="{{menuItem.link}}" routerLinkActive="active" title="{{menuItem.title}}" [ngClass]="menuItem.cssClasses.join(' ')">{{menuItem.text}}</a>
      </li>
    </ul>
  </div>
</nav>
    `,
    styles: [`
    
      .container {
    display: block;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
}

.main-menu {
    position: fixed;
    height: 50px;
    width: 100%;
    background: rgba(28, 98, 119, .8);
    overflow: hidden;
    -webkit-transition: background 0.35s linear, height .7s cubic-bezier(.80,-.20,.20,1.20);
    transition: background 0.35s linear, height .7s cubic-bezier(.80,-.20,.20,1.20);
}

.menu-toggle {
    height: 48px;
    width: 48px;
    position: absolute;
    cursor: pointer;
    display: none;
    outline: none;
    border: none;
    background: transparent;
    z-index: 1;
    top: 1px;
}

.menu-toggle > span {
    display: block;
    height: 48px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transition: all .35s linear;
}
.menu-toggle > span:after {
    content: '';
    display: block;
    height: 1px;
    width: 17px;
    transition: background .15s linear;
    background: #f7f7f7;
    margin: auto;
    position: absolute;
    left: 16px;
    top: 19px;
}
.menu-toggle > span:nth-of-type(2):after {
    top: 27px;
}

.menu-toggle:hover > span:after {
    background: rgb(168, 203, 214);
}

.menu-header {
    width: 25px;
    margin-top: 12px;
}

.menu-inner {
    list-style: none;
    margin: 0;
}
.menu-inner.expanded {
    visibility: visible;
    transition-delay: 0s;
}
.menu-brand, .menu-brand:visited {
    font: 20px Helvetica, Arial, sans-serif;
    color: #f7f7f7;
    text-decoration: none;
    -webkit-transition: color 0.15s linear;
    transition: color 0.15s linear;
}
.menu-item > a, .menu-item > a:visited {
    color: #f7f7f7;
    text-decoration: none;
    font: 18px Helvetica, Arial, sans-serif;
    height: 48px;
    line-height: 48px;
    -webkit-transition: color 0.15s linear;
    transition: color 0.15s linear;
}
.menu-item > a:hover, .menu-brand:hover, .menu-item .active {
    color: rgb(168, 203, 214);
}
.menu-item.vspacer {
    width: 1px;
    background: rgb(85, 151, 171);
    height: 28px;
    margin-top: 10px;
}

@media only screen and (max-width: 767px) {
    .menu-toggle {
        display: block;
    }

    .menu-header {
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        z-index: 1;
    }

    .menu-inner {
        position: absolute;
        height: auto;
        padding: 0 50px;
        top: 50px;
        left: 0;
        right: 0;
        overflow: hidden;
        overflow-y: auto;
        visibility: hidden;
        -webkit-transition: visibility 0s linear 1s;
        transition: visibility 0s linear 1s;
        z-index: 2;
    }

    .menu-item {
        display: block;
        opacity: 0;
        -webkit-transform: scale(1.1) translateY(-25px);
        transform: scale(1.1) translateY(-25px);
        -webkit-transition: opacity 0.35s ease-out, -webkit-transform 0.35s ease-out;
        transition: opacity 0.35s ease-out, transform 0.35s ease-out, -webkit-transform 0.35s ease-out;
    }

    .menu-item.vspacer {
        display: none;
    }

    .menu-inner.expanded {
        height: auto;
    }

    .menu-inner.expanded .menu-item {
        -webkit-transform: none;
        transform: none;
        opacity: 1;
    }

    .main-menu.shown {
        background: rgb(28, 98, 119);
        height: 98%;
    }
    .main-menu.shown .menu-toggle > span:nth-of-type(1) {
        transform: rotate(135deg) translateY(5px);
    }
    .main-menu.shown .menu-toggle > span:nth-of-type(2) {
        transform: rotate(-135deg) translateY(-4px);
    }
}

@media only screen and (min-width: 768px) {
    .menu-header {
        margin-left: 15px;
        margin-right: 30px;
        float: left;
    }
    .menu-inner {
        padding: 0;
        float: left;
        width: 100%;
        max-width: 720px;
        margin:auto;
    }

    .menu-item {
        float: left;
        text-align: center;
        margin: 0 30px;
        transition: none;
    }
    .menu-item > a {
        font-size: 16px;
    }
}
    `],
})
export class MainMenuComponent {
    private expanded:boolean = false;
    private menuItems: MenuItem[];

    constructor() {
        this.menuItems = [
            new MenuItem("/", "", "Home"),
            new MenuItem("#", "", "Menu 1"),
            new MenuItem("#", "", "Menu 2"),
            new MenuItem("#", "", "Menu 3"),
            new MenuItem("#", "", "Menu 4"),
        ];   
    }    

    toggle() {
        this.expanded = !this.expanded;
    }    
}
