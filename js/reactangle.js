function calculateReactangle() {
    // get reactangle width

    const reactangleWidthInput = document.getElementById('rectangle-width');
    const reactangleText = reactangleWidthInput.value;
    const width = parseFloat(reactangleText);
    console.log(width);


    // get reactangle length

    const reactangleLengthInput = document.getElementById('rectangle-length');
    const rectangleText = reactangleLengthInput.value;
    const length = parseFloat(rectangleText);
    console.log(length);

    // calculate area

    const area = width * length;
    console.log('the area is', area);


    // display area
    const reactangleAreaSpan = document.getElementById('reactangle-area');
    reactangleAreaSpan.innerText = area;
}