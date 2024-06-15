# Enfoque Integral de la IA Aplicada, Orientado a Problemas Emergentes: Intérprete Automático de Lengua de Señas

Este GitHub contiene una prueba de concepto como parte de la investigación para el desarrollo de un sistema basado en inteligencia artificial que interprete la lengua de señas argentina, priorizando la captura de matices emocionales y expresivos. Se espera contribuir de manera significativa a mejorar la comunicación entre personas sordas y oyentes, así como aumentar la accesibilidad para personas con discapacidad auditiva.

"Intérprete Automático de Lengua de Señas" es parte del proyecto de investigación acreditado y financiado por la SCyT - UNC, titulado "Enfoque Integral de la IA Aplicada, Orientado a Problemas Emergentes". Los autores de este trabajo somos investigadores en formación de grado, dirigidos por la Dra. Ing. Laura C. Dávila y acompañados por docentes y egresados que conforman el equipo de investigadores del Laboratorio de Investigación y Desarrollo de Software e Inteligencia Artificial (LIDeSIA) de la FCEFyN en la Universidad Nacional de Córdoba.

https://fcefyn.unc.edu.ar/facultad/secretarias/investigacion-y-desarrollo/laboratorios/laboratorio-de-investigacion-y-desarrollo-de-software-e-inteligencia-artificial-lidesia/

## Metodología

La metodología incluye:
- Recopilación y preprocesamiento de bases de datos compuestas por videos.
- Implementación de arquitecturas y modelos.
- Evaluación comparativa enfocada en la precisión y la capacidad para captar la expresión emocional, basándose en antecedentes recopilados en investigaciones previas sobre traducción automática de lengua de señas usando lenguaje natural y aprendizaje automático.


## Prueba de Concepto: Transfer Learning

Implementación de transfer learning:
- Se utilizó YOLOv8, el cual se centra en la detección de objetos en imágenes y no tiene la capacidad de comprender y traducir la lengua de señas como un intérprete humano. Esta tarea es mucho más compleja, ya que implica la interpretación de gestos, movimientos y expresiones faciales.
- Se seleccionaron para la implementación dos palabras extraídas de datos públicos proporcionados por INSOR: "Hospital" y "Dolor".
- En el preprocesamiento de los datos, se utilizaron 5 videos por palabra y de ellos 4 frames por segundo, lo que da un total de 105 imágenes para el entrenamiento.

### Resultados

Las métricas generales obtenidas fueron:
- **Precisión ( P ):** 0,951
- **Recall ( R ):** 0,973
- **mAP50:** 0,987
- **mAP50-95:** 0,769

## Contribución
Aunque YOLOv8 demostró ser capaz de distinguir señas en movimiento en una prueba simple de dos palabras, su uso único se vuelve insuficiente para lograr la traducción de la lengua de señas ya que es un sistema de comunicación visual que posee una estructura que incluye gramática propia, estructura lingüística, variaciones regionales, expresiones faciales y corporales.


**Autores:**  
Investigadores en formación de grado, dirigidos por la Dra. Ing. Laura C. Dávila  

Aybar, Lourdes.

Benitez, Josefina.
