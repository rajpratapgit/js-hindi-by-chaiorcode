document.getElementById("changeColorBtn").addEventListener("click", function () {
    let colors = [
      "#0cadb3",
      "#82e561",
      "#895ad0",
      "#ee8345",
      "#02e89f",
      "#f76666",
    ];
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
  });
