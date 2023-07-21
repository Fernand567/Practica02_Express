const express=require('express');
const app=express();
const port = 3000;


app.use(express.json())

app.get('/misitio', (req,res)=>{
 res.send('Bienvenido a mi sitio web');
});
app.listen(port, ()=>{
 console.log('Servidor escuchando en el puerto ' + port);
})

app.get('/misitio/about', (req,res)=>{
    res.send('<h1>Acerca de nosotros</h1>');
   });
   
app.get('/misitio/gastos', (req,res)=>{
 res.json(
 {
 gasto:'Salud',
 monto:14575.60,
 informacion:'Corresponde a consultas médicas, pagos de seguros, medicinas'
 }
 );
});

app.post('/misitio/calculo', (req,res)=>{
    console.log(req.body);
    res.send('Cálculo impuesto a la renta');
   });

app.use(express.json());

app.post('/misitio/usuarios/:id',(req, res)=>{
 console.log(req.body); 
 console.log(req.params);
 res.send('Usuario nuevo registrado');
 });

 app.put('/misitio/usuarios/:id',(req, res)=>{
    console.log(req.body); 
    console.log(req.params);
    res.send('Usuario cambiado');
    });

app.delete('/misitio/usuarios/:id', (req,res)=>{
        res.send('Usuario '+ (req.params.id) +' borrado');
    });

app.get('/misitio/usuarios', (req,res)=>{
        res.send('<h1>Acerca de nosotros</h1>');
    });

app.put('/misitio/gastos/:id',(req,res) => {
        res.json({
            id: req.params.id,
            nombre:"Adan",
            gastos:'vivienda',
            monto_vivienda: req.body.montos
        });
})    

app.get('/misitio/gastos/',(req,res) =>{
        res.send(req.get.arguments)
});

app.put('/misitio/gastos/:id',(req,res) => {
    res.json({
        id: req.params.id,
        nombre:"Adan",
        gastos:'vivienda',
        monto_vivienda: req.body.montos
    });
    user.push(req.params.id)
  
});

app.delete('/misitio/gastos/:id',(req,res)=>{
    res.send('Usuario '+ (req.params.id) +' borrado');
});

app.get('/misitio/usuarios/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario obtenido');
  })