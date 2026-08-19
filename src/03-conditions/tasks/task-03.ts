/**
 * An Internet Service Provider recommends an internet package based on the customer's monthly data usage.
 * Business Rules
 * | Monthly Usage    | Recommended Package |
 * | ---------------- | ------------------- |
 * | Less than 50 GB  | Basic               |
 * | 50–150 GB        | Standard            |
 * | More than 150 GB | Premium             |
 * 
 * Today's customer has used:
 * | Information   | Value        |
 * | ------------- | ------------ |
 * | Customer Name | Raka Saputra |
 * | Monthly Usage | 124 GB       |
 * 
 * Tasks:
 * 1. Declare all variables.
 * 2. Implement the business rules using if...else if...else.
 * 3. Display the recommended package.
 */

const customerName: string = "Raka Saputra"; //Menyimpan data berupa teks nama pelanggan
const monthlyUsage: number = 124; //Menyimpan data berupa angka pemakaian bulanan

if (monthlyUsage < 50) { //if akan mengecek apakah pemakaian bulanan kurang dari 50
    console.log("Recommended Package: Basic"); //Jika benar maka menampilkan paket Basic
}
else if (monthlyUsage >= 50 && monthlyUsage <= 150) { //else if akan mengecek apakah pemakaian bulanan lebih besar atau sama dengan 50 dan kurang dari atau sama dengan 150
    console.log("Recommended Package: Standard"); //Jika benar maka menampilkan paket Standard
}
else { //Jika semua kondisi diatas tidak terpenuhi maka akan menampilkan paket Premium
    console.log("Recommended Package: Premium"); //Menampilkan paket Premium
}

