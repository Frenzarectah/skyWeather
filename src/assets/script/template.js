//this file contains two different layout according to the state of the fetching process

const template =(jsonFile)=>   //this will create a string containing all the right meteo informations 
    `
    <nav class="flex flex-row justify-between items-center m-5">
                <img class="w-14 md:w-16" src="src/assets/logo_.png" onclick="obtainPos()">
                <button class="invisible md:visible md:overline md:hover:underline" onclick="weatherByCity('Milano')">Milano</button>
                <button class="invisible md:visible md:overline md:hover:underline" onclick="weatherByCity('Roma')">Roma</button>
                <button class="invisible md:visible md:overline md:hover:underline" onclick="weatherByCity('Bari')">Bari</button>
                <div class="flex flex-row h-9">
                    <input id="findCity" class="bg-[#f7f7f7] rounded-md p-2 w-40 font-anek" type="search" placeholder="Find the city...">
                    <div onclick="searchWeather()" class="bg-[#feaf39] -ml-5 rounded-xl w-10 md:w-10 items-center"><img src="src/assets/magnifier.png"></div>
                </div>    
            </nav>
            <div class="w-full h-screen bg-transparent flex items-center rounded-xl font-anek p-5 flex flex-col text-black">
                <div id="nameCity" class="ut p-5 text-center bg-transparent rounded-md shadow-md shadow-grey text-2xl">${jsonFile.name},${jsonFile.sys.country}</div>
                <div class="flex flex-row justify-center items-center">
                    <div class="m-5" id="meteo_ico"><img src="${icon[jsonFile.weather[0].main]}"></div>
                    <div class="text-2xl text-black ut" id="temp">${Math.round(jsonFile.main.temp)}°</div>
                </div>
                <div class="p-5 text-center bg-transparent rounded-md shadow-md shadow-grey">
                    <div><span id="descr">${jsonFile.weather[0].description}</span></div>
                    <div id="temp_container" class="flex flex-col justify-around">
                        <div class="text-black text-md">Temp Min:${Math.round(jsonFile.main.temp_min)}°</div>
                        <div class="text-black text-md">Temp Max:${Math.round(jsonFile.main.temp_max)}°</div>
                        <div>Humidity:${Math.round(jsonFile.main.humidity)}%</div>
                    </div>
                </div>
            </div>
        </section>
    `

const templateFail =()=>  //instead this will create a string containing an error screen
    `
    <nav class="flex flex-row justify-between items-center m-5">
                <img class="w-14 md:w-16" src="src/assets/logo_.png" onclick="obtainPos()">
                <button class="invisible md:visible md:overline md:hover:underline" onclick="weatherByCity('Milano')">Milano</button>
                <button class="invisible md:visible md:overline md:hover:underline" onclick="weatherByCity('Roma')">Roma</button>
                <button class="invisible md:visible md:overline md:hover:underline" onclick="weatherByCity('Bari')">Bari</button>
                <div class="flex flex-row h-9">
                    <input id="findCity" class="bg-[#f7f7f7] rounded-md p-2 w-40 font-anek" type="search" placeholder="Find the city...">
                    <div onclick="searchWeather()" class="bg-[#feaf39] -ml-5 rounded-xl w-10 md:w-10 items-center"><img src="src/assets/magnifier.png"></div>
                </div>    
            </nav>
            <div class="w-full h-screen bg-transparent flex items-center rounded-xl font-anek p-5 flex flex-col text-black">
                <div id="nameCity" class="ut p-5 text-center bg-transparent rounded-md shadow-md shadow-grey text-2xl">Error! Try again!</div>
                <div class="flex flex-row justify-center items-center">
                    <div class="m-5" id="meteo_ico">(>.<)</div>
                    <div class="text-2xl text-black ut" id="temp"></div>
                </div>
                <div class="p-5 text-center bg-transparent rounded-md shadow-md shadow-grey">
                    <div><span id="descr">error not found</span></div>
                    <div id="temp_container" class="flex flex-col justify-around">
                        <div class="text-black text-md">Temp Min:N/D</div>
                        <div class="text-black text-md">Temp Max: N/D</div>
                        <div>N/D</div>
                    </div>
                </div>
            </div>
        </section>
    `
const renderingDOM = (Literals,page) =>{        //this funct takes the literal templates above according to the API response
    const root = document.getElementById(page); //and the Id of where the templates will be rendered.
    root.innerHTML=Literals;
}