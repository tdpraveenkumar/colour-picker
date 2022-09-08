import { Component, OnInit, VERSION } from "@angular/core";
import{FormGroup,FormBuilder} from '@angular/forms'

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
form : FormGroup
public TS_Color_Code: string = '';
currentColor : any 
  constructor(private fb: FormBuilder){}

  ngOnInit(){
this.form = this.fb.group({
  TS_Color_Code : ['']
})
  }


 onColorPickerChange(colorCode): void {
    console.log(colorCode)
   
    this.form.get('TS_Color_Code').setValue(colorCode);

   
  }


}
