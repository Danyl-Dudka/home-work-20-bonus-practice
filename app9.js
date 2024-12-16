//Number 9 
let i9 = 1;
let sum9 = 0;
let count = 0;
while ( i9 <= 156) {
    if ( 156 % i9 === 0 ) {
        if (i9 % 2 === 0) {
            document.write(i9 + ", ");
            count++;
            sum9 += i9;
        }
    }
    i9++;
}
document.write("<br>")
document.write("Кількість парних дільників від 1 до 156 становить - " + count + "<br>");
document.write("Сума парних чисел від 1 до 156 становить - " + sum9 + "<br>");
