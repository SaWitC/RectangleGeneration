export class Rectangle {

  public X1: number;
  public X2: number;
  public Y1: number;
  public Y2: number;

  public getHeigth(): number {
    return Math.abs(this.Y1 - this.Y2);
  }

  public getWidth(): number {
    return Math.abs(this.X1 - this.X2);
  }

  public getPerimetr() {
    return this.getHeigth() * this.getWidth()
  }

  getX(): number {
    return Math.min(this.X1, this.X2);
  }

  getY(): number {
    return Math.min(this.Y1, this.Y2);
  }
}
