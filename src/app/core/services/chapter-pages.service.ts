import { Injectable } from '@angular/core';
import { ChapterModel } from 'src/app/data/models/chapter.model';

@Injectable({
  providedIn: 'root'
})
export class ChapterPagesService {

  comicArr: ChapterModel[] = [
    { name: 'chapter-1', display: 'Chapter 1', length: 46, filename: "ch-001" },
    { name: 'chapter-2', display: 'Chapter 2', length: 18, filename: "ch-002" },
    // { name: 'chapter-3', display: 'Chapter 3', length: 22, filename: "ch-003" },
    // { name: 'chapter-4', display: 'Chapter 4', length: 23, filename: "ch-004" },
    // { name: 'chapter-5', display: 'Chapter 5', length: 31, filename: "ch-005" }  
  ]  

  comicUrl: string = 'assets/images/comic';

  chosenChapterData: ChapterModel;

  generateChapterPagesUrlList(chosenChapter: ChapterModel): string[] {
    let pageUrl: string;
    let page = 1;
    let chapterPageUrlList = [];  

    for (page; chosenChapter.length >= page; page++) {

      pageUrl =
        './assets/images/comic/' +
        chosenChapter.name +
        '/' +
        chosenChapter.filename +
        '-' +
        page +
        '.jpg';

      chapterPageUrlList.push(pageUrl);
    }

    return chapterPageUrlList;
  }

  // Creating the current page url link and the page name to display
  generateSinglePageUrl(pageNumber: number) {
    return './assets/images/comic/' +
      this.chosenChapterData.name +
      '/' +
      this.chosenChapterData.filename +
      '-' +
      pageNumber +
      '.jpg';
  }

  // and the page name to display
  generatePageDataToDisplay(pageNumber: number) {
    return this.chosenChapterData.name +
      '-' +
      pageNumber +
      '/' +
      this.chosenChapterData.length;
  }


}
