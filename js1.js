

function funkcja(a,b){
    return a*b;
}

//---------------------------ZADANIE 1---------------------------
function pitagoras(a,b,c){
    if ((a*a + b*b ==c*c )||(a*a+c*c==b*b)||(b*b+c*c==a*a)){
        console.log("Podane liczby stanowia trojke pitagorejska.")
    } else {
        console.log("nie stanowia trojki pitagorejskiej");
    }
}

//---------------------------ZADANIE 2---------------------------
function wypiszPierwsze(a,b,c){
    for (let i = a; i <= b; i++){
        if(i%c==0){
            console.log(i);
        }
    }
}

//---------------------------ZADANIE 3---------------------------

function tabliczkaMnozenia(a){
    for (let i = 1; i <=a; i++){
        let str="";
        for(let j=1; j <=a; j++){
            str += i*j+ ' ';
        }
        console.log(str);

    }
}



//---------------------------ZADANIE 5---------------------------
function choinka(a){


    for (let i= 1; i <= a; i++){
        let string = '';
        for (let j = 1; j <= i; j++){
        string += '*';
        }
        console.log(string);
    }

}

function choinkaNoca(a){

    let string='';
    let gwiazdki='';
    let spacje='';
    let ilosc_gwiazdek = (parseInt(a)-2)*2+1;
    for(let i = 0; i < ilosc_gwiazdek; i++){
        string += '*';
    }
    console.log(string);
    for(let j = 0; j < parseInt(a)-2; j++){
        let spacje_il = 1+j*2;
        let gwiazdki_il = (ilosc_gwiazdek-spacje_il)/2;
        for (let i = 0; i < spacje_il; i++){
            spacje += ' ';
        }
        for(let i = 0; i < gwiazdki_il; i++){
            gwiazdki += '*';
        }
        console.log(gwiazdki+spacje+gwiazdki);
        spacje='';
        gwiazdki='';
    }

    console.log(string);
}

//---------------------------ZADANIE 4---------------------------

function trojkatPascala(ileLinii){
    for(let i = 0; i < ileLinii; i++){
        let spaces = ' '*(ileLinii-i);
        TrojkatPojedynczaLinia(i);
    }
}

function TrojkatPojedynczaLinia(nrLinii) {
    const currentLine = [1];

    const LineSize = nrLinii + 1;

    for (let i = 1; i < LineSize; i += 1) {
      // See explanation of this formula in README.
      currentLine[i] = currentLine[i - 1] * (nrLinii - i + 1) /i;
    }

    console.log(currentLine);
  }


  //---------------------------ZADANIE 6---------------------------

  function poleFigur(dane, callback){
      return callback(dane);
  }

  let poleProstokata = (dane) =>{
      return dane.a * dane.b;
  }

  let poleTrapezu = (dane) => {
      return(dane.a + dane.b)/2 * dane.h;
  }

  let poleRownoleglobok = (dane) =>{
      return(a*h);
  }

   //---------------------------ZADANIE 7---------------------------
 var cars = new Array();


   function newAuto(rok, przebieg, cena_w){
       this.rok = rok;
       this.przebieg = przebieg;
       this.cena_w = cena_w;
       this.cena_k =
        cena_w-(obnizZaPrzebieg(this.przebieg) + obnizZaKazdyRok(this.rok));



   }

   let auto = new newAuto(2016, 167800, 187000);

   function addToCarList(auto){
       if (auto.cena_k > 10000){
           cars.push(auto);
       }
   }

   function increaseYear(carList){
    for (let i = 0; i < carList.length; i++){
        carList[i].rok += 1;
    }
   }

   function powiekszCene(dane){
       dane.cena_k += 1000;
   }

   function obnizZaKazdyRok(rok){
       var today = new Date();
      return  (today.getFullYear()-rok) * 1000;
   }

   function obnizZaPrzebieg(przebieg){
      return 10000 * Math.floor((przebieg / 100000));
   }

   function przeliczCene() {
        return (auto.cena_w -(obnizZaPrzebieg(auto) + obnizZaKazdyRok(auto)));
   }


   cars.push(new newAuto(2010,234321,25000));
   cars.push(new newAuto(2000,434321,2000));
   cars.push(new newAuto(2005,33333,15000));
   cars.push(new newAuto(2019,12345,250200));
   cars.push(new newAuto(2012,123455,55000));

//---------------------------ZADANIE 8---------------------------


let table = document.querySelector('.tbl');

window.onload = function(){
    for (let i = 0; i < cars.length; i++){
        table.innerHTML += '<tr><td>' + cars[i].rok +
        '</td><td>' + cars[i].przebieg +
        '</td><td>'+cars[i].cena_w+'</td><td>'+
        cars[i].cena_k + '</td></tr>';


    }
};

//---------------------------ZADANIE 9---------------------------

let accordionSections = document.querySelectorAll(".sekcja");
let accordionP = document.querySelectorAll(".acc");

for (let i = 0; i < accordionSections.length; i++){
    accordionSections[i].addEventListener('click', ()=>{
        for (let i = 0; i < accordionSections.length; i++){
            accordionSections[i].classList.remove('sekcja-chosen');
            accordionP[i].classList.remove('p-chosen');
        };
        accordionSections[i].classList.add('sekcja-chosen');
        accordionP[i].classList.add('p-chosen');
    })
}


//---------------------------ZADANIE 10---------------------------
let nastepne = document.querySelector("#btn2");
let poprzednie = document.querySelector("#btn1");
let slider = document.querySelector(".slider");

let num = 1;

nastepne.addEventListener("click", function(){
    if (num >=1 && num < 4){
        num++;
    } else{
        num = 1;
    }
    slider.innerHTML = "<img src=\"img" + num + ".jpg\"/>" ;
})

poprzednie.addEventListener("click", function(){
    if (num >1 && num <= 4){
        num--;
    } else{
        num = 4;
    }
    slider.innerHTML = "<img src=\"img" + num + ".jpg\"/>" ;
})