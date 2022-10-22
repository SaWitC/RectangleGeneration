import { Component, HostListener, OnInit } from '@angular/core';
import { Rectangle } from '../../models/rectangle.model';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  constructor() { }
  public rectangle: Rectangle = new Rectangle();

  ngOnInit(): void {
    //get rectangle from backend
  }

  public yResize: number;
  public xResize: number



  public canvasHeigth: number = 400
  public canvasWidth: number = 400;

  public isEdited: boolean;
  public isRectangleCreated: boolean;





  @HostListener('document:mousedown', ['$event'])
  public MouseDownEvent(event: any) {
    console.log("down");
    console.log(event);

    this.isEdited = true;

    if (!this.isRectangleCreated) {
      this.rectangle.X1 =event.clientX;
      this.rectangle.Y1 =event.clientY;
      this.rectangle.X2 =event.clientX;
      this.rectangle.Y1 =event.clientY;
    }
    else {
      this.xResize =event.clientX;
      this.yResize =event.clientY;
    }
  }

  @HostListener("document:mouseup",["($event)"])
  public MouseUpEvent(event: any) {
    console.log("up");
    this.isRectangleCreated = true;
    this.isEdited = false;

    //custom service rectangle

    //this.http.SaveRectangle(this.rectangle).subscribe();

  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
    const invisible_border = 20;

    //console.log(event);

    //check create or resize
    if (this.isEdited)
      if (!this.isRectangleCreated) {
        if (event.clientX + invisible_border < this.canvasHeigth && event.clientX - invisible_border > 0)
          this.rectangle.X2 = event.clientX;
        if (event.clientY + invisible_border < this.canvasWidth && event.clientY - invisible_border > 0)
          this.rectangle.Y2 = event.clientY;
        console.log("created");

      }
      else {
        console.log("changed");
        const speed = 1;
        const xChange = (this.xResize - event.clientX) / speed;
        const yChange = (this.yResize - event.clientY) / speed;

        let toushedResizePoint = 0;
        //check touched point
        if (Math.abs(this.rectangle.X2 - event.clientX) < 20 && Math.abs(this.rectangle.Y2 - event.clientY) < 20) {
          toushedResizePoint = 1;
        }
        else if (Math.abs(this.rectangle.X1 - event.clientX) < 20 && Math.abs(this.rectangle.Y1 - event.clientY) < 20) {
        toushedResizePoint = 2;
        }
        else if (Math.abs(this.rectangle.X1 - event.clientX) < 20 && Math.abs(this.rectangle.Y2 - event.clientY) < 20) {
            toushedResizePoint = 3;
        }
        else if (Math.abs(this.rectangle.X2 - event.clientX) < 20 && Math.abs(this.rectangle.Y1 - event.clientY) < 20) {
                toushedResizePoint = 4;
        }

        //resize
        switch (toushedResizePoint) {
          case 1:
            if (
              this.rectangle.X2 - xChange + invisible_border < this.canvasHeigth &&
              this.rectangle.X2 - xChange - invisible_border > 0
            )
              this.rectangle.X2 = this.rectangle.X2 - xChange;

            if (
              this.rectangle.Y2 - yChange + invisible_border < this.canvasWidth &&
              this.rectangle.Y2 - yChange - invisible_border > 0
            )
              this.rectangle.Y2 = this.rectangle.Y2 - yChange;

            break;
          case 2:
            if (
              this.rectangle.X1 - xChange + invisible_border < this.canvasHeigth &&
              this.rectangle.X1 - xChange - invisible_border > 0
            )
              this.rectangle.X1 = this.rectangle.X1 - xChange;

            if (
              this.rectangle.Y1 - yChange + invisible_border < this.canvasWidth &&
              this.rectangle.Y1 - yChange - invisible_border > 0
            )
              this.rectangle.Y1 = this.rectangle.Y1 - yChange;

            break;
          case 3:
            if (
              this.rectangle.X1 - xChange + invisible_border < this.canvasHeigth &&
              this.rectangle.X1 - xChange - invisible_border > 0
            )
              this.rectangle.X1 = this.rectangle.X1 - xChange;

            if (
              this.rectangle.Y2 - yChange + invisible_border < this.canvasWidth &&
              this.rectangle.Y2 - yChange - invisible_border > 0
            )
              this.rectangle.Y2 = this.rectangle.Y2 - yChange;

            break;
          case 4:
            if (
              this.rectangle.X2 - xChange + invisible_border < this.canvasHeigth &&
              this.rectangle.X2 - xChange - invisible_border > 0
            )
              this.rectangle.X2 = this.rectangle.X2 - xChange;

            if (
              this.rectangle.Y1 - yChange + invisible_border < this.canvasWidth &&
              this.rectangle.Y1 - yChange - invisible_border > 0
            )
              this.rectangle.Y1 = this.rectangle.Y1 - yChange;
            break;
        }

        this.xResize = event.clientX;
        this.yResize = event.clientY;
      }
  }


}
