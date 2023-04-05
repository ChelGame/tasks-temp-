// // Расширить объект Boolean новыми свойствами и методами.
// // Должна быть возможность задания для конкретного объекта Boolean собственной строковой интерпретации значений true и false.
// // Например, словами: "истина"/"ложь", "есть"/"нет", "присутствует"/"отсутствует".

Boolean.prototype.setTrue = function(True) {this.True = True};
Boolean.prototype.setFalse = function(False) {this.False = False};
Boolean.prototype.toTranslateString = function() {
    if (this.toString() === "true") {
        if (this.True) return this.True;
        return true;
    }
    if (this.False) return this.False;
    return false;
};

const bool = new Boolean(0);
bool.setTrue("Правда");
bool.setFalse("Не правда");

console.log(bool, bool.toString());

console.log(bool == false);
