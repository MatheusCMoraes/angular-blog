import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	@Input()
	photoCover:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJ3Z5FOcmX6WwMIkyd5cgT-uL_sO4EDgIgQ&usqp=CAU";

	@Input()
	contentTitle:string="";

	@Input()
	contentDescription:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
