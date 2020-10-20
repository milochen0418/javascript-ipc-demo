    function caller_add_of_ipc(num1, num2) {
        var e = new Event("click");
        e.arguments = arguments;
        document.getElementById("js_ipc").dispatchEvent(e);
    }
    document.getElementById("test_btn").addEventListener('click', function(e) {
        console.log("click to invoke caller of IPC");
        caller_add_of_ipc(33, 22);      
    });

