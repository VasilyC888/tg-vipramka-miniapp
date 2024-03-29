import {Component, OnDestroy, OnInit, signal} from '@angular/core';
import {TelegramService} from "../../services/telegram.service";

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit, OnDestroy {
  feedback = signal('');

  constructor(private telegram: TelegramService) {
    this.sendData = this.sendData.bind(this);
  }

  ngOnInit() {
    this.telegram.MainButton.setText('Отправить сообщение');
    this.telegram.MainButton.hide();
    this.telegram.MainButton.onClick(this.sendData);
  }

  sendData() {
    this.telegram.senfData({ feedback: this.feedback() });
  }

  handleChange(event) {
    this.feedback.set(event.target.value);

    if(this.feedback().trim()) {
      this.telegram.MainButton.show();
    } else {
      this.telegram.MainButton.hide();
    }
  }

  ngOnDestroy() {
    this.telegram.MainButton.offClick(this.sendData);
  }

}
