import { Component } from '@angular/core';
import { MagicCardComponent } from "../../_components/magic-card/magic-card.component";
import { OnlyAccordionElementComponent } from "../../_components/only-accordion-element/only-accordion-element.component";

@Component({
  selector: 'app-home',
  imports: [MagicCardComponent, OnlyAccordionElementComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
