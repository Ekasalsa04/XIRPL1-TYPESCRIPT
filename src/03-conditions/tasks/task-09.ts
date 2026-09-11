/**
 * A manufacturing company monitors production machines continuously.

Business Rules

If the machine is powered off:

Display Machine Offline.

Otherwise, check its operating condition.

If the machine temperature exceeds 90°C:

If vibration level is High, display:
Emergency Shutdown
Otherwise:
Cooling Required

If the temperature is 90°C or below:

If production speed is below 80%, display:
Performance Warning
Otherwise:
Machine Operating Normally

Today's machine status:
| Information      | Value |
| ---------------- | ----- |
| Powered On       | Yes   |
| Temperature      | 95    |
| High Vibration   | No    |
| Production Speed | 92    |

Student Tasks
- Declare all variables.
- Translate every business rule into conditional statements.
- Display the final machine status.
 */

const isPoweredOn: boolean = true; //Menyimpan data berupa boolean apakah mesin dalam keadaan menyala atau tidak
const temperature: number = 95; //Menyimpan data berupa angka suhu mesin
const isHighVibration: boolean = false; //Menyimpan data berupa boolean apakah mesin mengalami getaran tinggi atau tidak
const productionSpeed: number = 92; //Menyimpan data berupa angka kecepatan produksi mesin

if (!isPoweredOn) { //if akan mengecek apakah mesin dalam keadaan mati
    console.log("Machine Offline"); //Jika benar maka menampilkan pesan mesin offline
}