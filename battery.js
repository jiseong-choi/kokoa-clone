const battery = document.querySelector(".battery")
const bolt = document.querySelector(".fa-bolt")

let batteryPromise = navigator.getBattery();
batteryPromise.then(batteryCallback);

function batteryCallback(batteryObject) {
    printBatteryStatus(batteryObject);
    console.log(batteryObject)
}
function printBatteryStatus(batteryObject) {
    console.log("IsCharging", batteryObject.charging);
    console.log("Percentage", batteryObject.level);
   
    console.log("charging Time", batteryObject.chargingTime);
    console.log("DisCharging Time", batteryObject.dischargingTime);

    battery.innerHTML = `${100 * batteryObject.level}%`;
    if (batteryObject.charging ==false) {
        bolt.style.display = "none";
    }
}