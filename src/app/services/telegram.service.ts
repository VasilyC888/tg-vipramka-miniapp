import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

interface TgButton {
  show(): void;
  hide(): void;
  setText(text: string): void;
  onClick(fn: Function): void;
  offClick(fn: Function): void;
  enable(): void;
  disable(): void;
}
@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private window;
  tg;

  constructor(@Inject(DOCUMENT) private _document) {
    this.window = this._document.defaultView;
    this.tg = this.window.Telegram.WebApp;
  }

  public get MainButton(): TgButton {
    return this.tg.MainButton;
  }

  public get BackButton(): TgButton {
    return this.tg.BackButton;
  }

  ready() {
    this.tg.ready();
  }

  senfData(data: Object) {
    this.tg.sendData(JSON.stringify(data));
  }
}
