import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChapterPagesService } from 'src/app/core/services/chapter-pages.service';
import { ChapterModel } from 'src/app/data/models/chapter.model';
import { ComicSliderDialogComponent } from 'src/app/shared/components/comic-slider-dialog/comic-slider-dialog.component';

@Component({
  selector: 'app-comic-ui',
  templateUrl: './comic.component.html'
})
export class ComicComponent implements OnInit {

  comicArr: ChapterModel[] = [];

  @Output() chapterEmit = new EventEmitter<ChapterModel>();

  constructor(private chapterPagesService: ChapterPagesService,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
   this.comicArr =  this.chapterPagesService.comicArr;
  }

  onChooseChapter(chapterName: string) {

    // Finding the chapter data
   const choosenChapter: ChapterModel = this.comicArr.find((chapter) => {
      return chapter.name === chapterName;
    });        
   
    let dialogRef =  this.matDialog.open(ComicSliderDialogComponent, {
        data: {
          chapter: choosenChapter,
          panelClass: 'custom-dialog-box'  
         
        }       
      }); 

    // Emmiting the chapter data to the container component
    // this.chapterEmit.emit(choosenChapter);
  }
}
