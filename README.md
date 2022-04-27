# Jb-Calendar-1

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Install Library In Project
```
npm i jb-calendar-1
```

### app.module.ts

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JbCalendarModule } from "jb-calendar";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JbCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


### HTML File (index.html)

> Add Below tag to add calendar

```
<lib-jb-calendar></lib-jb-calendar>
```
