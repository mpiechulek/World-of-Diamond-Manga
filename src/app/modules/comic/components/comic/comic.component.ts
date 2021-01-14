import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChapterModel } from 'src/app/data/models/chapter.model';

@Component({
  selector: 'app-comic-ui',
  templateUrl: './comic.component.html'
})
export class ComicComponent implements OnInit {

  @Input() comicArr;

  @Output() choosenChapter = new EventEmitter<ChapterModel>();

  constructor() { }

  ngOnInit(): void {

  }

  onChooseChapter(chapterName: ChapterModel) {
    this.choosenChapter.emit(chapterName);
  }
  


}
