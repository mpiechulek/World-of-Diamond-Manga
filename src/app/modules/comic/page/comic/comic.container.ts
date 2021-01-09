import { Component, OnInit } from '@angular/core';
import { ChapterPagesService } from 'src/app/core/services/chapter-pages.service';
import { ChapterModel } from 'src/app/data/models/chapter.model';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.container.html'
})

export class ComicContainerComponent implements OnInit {

  constructor(
    private chapterPagesService: ChapterPagesService   

    ) { }

  ngOnInit(): void {
  }

  onSendChapterToService(chapter: ChapterModel ) {   
    this.chapterPagesService.openChapter(chapter);
  }

}
