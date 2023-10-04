function showGeneral() {
    document.getElementById('people').style.display = 'none';
    document.getElementById('general').style.display = 'block';
    document.getElementById('accidents').style.display = 'none';
}

function showAccidents() {
    document.getElementById('people').style.display = 'none';
    document.getElementById('general').style.display = 'none';
    document.getElementById('accidents').style.display = 'block';
}

function showPeople() {
    document.getElementById('people').style.display = 'block';
    document.getElementById('general').style.display = 'none';
    document.getElementById('accidents').style.display = 'none';
}