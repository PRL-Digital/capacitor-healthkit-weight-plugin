import { HealthKit } from 'capacitor-healthkit';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    HealthKit.echo({ value: inputValue })
}
