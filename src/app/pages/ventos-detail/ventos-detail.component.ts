import { AfterViewInit, Component, ElementRef, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ventos-detail',
  templateUrl: './ventos-detail.component.html',
  styleUrls: ['./ventos-detail.component.css']
})
export class VentosDetailComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() isOpen:boolean = false;
  @Input() allSales:Array<any> = [];
  @Output() closeDialog = new EventEmitter()
  constructor(private ngZone:NgZone, private el:ElementRef) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.isOpen){
      this.ngZone.runOutsideAngular(()=>{
        let el = document.querySelector('.modal-backdrop');
        el?el.removeAttribute("class"):null;
      })
    }
  }

  ngAfterViewInit(){
  }

  backToVentos(){
    this.closeDialog.next(null);
  }

}
