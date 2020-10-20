    document.getElementById("js_ipc").addEventListener('click', (e)=>{
        callee_add_of_ipc(e.arguments);
    });    
    function callee_add_of_ipc(arguments) {
        let num1 = arguments[0];
        let num2 = arguments[1];
        console.log("This is callee of IPC -- inner-communication process");
        console.log( "num1 + num2 = " + (num1 + num2));
    }