document.addEventListener("DOMContentLoaded", function () {
  let obtainedMarksInput = document.getElementById("obtainedMarksInput");
  let totalMarksInput = document.getElementById("totalMarksInput");

  function calculatePercentage() {

    let obtainedMarks = parseFloat(obtainedMarksInput.value);
    let totalMarks = parseFloat(totalMarksInput.value);

        if (!isNaN(obtainedMarks) && !isNaN(totalMarks) && totalMarks !== 0 && totalMarks >= obtainedMarks && totalMarks > 0 && obtainedMarks >= 0) 
        {
            let percentage = (obtainedMarks / totalMarks) * 100;
            document.getElementById("result").innerText = `You got ${percentage.toFixed(2)} %`;
        }
        else
        {
            document.getElementById("result").innerText ="Please enter valid marks.";
        }
    }

  document.getElementById("calculateButton").addEventListener("click", calculatePercentage);
});
