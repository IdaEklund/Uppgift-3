//Jag väljer ".project"-klassen från HTML med "querySelectorAll" och 
// döper den till "projectBoxes" här i JavaScript.
const projectBoxes = document.querySelectorAll(".project");

//För varje fyrkant skapas en funktion med hjälp av en händelsehanterare,
//"addEventListener". "ForEach"-loopen går igenom varje fyrkants ".content".
//Funktionen aktiveras när användaren för musen över fyrkanten. När musen
//förs över en fyrkant läggs ett filter över den med en länk till mina projekt.
//När musen förs ut ur fyrkanten försvinner filtret och länken. Det blir transparent igen.
//Källa: https://www.w3schools.com/jsref/event_onmouseover.asp och https://www.w3schools.com/jsref/event_onmouseout.asp.
projectBoxes.forEach(function (box) {
    const content = box.querySelector(".content");

    box.addEventListener("mouseover", function () {
        content.style.opacity = 1;
    });

    box.addEventListener("mouseout", function () {
        content.style.opacity = 0;
    });   
});


// Funktionen nedan hämtar och visar Json-data.
function fetchData() {
    //Fetch() hämtar Json-filen.
    fetch("mydata.json")
        .then(function(response) {
            //När servern svarar konverteras svaret till Json-format.
            return response.json();
        })
        //Json-datan används i koden nedan och HTML:en uppdateras med data från J-son.
        .then(function(data) {

            //Jag väljer "header1" från HTML med "getElementById" och 
            //döper den till "firstHeader" här i JavaScript. Json-datans
            //"name"-data skrivs in som "header1" i HTML.
            const firstHeader = document.getElementById("header1");
            firstHeader.textContent = data.Name1;
            
            //"educationList" i Json loopas igenom och för varje objekt
            //skapas ett nytt list-HTML-element med "document.createElement".
            data.educationList.forEach(function(item) {
            
                const list = document.createElement("li"); 
                list.classList.add("listItem");
                
                //Listan med data från J-son läggs till i html:en.
                const cvList = document.getElementById("educationListCV");
                cvList.appendChild(list);
                
                //Jag skapade en lista med två kolumner med hjälp av "span"-elementet.
                //Kolumnerna fick en grid-layout.
                list.style.display = "grid";
                list.style.gridTemplateColumns = "2fr 1fr";
                list.style.alignItems = "center";

                //I den första kolumnen la jag till utbildningens namn.
                const educationColumn = document.createElement("span")
                educationColumn.classList.add("education")
                educationColumn.textContent = item.title;

                //Kolumnerna fick lite padding.
                educationColumn.style.padding = "0 3% 0 0";

                //I den andra kolumnen la jag till utbildningens tidsperiod.
                const periodColumn = document.createElement("span");
                periodColumn.classList.add("period");
                periodColumn.textContent = item.period;

                //Kolumnen fick lite padding.
                periodColumn.style.padding = "2% 0 2% 0";

                //Med koden nedan läggs kolumnerna till i listan.
                list.appendChild(educationColumn);
                list.appendChild(periodColumn);   
                });


            //Jag väljer "header2" från HTML med "getElementById" och 
            //döper den till "secondHeader" här i JavaScript. Json-datans
            //"name"-data skrivs in som "header2" i HTML.
            const secondHeader = document.getElementById("header2");
            secondHeader.textContent = data.Name2;
                
            //"workList" i Json loopas igenom och för varje objekt
            //skapas ett nytt list-HTML-element med "document.createElement".
            data.workList.forEach(function(item) {
            
                const list = document.createElement("li"); //Skapar nytt li-element.
                list.classList.add("listItem"); 
                
                //Listan med data från Json läggs till i html:en.
                const cvList2 = document.getElementById("workListCV");
                cvList2.appendChild(list);
                
                //Jag skapade en lista med två kolumner med hjälp av "span"-elementet.
                //Kolumnerna fick en grid-layout.
                list.style.display = "grid";
                list.style.gridTemplateColumns = "2fr 1fr";
                list.style.alignItems = "center";

                //I den första kolumnen la jag till jobbens namn.
                const workColumn = document.createElement("span")
                workColumn.classList.add("work")
                workColumn.textContent = item.title;

                //Kolumnerna fick lite padding.
                workColumn.style.padding = "2% 3% 2% 0";

                //I den andra kolumnen la jag till jobbens tidsperiod.
                const timeColumn = document.createElement("span");
                timeColumn.classList.add("time");
                timeColumn.textContent = item.period;

                //Kolumnen fick lite padding.
                timeColumn.style.padding = "2% 0 2% 0";

                //Med koden nedan läggs kolumnerna till i listan.
                list.appendChild(workColumn);
                list.appendChild(timeColumn);
                });
                
        })
        //Ett felmeddelande kommer upp om Json-datan inte laddas upp på webbsidan.
        .catch(function(error) {
            console.error("Datan kunde inte laddas:", error);
        });
}

//Json-datan laddas in när webbsidan laddas, med nedanstående funktion. 
fetchData();