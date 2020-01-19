import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import './rx-playground';
import { map, mergeMap, concatMap, flatMap, toArray } from 'rxjs/operators';
import { from, concat, Observable, timer, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {

  }
}
