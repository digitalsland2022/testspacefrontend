import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ventos',
  templateUrl: './ventos.component.html',
  styleUrls: ['./ventos.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class VentosComponent implements OnInit {
  isOpen:boolean = false;
  allSales = [
    {client:'ABC', date:'02-12-2021', total:65.50},
    {client:'XYZ', date:'02-02-2021', total:75.50},
    {client:'OOO', date:'02-10-2021', total:55.50}
  ]

  constructor(private el:ElementRef) { }

  ngOnInit(): void {
  }
  
  closeDialog(){
    let el:HTMLElement = this.el.nativeElement.querySelector('#viewDetail')
    el.style.display = "none";
  }

}
