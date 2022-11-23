const data = {
    "fechaActual": "2022-01-01",
    "eventos": [
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
            "name": "Collectivities Party",
            "date": "2021-12-12",
            "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 5
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas2.jpg",
            "name": "Korean style",
            "date": "2021-08-12",
            "description": "Enjoy the best Korean dishes, with international chefs and awesome events.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 10
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo5.jpg",
            "name": "Jurassic Park",
            "date": "2021-11-02",
            "description": "Let's go meet the biggest dinosaurs in the paleontology museum.",
            "category": "Museum",
            "place": "Field",
            "capacity": 82000,
            "assistance": 65892,
            "price": 15
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo1.jpg",
            "name": "Parisian Museum",
            "date": "2022-11-02",
            "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
            "category": "Museum",
            "place": "Paris",
            "capacity": 8200,
            "estimate": 8200,
            "price": 3500
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces2.jpg",
            "name": "Comicon",
            "date": "2021-02-12",
            "description": "For comic lovers, all your favourite characters gathered in one place.",
            "category": "Costume Party",
            "place": "Room C",
            "capacity": 120000,
            "assistance": 110000,
            "price": 54
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces1.jpg",
            "name": "Halloween Night",
            "date": "2022-02-12",
            "description": "Come with your scariest costume and win incredible prizes.",
            "category": "Costume Party",
            "place": "Room C",
            "capacity": 12000,
            "estimate": 9000,
            "price": 12
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica1.jpg",
            "name": "Metallica in concert",
            "date": "2022-01-22",
            "description": "The only concert of the most emblematic band in the world.",
            "category": "Music Concert",
            "place": "Room A"
            , "capacity": 138000,
            "estimate": 138000,
            "price": 150
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica2.jpg",
            "name": "Electronic Fest",
            "date": "2021-01-22",
            "description": "The best national and international DJs gathered in one place.",
            "category": "Music Concert",
            "place": "Room A",
            "capacity": 138000,
            "assistance": 110300,
            "price": 250
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Maraton3.jpg",
            "name": "10K for life",
            "date": "2021-03-01",
            "description": "Come and exercise, improve your health and lifestyle.",
            "category": "Race",
            "place": "Campo de FutbÃ³l",
            "capacity": 30000,
            "assistance": 25698,
            "price": 3
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Maraton1.jpg",
            "name": "15K NY",
            "date": "2021-03-01",
            "description": "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            "category": "Race",
            "place": "New York",
            "capacity": 3000000,
            "assistance": 2569800,
            "price": 3
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Libros7.jpg",
            "name": "School's book fair",
            "date": "2022-10-15",
            "description": "Bring your unused school book and take the one you need.",
            "category": "Book Exchange",
            "place": "Room D1",
            "capacity": 150000,
            "estimate": 123286,
            "price": 1
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Libros3.jpg",
            "name": "Just for your kitchen",
            "date": "2021-11-09",
            "description": "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            "category": "Book Exchange",
            "place": "Room D6",
            "capacity": 130000,
            "assistance": 90000,
            "price": 100
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Cine3.jpg",
            "name": "Batman",
            "date": "2021-3-11",
            "description": "Come see Batman fight crime in Gotham City.",
            "category": "Cinema",
            "place": "Room D1",
            "capacity": 11000,
            "assistance": 9300,
            "price": 225
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Cine7.jpg",
            "name": "Avengers",
            "date": "2022-10-15",
            "description": "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            "category": "Cinema",
            "place": "Room D1",
            "capacity": 9000,
            "estimate": 9000,
            "price": 250
        }
    ]
}

const pastEvents = [];
const upcomingEvents = [];
data.eventos.map(event => {
    if (Date.parse(event.date) < Date.parse(data.fechaActual)) {
        pastEvents.push(event)

    }else{
        
        upcomingEvents.push(event)

    }
})

const elemCheck = (event) => {
   return `
            <div class="form-check col-md-2">
                <input class="form-check-input" type="checkbox" value="${event.category}" id="flexCheck" >
                <label class="form-check-label" for="flexCheckChecked">
                  ${event.category}
                </label>
            </div>
            
    `
}

const elemcard = (event, href) => {
    return `
    
   


            <div class="card  col-md-6   " id="crd" style="width: 15rem;">
            <img src="${event.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title ">${event.name}</h5>
                <p class="card-text">${event.description}</p>
                <label class="form-label hidden" for="flexCheckChecked">${event.category}</label>
            </div>
            <div class="card_price_detail">
                <p class="card_price">Price: $ ${event.price}</p>
                <a href=${href}  class="card_button">View Detail</a>
            </div>
    
      
        </div>
            
            `
}

