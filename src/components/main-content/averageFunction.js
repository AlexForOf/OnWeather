export default function findAverageNightWeather(arr) {
    let maxcount = 0;
    let element_having_max_freq;
    for (let i = 0; i < 6; i++) {
        let count = 0;
        for (let j = 0; j < 6; j++) {
            if (arr[i].condition.code == arr[j].condition.code)
                count++;
        }

        if (count > maxcount) {
            maxcount = count;
            element_having_max_freq = arr[i].condition;
        }
    }
    for (let i = 18; i < arr.length; i++) {
        let count = 0;
        for (let j = 18; j < arr.length; j++) {
            if (arr[i].condition.code == arr[j].condition.code)
                count++;
        }

        if (count > maxcount) {
            maxcount = count;
            element_having_max_freq = arr[i].condition;
        }
    }
return element_having_max_freq;
}