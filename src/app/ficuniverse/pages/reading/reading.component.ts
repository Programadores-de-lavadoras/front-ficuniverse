import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../../services/chapter.service';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit{
  chapters: any[] = [];
  selectedChapterId: number = 0; 
  selectedChapterTitle: string = '';
  selectedChapterContent: string = '';
  categories: any[] = [];

  constructor(private chapterService: ChapterService) {}

  ngOnInit() {
    this.loadChapters();
  }

  loadChapters() {
    this.chapterService.getChapters().subscribe(
      (data) => {
        this.chapters = data;
        //this.selectedChapterTitle = this.chapters[1].title;
        //this.selectedChapterContent = this.chapters[1].content;
      },
      (error) => {
        console.error('Error al cargar los capítulos', error);
      }
    );
  }

  
  
  onChapterChange() {
    console.log('Selected Chapter ID:', this.selectedChapterId);
    const selectedChapter = this.chapters.find(chapter => chapter.id === this.selectedChapterId);
  
    if (selectedChapter) {
      this.selectedChapterTitle = selectedChapter.title;
      this.selectedChapterContent = selectedChapter.content;
      console.log('Updated Title:', this.selectedChapterTitle);
      console.log('Updated Content:', this.selectedChapterContent);
    }
  }

}
