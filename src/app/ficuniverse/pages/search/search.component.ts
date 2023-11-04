import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {CategorySheetComponent} from "../../components/category-sheet/category-sheet.component";
import {TagSheetComponent} from "../../components/tag-sheet/tag-sheet.component";
import {Tag} from "../../model/tag.entity";
import {Category} from "../../model/category.entity";
import {FanficsService} from "../../services/fanfics.service";
import {Fanfic} from "../../model/fanfic.entity";
import {SharedDataService} from "../../../shared/services/shared-data.service";
import {ToolbarComponent} from "../../../shared/components/toolbar/toolbar.component";
import {find, interval} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  searching: boolean = false;
  value: any = '';
  size: number = 0;
  @Input() tagsSelected!: Array<Tag>;
  @Input() categoriesSelected!: Array<Category>;
  textInput: string = '';
  fanfics: Array<Fanfic> = [];
  fanficsFiltered: Array<Fanfic> = [];

  constructor(private bottomSheet: MatBottomSheet, private fanficService: FanficsService, private sharedData: SharedDataService) {

  }
  openCategoriesSheet(){
    const bottomSheetRef =  this.bottomSheet.open(CategorySheetComponent, {
      data: {categories: this.categoriesSelected}}
    );
    bottomSheetRef.instance.categorySender.subscribe((selectedCategories) =>{
      this.categoriesSelected = selectedCategories;
    })
  }
  openTagsSheet(){
    const bottomSheetRef = this.bottomSheet.open(TagSheetComponent,{
        data: {tags: this.tagsSelected}}
    );
    bottomSheetRef.instance.tagsSender.subscribe((selectedTags)=>{
      this.tagsSelected = selectedTags;
    })
  }
  ngOnInit(): void {
    this.fanficService.getAll().subscribe((response: any) =>{
      this.fanfics = response;
      for(let i = 0; i < this.fanfics.length; i++){
        this.fanficsFiltered.push(this.fanfics[i]);
      }
    });


      //const interval$ = interval(1000);
      //interval$.subscribe(() =>{
        //this.searchingFanfic();
      //})

  }
  /*filteringFanfics(): {
    if(this.fanficsFiltered.length != 0){
      for (let i = 0; i<this.fanficsFiltered.length; i++){
        if(this.fanficsFiltered[i].title == fanficTitle){
          return true;
        }
      }
    }
    return false;
  }*/
  searchingFanfic(){
      console.log(this.value);
      if(this.value == '') {
        this.size = this.fanficsFiltered.length;
        for (let i = 0; i < this.size; i++){
          this.fanficsFiltered.pop();
        }
        for(let i = 0; i < this.fanfics.length; i++){
          this.fanficsFiltered.push(this.fanfics[i]);
        }
        this.searching = false
      }
      else this.searching = true;
      for(let i = 0; i < this.fanficsFiltered.length; i++){
        if(!this.fanficsFiltered[i].title.toLowerCase().includes(this.value.toLowerCase())){
          this.fanficsFiltered.splice(i,1);
        }
      }
    }
}
