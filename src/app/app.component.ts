import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  question: string = 'Will you be my Valentine? ❤️';
  noResponses: string[] = [
    'No',
    'Are you sure? Chakkare 😢',
    'Think again! Please 🥺',
    'Pleaseeee? Pookie 🥹',
    "I'll be sad... babyyy 😭",
    "Don't break my heart 💔",
    'Just say YES! My Babyy🥰',
  ];
  currentNoIndex: number = 0;
  yesSize: number = 16;
  gifUrl: string =
    'https://gifdb.com/images/high/cute-happy-excited-cat-gx339xf5f5zewrju.gif';
  showFinalGif: boolean = false;

  addGif(event: any) {
    this.gifUrl = event.target.value;
  }

  onNoClick() {
    if (this.currentNoIndex < this.noResponses.length - 1) {
      this.currentNoIndex++;
    }
    this.yesSize *= 2;
  }

  onYesClick() {
    this.question = "Yay! Happy Valentine's Day! 💖";
    this.showFinalGif = true;
  }
}
