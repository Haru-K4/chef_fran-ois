let recetas = [
    {
        nombre: "Creme Brulee",
        ingredientes: ["75 g de azúcar de vainilla, 480 g de nata para montar, 1 vainilla en rama, 6 huevos, Azúcar moreno"],
        metodo:
            "1. Precalienta el horno a 150 grados Celsius.\n" +
            "2. En un cazo, añade la nata y una vaina de vainilla cortada a lo largo. También agrega el azúcar de vainilla (o azúcar normal). Mezcla y ponlo a fuego medio, removiendo de vez en cuando. Retíralo justo antes de que comience a hervir.\n" +
            "3. Mientras tanto, separa 6 yemas de huevo y colócalas en un bol grande. Bátelas durante 20 segundos.\n" +
            "4. Tamiza la mezcla de nata a través de un colador y viértela gradualmente sobre las yemas batidas, mientras continúas batiendo.\n" +
            "5. Coloca un trapo mojado en el fondo de una fuente apta para horno. Llena los recipientes de tu elección con la mezcla de crema.\n" +
            "6. Rellena la fuente con agua hirviendo hasta alcanzar aproximadamente 2/3 de altura de los recipientes.\n" +
            "7. Hornea en el horno precalentado durante 25 a 40 minutos, o hasta que la crema alcance los 80 grados Celsius en el centro.\n" +
            "8. Retira los recipientes del horno y déjalos enfriar completamente en la nevera durante aproximadamente 4 horas.\n" +
            "9. Antes de servir, espolvorea una capa fina de azúcar moreno sobre la crema y caramelízala con un soplete de cocina.\n" +
            "10. Deja enfriar durante 1 minuto y ¡disfruta de tu deliciosa Crème Brûlée!"
    },
    {
        nombre: "Ceviche",
        ingredientes: ["250 ml de caldo de pescado, 3 cm de jengibre, 1 rama de apio, 1 cuarto de cebolla morada, 1 cucharilla de ají picante, 4 granos de pimienta de Sichuan, 4 tallos de cilantro, 2 limas, 8 gambas, 1 lomo de merluza, Hojas de cilantro, Sal, Cebolla morada"],
        metodo: "Aquí tienes el procedimiento para preparar ceviche:\n" +
            "\n" +
            "1. **Preparación de Leche de Tigre:**\n" +
            "   - Cubre las almejas con agua y añade abundante sal, luego déjalas reposar durante 2 horas.\n" +
            "   - En un procesador de alimentos, agrega el apio, los tallos de cilantro, el jengibre fresco, la cebolla morada, el jugo de lima, el ají picante, los granos de pimienta de Sichuan (opcional) y el caldo de pescado (o agua).\n" +
            "   - Tritura hasta obtener una mezcla completamente líquida. Reserva en el congelador si lo usarás inmediatamente, o en la nevera si será más tarde.\n" +
            "\n" +
            "2. **Preparación del Ceviche:**\n" +
            "   - Pela y limpia las gambas, luego transfiérelas a un bol.\n" +
            "   - Corta la merluza en cubos pequeños y agrégala al mismo bol.\n" +
            "   - Agrega dos pizcas generosas de sal, hojas de cilantro picadas y una pizca de ají picante al bol. Mezcla y deja reposar en la nevera durante 15 minutos.\n" +
            "   - Mientras tanto, corta la cebolla morada en medios aros y ponla en agua con hielo durante 10 minutos.\n" +
            "   - Agrega el jugo de una lima al bol con el pescado y mezcla.\n" +
            "   - Cubre parcialmente el pescado con la Leche de Tigre preparada anteriormente. Mezcla.\n" +
            "   - Agrega la cebolla morada y mezcla nuevamente.\n" +
            "   - Finaliza con hojas de cilantro y sirve inmediatamente.\n" +
            "\n" +
            "¡Listo para disfrutar de un delicioso ceviche fresco!"
    },
    {
        nombre: "Donuts",
        ingredientes: ["240 ml de leche, 15 g de levadura fresca, 560 g de harina, 40 g de azúcar, 6 g de sal, 20 g de azúcar moreno, 2 huevos, 115 g de mantequilla derretida, Aceite neutral, 200 g de azúcar glas, Chorrito de leche, 175 g de azúcar glas, 25 g de cacao en polvo, Agua"],
        metodo:
            "1. Disuelve la levadura fresca en la leche templada. Resérvalo." +
            "2. En un bol grande, mezcla la harina de trigo, el azúcar, la sal y el azúcar moreno." +
            "3. Agrega los huevos batidos, la leche con levadura y la mantequilla derretida al bol de ingredientes secos. Incorpora todos los ingredientes hasta obtener una masa." +
            "4. Amasa la masa durante 8 a 10 minutos, o hasta que sea lisa y elástica." +
            "5. Deja reposar la masa en un bol enharinado, cubierta con un paño húmedo, durante 1 a 2 horas, o hasta que haya duplicado su tamaño.\n" +
            "6. Estira la masa en una superficie enharinada hasta que tenga un grosor de 1 cm." +
            "7. Corta círculos de masa de aproximadamente 8 cm de diámetro y haz agujeros en el centro con un cortador de galletas.\n" +
            "8. Coloca los donuts y sus agujeros en una bandeja cubierta con papel vegetal y deja que reposen durante 45 minutos, o hasta que dupliquen su tamaño, cubiertos con un paño húmedo.\n" +
            "9. Fríe los donuts en aceite caliente (180 grados Celsius) durante unos 2 a 3 minutos por cada lado, o hasta que estén dorados.\n" +
            "10. Retira los donuts del aceite y deja que se enfríen completamente sobre una rejilla.\n" +
            "11. Para hacer el glaseado clásico, mezcla el azúcar glas con un chorrito de leche hasta obtener una consistencia espesa pero líquida.\n" +
            "12. Para hacer el glaseado de chocolate, mezcla el azúcar glas con el cacao en polvo y agua hasta obtener una consistencia espesa pero líquida.\n" +
            "13. Cubre los donuts con los glaseados y deja que se enfríen completamente antes de servir."
    },
    {
        nombre: "Pasta ala vongole",
        ingredientes: ["10 almejas, 1 rama de perejil, 2 ajos, 10 cherrys, 250 g de pasta, Chorrito de vino blanco, AOVE"],
        metodo: "Método para preparar Pasta Alle Vongole."
    },
    {
        nombre: "Carbonara",
        ingredientes: ["1 loncha de guanciale, 50 g de pecorino romano, 1 huevo L, 3 yemas L, Pimienta negra recién molida, Sal, 150 g de spaghetti"],
        metodo: "Método para preparar una Carbonara Básica."
    },
    {
        nombre: "Pie de Manzana",
        ingredientes: ["240 g de mantequilla sin sal, 280 g de harina, 10 g de sal, Agua helada, 1,5 kg de manzanas, 170 g de azúcar, 1 limón, Una cucharadilla de canela en polvo, Una cucharadilla de jengibre en polvo, Nuez moscada al gusto, Clara de huevo batida, Azúcar"],
        metodo: "Método para preparar un Pastel de Manzana Americano, incluyendo masa de pastel y relleno de manzanas."
    }
];

