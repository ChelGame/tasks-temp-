// Описать объект, реализующий тензор любой размерности (1,2,3,…). Должна быть возможность доступа к отдельным элементам (запись/чтение) по их индексам.

class Tenzor {
    constructor() {
        this.tenzor = [];
    }

    setTenzor(tenzor, deep) {
        for (let i = 0; i < deep; i++) {
            tenzor.push([]);
            console.log(deep);
            if (deep) {
                this.setTenzor(tenzor[i], --deep);
            }
            if (!tenzor[i]) {
                tenzor[i] = 0;
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
t.setTenzor(t.getTenzor(), 3);
t.logTenzor();
