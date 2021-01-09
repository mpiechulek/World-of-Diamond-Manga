import { Injectable } from '@angular/core';
import { ChapterModel } from 'src/app/data/models/chapter.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComicSliderDialogComponent } from 'src/app/shared/components/comic-slider-dialog/comic-slider-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ChapterPagesService {

  comicArr = [
    { name: 'chapter-1', display: 'Chapter 1', length: "20", filename: "Obraz_" },
    { name: 'chapter-2', display: 'Chapter 2', length: "20", filename: "Obraz_" },
    { name: 'chapter-3', display: 'Chapter 3', length: "20", filename: "Obraz_" },
    { name: 'chapter-4', display: 'Chapter 4', length: "20", filename: "Obraz_" },
    { name: 'chapter-5', display: 'Chapter 5', length: "20", filename: "Obraz_" }
  ];

  comicUrl = 'assets/images/comic'

  // constructor(private matDialog: MatDialog) {

  // }

  openChapter(chapter: ChapterModel) {
    // this.matDialog.open(ComicSliderDialogComponent, {
    //   data: {
    //     chapter: chapter
    //   }
    // });
  }
}
