import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomMaterialModule } from "../custom-material/custom-material.module";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [SidenavComponent, DialogComponent],
  imports: [CommonModule, CustomMaterialModule],
  exports: [SidenavComponent, CustomMaterialModule]
})
export class SharedModule {}
