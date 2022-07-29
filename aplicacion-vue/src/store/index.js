import {createStore} from 'vuex'

const store = createStore({
    state(){
        return {
            memories: [
                {
                  id: "m1",
                  image:
                    "https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/static/og-image.png",
                  title: "El viaje a la playa",
                  description: "Sol juan y mas ",
                },
                {
                  id: "m2",
                  image:
                    "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png",
                  title: "A tu casa",
                  description: "Visita a mi casa en pandemoia ",
                },
                {
                  id: "m3",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9fn0L67TxOl6oDCBBqiz9jaZuXC_JKXDZ8OArEAmz695RBfIe9mx0lVuQcmPm5ocd_U&usqp=CAU",
                  title: "Juan",
                  description: "mas ",
                },
                {
                  id: "m4",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuB4i3RuxYNp_ocZCtVvZGALQMYWTnRUAI3RbLLy6r0z7o-gKild_el3remGSgcX5N5H8&usqp=CAU",
                  title: "Juanito",
                  description: "si ",
                },
              ],
        }
    },
    getters:{
        memories(state){
            return state.memories;
        },
        memorie(stage){
            return (memoriId) =>{
                return stage.memories.find(memory => memory.id === memoriId)
            }
        }
    }
});

export default store;