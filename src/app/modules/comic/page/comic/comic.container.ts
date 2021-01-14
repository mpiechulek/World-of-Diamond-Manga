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
  windowWidth: number;
  chapterPageUrlList: string[];
  mobileSliderVisibiolity = false;

  constructor(
    private chapterPagesService: ChapterPagesService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.comicArr = this.chapterPagesService.comicArr;
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {    
    this.windowWidth = event.target.innerWidth;
  }

  // if the window width is 800 or less then the mobile ballery will be active
  // else the dialog gallery
  openChapter(choosenChapter: ChapterModel) {   

    if (this.windowWidth <= 800) {    
      
      this.mobileSliderVisibiolity = true;
      this.chapterPageUrlList = this.chapterPagesService.generateChapetPagesUrlList(choosenChapter);

    } else if (this.windowWidth > 800) {

      let dialogRef = this.matDialog.open(ComicSliderDialogComponent, {
        data: {
          chapter: choosenChapter,
          panelClass: 'full-width-dialog'
        }
      });
    }
  }
  
}
