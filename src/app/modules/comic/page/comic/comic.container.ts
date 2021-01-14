import { Component, OnInit } from '@angular/core';
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

  constructor(
    private chapterPagesService: ChapterPagesService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.comicArr = this.chapterPagesService.comicArr;
  }

  openChapter(choosenChapter: ChapterModel) {  

    let dialogRef = this.matDialog.open(ComicSliderDialogComponent, {
      data: {
        chapter: choosenChapter,        
        panelClass: 'full-width-dialog'
      }
    });
  }
}
