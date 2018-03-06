function main() {
    let fromDateValue = document.getElementById('from-date').value;
    let toDateValue = document.getElementById('to-date').value;

    dateController(fromDateValue, toDateValue);

    //to-date validation
    /*if (toDateValue === '') {
        console.log('empty!');
    } else if (toDateValue < currentDate) {
        console.log('empty!');
    } else {
        dateController(toDateValue);
    }*/
}