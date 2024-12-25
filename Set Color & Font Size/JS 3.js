// التاسك المطلوبة معا شوية إضافات عشان كنت فاضي 
let Color = "";
let FontSize = "";
        document.getElementById("FontAndColor").addEventListener("click", function() {
            Color = prompt("Enter a Color you Prefer");
            FontSize = prompt("Enter font size in pixels");
        });
        document.getElementById("CommitChange").addEventListener("click", function() {
            //قعدت العب الصراحة وعملت دي زي إضافة كدا 
            if (!Color) Color = "red";  
            if (!FontSize) FontSize = 30; 
            let paragraphs = document.querySelectorAll(".par");
            paragraphs.forEach(function(paragraph) {
                paragraph.style.color = Color;
                paragraph.style.fontSize = FontSize + "px";  
            });
        });

// التاسك المطلوبة ب الظبط مع ال اخدناه ف السشن 
        document.querySelector(".CommitChange1").addEventListener("click", function() {
            let chosenColor = prompt("Enter a color ");
            let chosenFontSize = prompt("Enter font size");
            let paragraphs = document.querySelectorAll(".par1");
            for (let i = 0; i < paragraphs.length; i++) {
                paragraphs[i].style.color = chosenColor;
                paragraphs[i].style.fontSize = chosenFontSize + "px";
            }
        });

//دي لما كنا في الوورك سبيس عشان مكنش معايا الابتوب بس
let takecol = document.getElementById("col");
        let paragraphs = document.querySelectorAll(".par0");
        takecol.addEventListener("click", function() {
            let color = prompt("Choose Your Color");
            for (let i = 0; i < paragraphs.length; i++) {
                paragraphs[i].style.color = color; 
            }
        });