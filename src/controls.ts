class Controls {
  private img: p5.Image;
  private img1: p5.Image;
  private img2: p5.Image;
  private img3: p5.Image;
  constructor(img: p5.Image, img1: p5.Image, img2: p5.Image, img3: p5.Image) {
    this.img = img;
    this.img1 = img1;
    this.img2 = img2;
    this.img3 = img3;
  }

  public draw() {
    push(); // save current styles and transformations
    rectMode(CENTER);
    fill(74, 122, 167);
    rect(width / 2, height / 2, 400, 325); // larger rect
    pop();
    push();
    strokeWeight(5); // frame thickness
    stroke(255, 255, 255); // set the "frame" color
    fill(74, 122, 167);
    rectMode(CENTER);
    rect(width / 2, height / 2, 200, 270); // "frame"
    pop(); // restore previous styles and transformations

    textFont("Sansita");
    this.drawText();
    this.drawImages();
  }

  public drawText() {
    push(); // save current styles and transformations
    fill(255);
    textSize(28);
    textAlign(CENTER, CENTER);
    text("Game Controls", width / 2, height / 2.27);
    pop(); // restore previous styles and transformations
    push();
    fill(255);
    textSize(12);
    text("Player1", width * 0.462, height * 0.483);
    textSize(10);
    text("Movement", width * 0.46, height * 0.545);
    pop();
    push();
    fill(255);
    textSize(12);
    text("Player2", width * 0.52, height * 0.483);
    textSize(10);
    text("Movement", width * 0.517, height * 0.545);
    pop();
    push();
    fill(255);
    textSize(11);
    text("W | Arrow Up", width * 0.455, height * 0.57);
    text("S | Arrow Down", width * 0.455, height * 0.588);
    text("A | Arrow Left", width * 0.455, height * 0.607);
    text("D | Arrow Right", width * 0.455, height * 0.624);
    text("Move Up", width * 0.518, height * 0.57);
    text("Move Down", width * 0.518, height * 0.588);
    text("Move Left", width * 0.518, height * 0.607);
    text("Move Right", width * 0.518, height * 0.624);
    pop();
  }

  public drawImages() {
    if (this.img.width > 0 && this.img.height > 0) {
      image(this.img, width / 2 - 110, height / 2 - 155, 230, 90);
    }
    if (this.img1.width > 0 && this.img1.height > 0) {
      image(this.img1, width / 2 - 103, height / 2 - -125, 208, 34);
    }
    if (this.img2.width > 0 && this.img2.height > 0) {
      image(this.img2, width / 2 - 90, height / 2 - 10, 70, 40);
    }
    if (this.img3.width > 0 && this.img3.height > 0) {
      image(this.img3, width / 2 - -20, height / 2 - 10, 70, 40);
    }
  }
}

/* import { MenuPage } from '../src/menupage';

class Controls extends MenuPage {
    
public constructor(content: PageContent) {
    super(content);
} 

public draw() {
    
}

class Controls {
    
    public constructor(content: PageContent) {
        super(content);
    } 
    
    public draw() {
        
    }





// New example
/* draw() {
    super.draw();
    super.drawText();
    super.drawImages();
} 
} */
