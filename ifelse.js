
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript If Else</title>
</head>
<body>

    <h1>Student Result System</h1>

    <p>
        JavaScript is a programming language used to make
        web pages interactive. It supports decision-making
        statements such as if, else and else if.
    </p>

    <h2>Check Student Result</h2>

    <p>Enter your marks:</p>

    <input type="number" id="marks" placeholder="Enter marks">

    <button onclick="checkResult()">Check Result</button>

    <h3 id="result"></h3>

    <script>
        function checkResult() {
            let marks = Number(document.getElementById("marks").value);

            if (document.getElementById("marks").value === "") {
                document.getElementById("result").innerHTML =
                    "Please enter your marks.";
            }
            else if (marks < 0 || marks > 100) {
                document.getElementById("result").innerHTML =
                    "Please enter marks between 0 and 100.";
            }
            else if (marks >= 35) {
                document.getElementById("result").innerHTML =
                    "Congratulations! You are PASS.";
            }
            else {
                document.getElementById("result").innerHTML =
                    "Sorry! You are FAIL.";
            }
        }
    </script>

</body>
</html>
