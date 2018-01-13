import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import { DataTableModule } from 'primeng/primeng';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.less']
})
export class PizzaComponent implements OnInit {

  pizza: Pizza[];
  selectedPizza: Pizza;
  items: MenuItem[];
  constructor(private apiService: ApiService) { }
  
    ngOnInit() {
      this.apiService.get('api/pizza/').subscribe(res => {
        this.pizza = res;
      });
      this.items = [
        { label: 'View', icon: 'fa-search', command: (event) => this.viewPizza(this.selectedPizza) },
        { label: 'Delete', icon: 'fa-close', command: (event) => this.deletePizza(this.selectedPizza) }
      ];
    }
    viewPizza(select: Pizza) {
      console.log(JSON.stringify(select));
  
    }
    deletePizza(select: Pizza) {
      this.apiService.delete('api/pizza/' + select.pizza_tip).subscribe(res => {
        console.log(res);
      });
  }
}

  interface Pizza {
    pizza_tip: string,
    pizza_descriere: string,
    pizza_pret: string,
    pizza_gramaj: string
  }

