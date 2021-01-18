import { AfterViewInit, Component, HostListener, Inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChapterPagesService } from 'src/app/core/services/chapter-pages.service';
import { KeyCode } from 'src/app/data/enums/key-code.enum';
import { ChapterModel } from 'src/app/data/models/chapter.model';

@Component({
  selector: 'app-comic-slider-dialog-ui',
  templateUrl: './comic-slider-dialog.component.html'

})
export class ComicSliderDialogComponent implements OnInit, AfterViewInit {

  currentPageUrl: string;
  currentPageName: string;  
  currentPageNumber: number = 1;  
  maxChapterPages: number;

  isLoading: boolean = true;
  isMobile: boolean = true;
  
  chapterPages: string[] = [];
  innerWidth: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { chapter: ChapterModel },
    private chapterPagesService: ChapterPagesService
  ) { }

  ngOnInit(): void {
  
    this.maxChapterPages = this.data.chapter.length;

    this.currentPageUrl = this.chapterPagesService.generateSinglePageUrl(this.currentPageNumber);
    this.currentPageName = this.chapterPagesService.generatePageDataToDisplay(this.currentPageNumber);

    this.innerWidth = window.innerWidth;   
    this.chapterPages = this.chapterPagesService.generateChapetPagesUrlList(this.data.chapter)
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.isLoading = false;
    }, 10)
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

  // Display the previous page 
  onPageBack() {

    this.currentPageNumber--;
    if (this.currentPageNumber <= 0) {
      this.currentPageNumber = this.maxChapterPages;
    }
    this.currentPageUrl = this.chapterPagesService.generateSinglePageUrl(this.currentPageNumber);
    this.currentPageName = this.chapterPagesService.generatePageDataToDisplay(this.currentPageNumber);
  }


  // Display the next page
  onPageForward() {
    this.currentPageNumber++;
    if (this.currentPageNumber > this.maxChapterPages) {
      this.currentPageNumber = 1;
    }
    this.currentPageUrl = this.chapterPagesService.generateSinglePageUrl(this.currentPageNumber);
    this.currentPageName = this.chapterPagesService.generatePageDataToDisplay(this.currentPageNumber);
  }

}
