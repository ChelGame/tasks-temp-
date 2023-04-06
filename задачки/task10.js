// Описать объект, реализующий тензор любой размерности (1,2,3,…). Должна быть возможность доступа к отдельным элементам (запись/чтение) по их индексам.

class Tenzor {
    constructor() {
        this.tenzor = [];
    }

    setTenzor(tenzor) {
        let levels = [...arguments];
        tenzor = levels.shift();
        let nowLevel = levels.shift();
        if (levels.length) {
            for (let i = 0; i < nowLevel; i++) {
                tenzor[i] = [];
                this.setTenzor(tenzor[i], ...levels);
            }
        } else {
            for (let i = 0; i < nowLevel; i++) {
                tenzor[i] = i;
            }
        }
    }

    getTenzor() {
        return this.tenzor;
    }

    logTenzor() {
        console.log(this.tenzor);
    }
}

const t = new Tenzor();
t.setTenzor(t.getTenzor(), 3, 4, 3, 5, 6);
t.logTenzor();
setTimeout(() => {
    t.getTenzor()[0][1][2][3][4] = 124;
    t.logTenzor();
}, 10000)
