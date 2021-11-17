 class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }

    get area(){
      return  this.height*this.width;
    }

  
}


const pride = new Rectangle (5,15)
console.log(pride.area)
module.exports= {Rectangle};