function buscar() {
    const name = document.getElementById('nombre').value;
    let receta;
    for (let i = 0; i < recetas.length; i++) {
        if (recetas[i].nombre.toLowerCase() === name.toLowerCase().trim()) {
            receta = recetas[i];
            break;
        }
    }
    if (receta) {
        document.getElementById('title').innerText = receta.nombre;

        // Limpiar el contenido anterior
        const ingredientesElemento = document.getElementById('ingredientes');
        ingredientesElemento.innerHTML = "<h2>Ingredientes:</h2>";
        const metodoElemento = document.getElementById('metodo');
        metodoElemento.innerHTML = "<h2>Método:</h2>";

        // Añadir ingredientes
        const ulIngredientes = document.createElement('ul');
        for (let i = 0; i < receta.ingredientes.length; i++) {
            const li = document.createElement('li');
            li.textContent = receta.ingredientes[i];
            ulIngredientes.appendChild(li);
        }
        ingredientesElemento.appendChild(ulIngredientes);

        // Añadir método
        const pMetodo = document.createElement('p');
        pMetodo.textContent = receta.metodo;
        metodoElemento.appendChild(pMetodo);
    } else {
        document.getElementById('title').innerText = "Receta no encontrada";
        document.getElementById('ingredientes').innerHTML = "";
        document.getElementById('metodo').innerHTML = "";
    }
}
