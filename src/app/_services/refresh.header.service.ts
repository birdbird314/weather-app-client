import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshHeaderService {

  @Output() refreshEmitter: EventEmitter<any> = new EventEmitter();

  refresh() {
    this.refreshEmitter.emit();
  }
}