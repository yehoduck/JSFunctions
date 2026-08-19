function calculateSurfaceArea(shapeType, param1, param2) {
    switch (shapeType) {
        case "cube":
            if (param1 < 0 || typeof param1 !== "number") return 0
            return 6*param1**2
        case "cylinder":
            if (param1 < 0 || param2 < 0 || typeof param1 !== "number" || typeof param2 !== "number") return 0
            return 2*Math.PI*param1*(param1 + param2)
        default: 
            return 0
    }

}
console.group("Calculate surface area")
console.group("Cube surface area")
console.log(calculateSurfaceArea("cube", 4))
console.log(calculateSurfaceArea("cube", "abba"))
console.log(calculateSurfaceArea("cube", -8))
console.groupEnd()
console.group("Cylinder surface area")
console.log(calculateSurfaceArea("cylinder", 3, 7))
console.log(calculateSurfaceArea("cylinder", 2, -5))
console.log(calculateSurfaceArea("cylinder", "acdc", 4))
console.groupEnd()
console.groupEnd()