var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload =function(){
var res = JSON.parse(request.response);
console.log(res);

//1.Get all the countries from Asia continent /region using Filter function

const asia=res.filter((ele)=>{
    if(ele.region==='Asia'){
        return ele.name;
    }
})
console.log(asia);


//2.Get all the countries with a population of less than 2 lakhs using Filter function

var popu=res.filter((ele)=>ele.population<200000);
var countrynames=popu.map((ele)=>ele.name.common);
console.log(countrynames);


//3.Print the following details name, capital, flag, using forEach function

res.forEach((ele)=>console.log(ele.name.common,ele.capital,ele.flag));


//4.Print the total population of countries using reduce function

var totpopu=res.reduce((acc,cv)=>acc+cv.population,0);
console.log(totpopu);


//5.Print the country that uses US dollars as currency.

const usd=res.filter(ele=>{
    return(ele.currencies &&
        ele.currencies.USD &&
        ele.currencies.USD.name === "United States dollar");
    })

const counname=usd.map((ele)=>ele.name.common);console.log(counname);

}
