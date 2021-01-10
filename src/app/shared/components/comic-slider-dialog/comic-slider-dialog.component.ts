import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChapterModel } from 'src/app/data/models/chapter.model';

@Component({
  selector: 'app-comic-slider-dialog-ui',
  templateUrl: './comic-slider-dialog.component.html'

})
export class ComicSliderDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { chapter: ChapterModel }) { }

  ngOnInit(): void {  
    
  }

  onPageBack() {

  }

  onPageForward() {
    
  }
  

}
