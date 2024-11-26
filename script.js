// Update the span with the current value of the range input
const ugisInput = document.getElementById('ugis-input');
const ugnisValue = document.getElementById('ugis');
 
ugisInput.addEventListener('input', () => {
    ugnisValue.textContent = ugisInput.value;
});