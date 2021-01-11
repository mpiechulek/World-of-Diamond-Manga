import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KeyCode } from 'src/app/data/enums/key-code.enum';
import { ChapterModel } from 'src/app/data/models/chapter.model';

@Component({
  selector: 'app-comic-slider-dialog-ui',
  templateUrl: './comic-slider-dialog.component.html'

})
export class ComicSliderDialogComponent implements OnInit {

  galleryUrl = './assets/images/comic/';
  currentPageUrl: string;
  currentPageName: string;
  currentPageNumber: number = 1;
  maxChapterPages: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { chapter: ChapterModel }) { }

  ngOnInit(): void {
    this.maxChapterPages = parseInt(this.data.chapter.length);
    this.generatePageData(this.currentPageNumber);
  }

  //  Listing for arrow events
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KeyCode.LEFT_ARROW) {
      this.onPageBack();
    } else if (event.keyCode === KeyCode.RIGHT_ARROW) {
      this.onPageForward();
    }
  }

  //
  onPageBack() {
    this.currentPageNumber--;

    if (this.currentPageNumber <= 0) {
      this.currentPageNumber = this.maxChapterPages;
    }

    this.generatePageData(this.currentPageNumber);
  }

  //
  onPageForward() {
    this.currentPageNumber++;

    if (this.currentPageNumber > this.maxChapterPages) {
      this.currentPageNumber = 1;
    }

    this.generatePageData(this.currentPageNumber);
  }

  //
  generatePageData(pageNumber: number) {

    this.currentPageName =
      this.data.chapter.name +
      '-' +
      this.currentPageNumber +
      '/' +
      this.data.chapter.length;

    console.log(this.currentPageName);

    this.currentPageUrl =
      './assets/images/comic/' +
      this.data.chapter.name +
      '/' +
      this.data.chapter.filename +
      '-' +
      pageNumber +
      '.jpg';

    console.log(this.currentPageUrl);
  }

}
