const express = require('express');//importa libreria
const app = express()//instancia a la libreria express
const port = 3002;
//cors permite solicitudes entre diferentes dominios
const cors = require('cors');//importa modulo cors

//Array de objetos (hardcodeado)
let clientes =[
    {nombre:"Jazztel", cif:"A123",direccion:"Gran Vía 22", localidad:"Barcelona"},
    {nombre:"Orange", cif:"B123",direccion:"Principe pio 40", localidad:"Bilbao"},
    {nombre:"Movistar", cif:"C123",direccion:"Castella 100", localidad:"Madrid"}
]
app.use(cors());//usa cors en la app
app.use(express.json());//nos permite ejecutar algo para todas las peticiones y una vez ejecutado continue con la ejecucion
app.use(express.urlencoded({extended:true}));// convierte en objetos JS


//muestra todos los clientes
app.get('/',(req,res)=>{//pedimos los recursos de clientes
    res.status(200).send(clientes)//define en la cabecera el codigo de estado y muestra los clientes
})

//Solo muestra el cliente completo del cif que se ha puesto en la ruta. localhost:3002/A123
app.get('/:cif',(req,res)=>{// Maneja solicitudes GET a la ruta '/:cif' //req: entrada , rest:salida
    console.log(req.params.cif);
    let cliente = clientes.find(elem => { // Busca un cliente con el  cif proporcionado
        return elem.cif == req.params.cif; //devuelve el primer element con el cif especifico
    });
    if(cliente === undefined){//Si el cliente no existe
        return res.status(404).json({//404 no encontrado
            message: 'No se encontró ningún cliente con ese CIF'
        });
    }
    res.status(200).json({//responde con status 200 (éxito) y envía respuesta en JSON que contiene info del cliente
        cliente: cliente /*clave: valor JSON (find) */
    })
});

app.post('/',(req,res)=>{//Envia a una aplicacion datos
    if(req.body===undefined){//req.body : contenido de la solicitud
        return res.status(400).json({//error general
            mensaje: 'Datos de clientes obligatorios'
        })
    }

    clientes.push(req.body);//agrega req.body al final del array
    
    res.status(201).json({//201 creacion de registro
        mensaje:'El cliente ha sido registrado correctamente'
    })
    console.log(clientes);
})

app.put('/:cif',(req,res)=>{//actualiza por cif
    if(req.body===undefined){// contenido de la solicitud
        return res.status(400).json({//error general
            mensaje: 'Datos de clientes a actualizar obligatorios'
        })
    }
    if(req.params.cif===undefined){
        return res.status(400).json({//error general
            mensaje: 'El CIF del cliente a actualizar obligatorio'
        })
    }

    //obtenemos posicion del elemento del array
    const posicion = clientes.findIndex(elem =>{
        return elem.cif === req.params.cif;       
    })
    if(posicion <0){
        return res.status(404).json({//error general
            mensaje: 'Cliente no encontrado'
        })
    }
    if(req.body.nombre !== undefined){
        //actualiza nombre de cliente
        clientes[posicion].nombre = req.body.nombre;
    }
    if(req.body.direccion !== undefined){
        clientes[posicion].direccion = req.body.direccion;
    }
    if(req.body.localidad !== undefined){
        clientes[posicion].localidad = req.body.localidad;    
    }
    res.status(201).json({//201 creacion
        mensaje : "El cliente ha sido actualizado correctamente"
    })
    console.log(clientes)
})  

app.delete('/:cif',(req,res)=>{//eliminamos por cif
    if(req.params.cif===undefined){
        return res.status(400).json({//error general
            mensaje: 'El CIF del cliente a actualizar obligatorio'
        })
    }
    const posicion = clientes.findIndex(elem =>{//Encuentra la posición del cliente buscado
        return elem.cif === req.params.cif;       
    })
    if(posicion <0){
        return res.status(404).json({//error general
            mensaje: 'Cliente no encontrado'
        })
    }
    //splice: cambia el array al eliminar o agregar nuevos elmentos, el 1 indica la cantidad de elementos a eliminar y la posicion se refiere al CIF buscado
    clientes.splice(posicion,1)
    res.status(200).json({//Exito
        mensaje: 'El cliente ha sido eliminado correctamente'
    })
    console.log(clientes);
})

app.listen(port,()=> {
     // Cuando el servidor se inicie correctamente, se ejecutará este callback
    console.log(`Servidor escuchando en http://localhost:${port}`);/*${template literals} */
})