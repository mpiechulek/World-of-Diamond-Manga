import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { ChapterModel } from 'src/app/data/models/chapter.model';
@Component({
  selector: 'app-comic-ui',
  templateUrl: './comic.component.html' 
})
export class ComicComponent implements OnInit {

  @Input() comicArr: ChapterModel[];

  @Output() chosenChapter = new EventEmitter<ChapterModel>();  

  constructor() { }

  ngOnInit(): void {

  }

  onChooseChapter(chapterName: ChapterModel) {
    this.chosenChapter.emit(chapterName);
  }
}
