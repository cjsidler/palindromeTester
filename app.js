let input = document.getElementById('palindromeInput');
let awaitingInput = '<i class="fas fa-clock fa-2x"></i><h2>awaiting input</h2>'
let palindromic = '<i class="fas fa-check correct fa-2x"></i><h2 class="correct">palindromic!</h2>'
let notPalindromic = '<i class="fas fa-times wrong fa-2x"></i><h2 class="wrong">not a palindrome</h2>'
let resultDiv = document.getElementById('result');
let palindromeRegex = /[a-z0-9]/;

// Set result div to default of 'Awaiting Input'
resultDiv.innerHTML = awaitingInput;

function filterInput(event) {

    // Grab the text in the input field, lowercase, store in array
    let inputArr = event.target.value.toLowerCase().split("");

    // Filter the array down to only letters and numbers
    let filteredArr = inputArr.filter(char => {
        return palindromeRegex.test(char);
    });

    // If we filter the array down and have no items, then we are
    // still awaiting input from the user
    if (filteredArr.length === 0) {
        resultDiv.innerHTML = awaitingInput;
        return;
    }

    // If there is one or more alphanumeric chars in the array, 
    // call a function to see if it is a palindrome.
    checkPalindrome(filteredArr);
}

function checkPalindrome(arr){
    // Start at opposite ends of the array (0 and length minus 1)
    let start = 0;
    let end = arr.length - 1;

    // Compare first char to last char and go through whole array
    // until you meet in the middle and start index exceeds end index
    while (end > start) {

        // If the two chars don't equal each other, we don't have a palindrome
        if (arr[start] !== arr[end]) {
            resultDiv.innerHTML = notPalindromic;
            return;
        }

        // If the two chars equaled each other, icrement start and decrement
        // end to be able to test the next pair of chars
        start++;
        end--;
    }

    // If we get through the whole array without finding a pair of chars
    // that don't equal each other, we have a palindrome
    resultDiv.innerHTML = palindromic;
}

// Listener for user input in the input field
input.addEventListener('input', filterInput);