const noneResult = () => {
    return `
    <div class="col-md-12 noneRes hidden">
        <h1 class="text-center">No results found</h1>

    </div>
    `
}

const insertElement = (data, href) => {
    let cardContainer = document.querySelector('.container-cards');
    let checkContainer = document.querySelector('.content-search');
    let checks = []
    
    data.map(event => {
        event.category;
        if (!checks.includes(event.category)) {
            checks.push(event.category);
            checkContainer.insertAdjacentHTML("afterbegin",elemCheck(event) );
        }

        cardContainer.insertAdjacentHTML("beforeend", elemcard(event,href));
        
    })
    cardContainer.insertAdjacentHTML("beforeend", noneResult())
    eventFiltroCheck();
    viewDetail();


}




//lista de elementos
const listItem = document.getElementsByClassName('card  col-md-6') ;


const eventFiltro = (event) => {
    //creo la conexion con text input
    const inputText = document.getElementsByClassName("form-control ")[0];
    inputText.addEventListener('keyup', (event) => {
        let cont = 0;
        let arrElementos = Array.from(listItem).length;
        Array.from(listItem).forEach((item) => {
            const itemTitle = item.querySelector('h5').textContent;
            itemTitle
                .toLocaleLowerCase()
                .includes(event.target.value.toLocaleLowerCase())
                ? item.style.display = 'block' : item.style.display = 'none';
         

                item.style.display=='block'  ? cont : cont++;
                
              //  cont++;
            })
            //mostrar los block
            //console.log(cont);
           console.log(typeof(event.target.value));

           if (cont == arrElementos && event.target.value != '') {
               //document.querySelector('.hidden').style.display = 'block';
               document.querySelector('.noneRes').classList.remove('hidden');
            } else{
                document.querySelector('.noneRes').classList.add('hidden');
           }

    });
}


eventFiltro();



//const de evento de filtrado
const eventFiltroCheck = (event) => {

    //obtengo todos los checkbox 
    let checks = document.querySelectorAll('.form-check-input');
    //nombre de los checks seleccionados
    let checksChecked = [];


    //recorro los checkbox
    checks.forEach((check) => {
        //agrego evento change
        check.addEventListener('change', (event) => {
            //obtengo el valor del check
            let valCheck;
            //obtengo el valor del itemCheck
            //gurado los checks seleccionados
            let item = [];

            if (checksChecked.includes(event.target.value)) {
                //elimino elemento
                checksChecked.splice(checksChecked.indexOf(event.target.value), 1);
            }else{
                //agrego elemento
                checksChecked.push(event.target.value);
            }
            //muestro todos los valores con los elementos

            valCheck = event.target.value;

            console.log(checksChecked);

            //recorro los elementos
            Array.from(listItem).forEach((item) => {
                //obtengo el valor del itemCheck
                let itemCheck = item.querySelector('.form-label').textContent;
                //comparo los valores
                if (!checksChecked.includes(itemCheck)) {
                    item.style.display = 'none';
                }else{
                    item.style.display = 'block';
                }
            })

            Array.from(listItem).forEach((item) => {
                //obtengo el valor del itemCheck
                let itemCheck = item.querySelector('.form-label').textContent;
                //comparo los valores
                if (!checksChecked.includes(itemCheck)) {
                    item.style.display = 'none';
                }else{
                    item.style.display = 'block';
                }
            })
            
           
            if (checksChecked.length == 0) {
                Array.from(listItem).forEach((item) => {
                    item.style.display = 'block';
                })
            }
        })
            
        
     
    })
    //recorro los items
    Array.from(listItem).forEach((item) => {
        //obtengo el valor del item
        valItem = item.querySelector('label').textContent;
        //comparo los valores
        console.log(checksChecked.includes(valItem));
        if (checksChecked.includes(valItem)) {
            item.style.display = 'none';
        }
    })

}
eventFiltroCheck();






const viewDetail = (event) => {
    Array.from(listItem).forEach((item) => {
        item.querySelector('.card_button').addEventListener('click', () => {
            //obtengo el objeto
            data.eventos.map((event) => {
                console.log(event.category);
            })



            
            
        })

    })
    //obtengo el card
//    localStorage.setItem('event', JSON.stringify(event));
}

viewDetail();







const URLactual = window.location.pathname.split('/').pop();

switch (URLactual) {
    
    case 'index.html':  insertElement(data.eventos, "./pages/details.html");
                       
        break;
    
    case 'upComing.html': insertElement(upcomingEvents, "../pages/details.html");

        break;
    
    case 'pastEvents.html': insertElement(pastEvents,"../pages/details.html");  

        break;

    default: 
        
            insertElement(data.eventos,"./pages/details.html");
    
    
    
    break;

}