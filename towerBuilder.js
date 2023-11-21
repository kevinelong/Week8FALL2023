function towerBuilder(nFloors) {
    // build here
    if(nFloors==1){
        return ["*"];
    }
    output = []
    for(f=0;f<nFloors;f++){
      let sp = nFloors - 1 - f ;
      let stars = 1 + 2 * f;
    //   console.log(sp, stars)
      let text = " ".repeat(sp) + "*".repeat(stars) + " ".repeat(sp);
      console.log(text);
      output.push(text);
    }
    return output;
  }

  towerBuilder(1);
  towerBuilder(2);
  towerBuilder(3);
  towerBuilder(4);
  