import { NgModule } from "@angular/core";
import { ViewformComponent } from "./viewform.component";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { MyFormModule } from "../my-form/my-form.module";
import { UpdateFormModule } from "../update-form/update-form.module";

@NgModule({
    declarations: [ViewformComponent],
    imports: [IonicModule, CommonModule, MyFormModule, UpdateFormModule],
    exports: [ViewformComponent]
})
export class ViewFormModule {}