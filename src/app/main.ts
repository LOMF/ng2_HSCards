/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../../typings/index.d.ts"/>

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";

// disable during development:
///* 
import {enableProdMode} from "@angular/core";
enableProdMode();
//*/
platformBrowserDynamic().bootstrapModule(AppModule);