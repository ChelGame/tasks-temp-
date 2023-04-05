// Написать и протестировать функцию перемножения матриц (с проверкой размерностей на допустимость умножения).
// Реализация должна быть объектно-ориентированной с использованием возможностей ECMAScript 6+.

class MatricesMultiply {
    constructor(m1, m2) {
        this.m1 = m1;
        this.m2 = m2;
        this.rows = 0;
        this.cols = 0;
        this.result = [];
    }

    checkMultiply() {
        this.rows = 0;
        this.cols = m2[0].length;
        let good = true;

        // проверяем на правильность матрицы
        m1.forEach((row, i) => {
            let rowCell = 0;
            row.forEach((cell, i) => {
                rowCell++;
            });
            if (this.rows === 0) {
                this.rows = rowCell;
            } else if (this.rows !== rowCell) {
                alert("Матрица 1 не правильная");
                good = false;
            }
        });

        // если строк не нашлось
        if (this.rows === 0) {
            alert("Матрица не передана либо нулевая");
            good = false;
        }
        this.rows = 0;

        m2.forEach((row, i) => {
            let rowCell = 0;
            row.forEach((cell, i) => {
                rowCell++;
            });
            if (this.rows === 0) {
                this.rows = rowCell;
            } else if (this.rows !== rowCell) {
                alert("Матрица 2 не правильная");
                good = false;
            }
        });

        // если строк не нашлось
        if (this.rows === 0) {
            alert("Матрица не передана либо нулевая");
            good = false;
        }

        this.rows = m1[0].length;
        this.cols = m2.length;

        if (this.rows !== this.cols) {
            console.log(this.rows, this.cols);
            alert("Эти матрицы нельзя перемножать");
            good = false;
        }

        for (let i = 0; i < this.cols; i++) {
            this.result[i] = [];
            for (let j = 0; j < this.rows; j++) {
                this.result[i][j] = 0;
            }
        }
        return good;
    }

    multiply() {
        if (this.checkMultiply()) {
            // столбцы 1 массива
            this.m2.forEach((col2, i) => {
                for (let j = 0; j < this.rows; j++) {
                    let sum = 0;
                    this.m1.forEach((col1, k) => {
                        console.log(`i = ${i}; j = ${j}; k = ${k}; m1[k][i] = ${this.m1[k][i]}; m2[j][k] = ${this.m2[j][k]};`);
                        sum += this.m1[k][i] * this.m2[j][k];
                    });
                    this.result[j][i] = sum;
                }
            });
            console.log(this.result);
        }
    }
}

const m1 = [
    [12, 4],
    [5, 15],
    [12, 5]
];
/*
12 5 12
4 15 5
*/

/*
4 5
4 5
2 4

*/
const m2 = [
    [4, 4, 2],
    [5, 5, 4]
];

const m  = new MatricesMultiply(m1, m2);
m.multiply();
