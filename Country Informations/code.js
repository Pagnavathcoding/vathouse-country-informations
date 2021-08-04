var search = document.getElementById("search");
// clear search
let clearSearch = document.getElementById("clear-search");
search.addEventListener("input", (e) => {
    let x = e.target.value;
    if (x !== '') {
        clearSearch.innerHTML = 'clear search';
        clearSearch.style.display = "block";
    }
    else {
        clearSearch.innerHTML = '';
    }
});
clearSearch.addEventListener("click", () => {
    search.value = '';
    clearSearch.style.display = "none";
})
// dark and light
let light = document.getElementById("light");
let dark = document.getElementById("dark");
let body = document.querySelector("body");
dark.addEventListener("click", () => {
    light.style.display = "block";
    dark.style.display = "none";
    body.classList.add("to-dark");
    search.classList.add("to-dark-input");
})
light.addEventListener("click", () => {
    light.style.display = "none";
    dark.style.display = "block";
    body.classList.remove("to-dark");
    search.classList.remove("to-dark-input");
})
// search all countries name
async function countryName() {
    const cname = await fetch(`https://restcountries.eu/rest/v2`);
    return cname.json().then((data) => {
        let arr = []
        let lists = document.getElementById("country");
        for (let i = 0; i < data.length; i++) {
            arr.push(data[i].name);
        }
        let options = '';
        for (let j = 0; j < arr.length; j++) {
            options += '<option value="' + arr[j] + '" />';
        }
        lists.innerHTML = options;
    }).catch(err => err);
}
countryName();
// input value to lower case
function forceLower(strInput) {
    strInput.value = strInput.value.toLowerCase();
}
// search listener key press 'Enter'
search.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (search.value === "") {
            search.classList.add("red-background");
            document.getElementById("fill").style.display = "flex";
            setTimeout(() => {
                search.classList.remove("red-background");
                document.getElementById("fill").style.display = "none";
            }, 2000)
        }
        async function countryAll() {
            const respone = await fetch(`https://restcountries.eu/rest/v2/name/${search.value}`);
            return respone.json().then((data) => {
                var flagAll = document.getElementById("flag");
                var nameAll = document.getElementById("name");
                var region = document.getElementById("region");
                var capital = document.getElementById("capital");
                var pop = document.getElementById("pop");
                flagAll.src = data[0].flag;
                nameAll.innerText = data[0].name;

                var viewSize = document.getElementById("view-size");

                viewSize.addEventListener("click", () => {
                    document.getElementById("flag-size").src = data[0].flag;
                    document.getElementById("close-flag-size").style.display = "flex";
                    document.querySelector("body").classList.toggle("stucked")
                });

                document.getElementById("close").addEventListener("click", () => {
                    document.getElementById("close-flag-size").style.display = "none";
                    document.querySelector("body").classList.remove("stucked");

                });

                region.innerText = data[0].region;
                capital.innerText = data[0].capital;
                pop.innerText = data[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                var currencies = data[0].currencies;
                var arr = [];
                currencies.forEach((data) => {
                    arr.push(JSON.stringify(data.name));
                })
                document.getElementById("list").innerHTML = arr;
                // domain
                var domain = document.getElementById("domain");
                domain.innerHTML = data[0].topLevelDomain;
                document.getElementById("sub").innerHTML = data[0].subregion;
                document.getElementById("area").innerHTML = data[0].area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }).catch((err) => {
                while (err && search.value !== "") {
                    var error = document.getElementById("err");
                    error.style.display = "flex";
                    setTimeout(() => {
                        error.style.display = "none";
                    }, 2000)
                    break;
                }
            })
        }
        countryAll();
    }
});
// search button click
let searchButton = document.getElementById("btn-search");
searchButton.addEventListener("click", () => {
    if (search.value === "") {
        search.classList.add("red-background");
        document.getElementById("fill").style.display = "flex";
        setTimeout(() => {
            search.classList.remove("red-background");
            document.getElementById("fill").style.display = "none";
        }, 2000)
    }
    async function countryAll() {
        const respone = await fetch(`https://restcountries.eu/rest/v2/name/${search.value}`);
        return respone.json().then((data) => {
            var flagAll = document.getElementById("flag");
            var nameAll = document.getElementById("name");
            var region = document.getElementById("region");
            var capital = document.getElementById("capital");
            var pop = document.getElementById("pop");
            flagAll.src = data[0].flag;
            nameAll.innerText = data[0].name;

            var viewSize = document.getElementById("view-size");

            viewSize.addEventListener("click", () => {
                document.getElementById("flag-size").src = data[0].flag;
                document.getElementById("close-flag-size").style.display = "flex";
                document.querySelector("body").classList.toggle("stucked")
            });

            document.getElementById("close").addEventListener("click", () => {
                document.getElementById("close-flag-size").style.display = "none";
                document.querySelector("body").classList.remove("stucked");

            });

            region.innerText = data[0].region;
            capital.innerText = data[0].capital;
            pop.innerText = data[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            var currencies = data[0].currencies;
            var arr = [];
            currencies.forEach((data) => {
                arr.push(JSON.stringify(data.name));
            })
            document.getElementById("list").innerHTML = arr;
            // domain
            var domain = document.getElementById("domain");
            domain.innerHTML = data[0].topLevelDomain;
            document.getElementById("sub").innerHTML = data[0].subregion;
            document.getElementById("area").innerHTML = data[0].area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }).catch((err) => {
            while (err && search.value !== "") {
                var error = document.getElementById("err");
                error.style.display = "flex";
                setTimeout(() => {
                    error.style.display = "none";
                }, 2000)
                break;
            }
        })
    }
    countryAll();
})
// country infos
async function country() {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${search.value}`);
    return res.json().then((data) => {
        var flag = document.getElementById("flag");
        var name = document.getElementById("name");
        var regionCam = document.getElementById("region");
        var capitalCam = document.getElementById("capital");
        var popCam = document.getElementById("pop");
        flag.src = data[0].flag;
        name.innerText = data[0].name;

        var viewSizeCam = document.getElementById("view-size");

        viewSizeCam.addEventListener("click", () => {
            document.getElementById("flag-size").src = data[0].flag;
            document.getElementById("close-flag-size").style.display = "flex";
            document.querySelector("body").classList.toggle("stuck");
        });

        document.getElementById("close").addEventListener("click", () => {
            document.getElementById("close-flag-size").style.display = "none";
            document.querySelector("body").classList.remove("stuck");

        })
        document.getElementById("flag-size").src = data[0].flag;
        regionCam.innerText = data[0].region;
        capitalCam.innerText = data[0].capital;
        popCam.innerText = data[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // currencies
        var currenciesCam = data[0].currencies;
        var arrCam = [];
        currenciesCam.forEach((data) => {
            arrCam.push(JSON.stringify(data.name));
        })
        document.getElementById("list").innerHTML = arrCam;

        // domain
        var domainCam = document.getElementById("domain");
        domainCam.innerHTML = data[0].topLevelDomain;
        document.getElementById("sub").innerHTML = data[0].subregion;
        document.getElementById("area").innerHTML = data[0].area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }).catch((err) => {
        return err;
    })
}
country();