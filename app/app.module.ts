import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';

import { ComponentService } from './app.component.service';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent],
    providers: [ComponentService],
    bootstrap: [AppComponent]   
})

export class AppModule {}
