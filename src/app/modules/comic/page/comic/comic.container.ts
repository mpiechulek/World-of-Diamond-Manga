import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChapterPagesService } from 'src/app/core/services/chapter-pages.service';
import { ChapterModel } from 'src/app/data/models/chapter.model';
import { ComicSliderDialogComponent } from 'src/app/shared/components/comic-slider-dialog/comic-slider-dialog.component';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.container.html'
})

export class ComicContainerComponent implements OnInit {

  comicArr: ChapterModel[] = [];
  chapterPageUrlList: string[];

  constructor(
    private chapterPagesService: ChapterPagesService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.comicArr = this.chapterPagesService.comicArr;
  }

  // if the window width is 800 or less then the mobile gallery will be active
  // else the dialog gallery
  openChapter(chosenChapter: ChapterModel) {

    this.chapterPagesService.chosenChapterData = chosenChapter;

    let dialogRef = this.matDialog.open(ComicSliderDialogComponent, {
      data: {
        chapter: chosenChapter
      },
      // This overwrites the default mat dialog styles
      width: '100vw',
      maxWidth: '100vw',
    }
    );
  }

}
