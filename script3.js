function calculateSurfaceArea(shapeType, param1, param2) {
    switch (shapeType) {
        case "cube":
            return 6*param1**2
        case "cylinder":
            return 2*Math.PI*param1*(param1 + param2)
        default: 
            return 0
    }

}
console.log(calculateSurfaceArea("cube", 4))
console.log(calculateSurfaceArea("cylinder", 3, 7))