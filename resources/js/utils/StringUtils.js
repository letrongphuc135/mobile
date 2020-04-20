export default class StringUtil {
    formatNumber(value) {
        if (!value) {
            return ''
        }
        value = parseInt(value)
        value = Number(value)
        .valueOf()
        .toString()
        value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        value = value + " ₫";
        return value;
    }

    splitString(str){
        this.splitedStr = str.split("-");
        console.log(this.splitedStr);
        return this.splitedStr[this.splitedStr.length-1];
    }
}
