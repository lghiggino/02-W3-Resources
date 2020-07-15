console.log("You can do it");

const button = document.querySelector("#printBtn");
/*button.addEventListener("click", print());

function print(){
    window.print();
}

EXPLICAÇÃO:
Congratulations, you caused a StackOverflow!

This code:

function print() {
    window.print();
}

is same as writing:

window.print = function {
    window.print();
}

Basically you overwrote the native window.print function with your own function that calls window.print recursively. The solution is simple... remove your function and simply:

<button onclick="window.print()" id="print">print</button>

Or this:

<button onclick="myPrintFunction()" id="print">print</button>
<script>
    function myPrintFunction() {
        // do something maybe
        window.print();
    }
</script>


*/