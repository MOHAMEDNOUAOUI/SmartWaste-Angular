import { Component } from '@angular/core';
import { LogoComponent } from "../../components/logo/logo.component";
import { DashboardnavholderComponent } from "../../components/dashboardnavholder/dashboardnavholder.component";
import { DashboardnavbarBottomComponent } from "../../components/dashboardnavbar-bottom/dashboardnavbar-bottom.component";

@Component({
  selector: 'app-dashboard-worker-panel',
  imports: [DashboardnavholderComponent, DashboardnavbarBottomComponent],
  templateUrl: './dashboard-worker-panel.component.html',
  styleUrl: './dashboard-worker-panel.component.css'
})
export class DashboardWorkerPanelComponent {

}
