import { Component } from "@angular/core";

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']

}

)
export class propertyCardComponent {
  property: any = {
    "Id": 1,
    "Name": "Sunshine",
    "Type": "house",
    "Price": 1000
  }
}
