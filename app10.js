let i10 = 1;
while (i10 <= 10) {
    for(let l = 1; l <= 10; l++) {
        let result = i10 * l;
        document.write(l + "*" + i10 + "=" + result + ";" + "&nbsp&nbsp&nbsp");
    }
    document.write("<br>")
    i10++;
}