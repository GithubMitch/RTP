import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { OrderByPipe } from './orderpipe';

@Component({
    selector: 'my-app',
    templateUrl: 'list.html'
}) 

export class AppComponent { 
	    myRowData = [
        {"name":"Ronald Bowman","badge":"4","blog":"3"},
        {"name":"Pamela Hill","badge":"2","blog":"4"},
        {"name":"Jogy Bermal","badge":"2","blog":"4"},
        {"name":"Wolfram Jhonson","badge":"2","blog":"4"},
        {"name":"Willfred King","badge":"2","blog":"4"},
    ];

    title = "Professionals - Ranking the pro's"
}