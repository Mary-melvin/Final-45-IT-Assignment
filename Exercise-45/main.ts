
function carDetails (manufacturer: string, modelName: string, ...additionalInfo){

    const car = {manufacturer, modelName, ...Object.fromEntries(additionalInfo)};
    return car;

};
const myCarDetails = carDetails("Toyota", "Corolla",[`Color`, `Blue`],[`Year`, `2024`]);

console.log(myCarDetails);

