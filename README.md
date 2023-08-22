# App Bienes Raíces

Bienvenido a la App Bienes Raíces, una plataforma que te permite explorar propiedades en venta y gestionarlas si eres un administrador. Este proyecto utiliza una combinación de tecnologías modernas de desarrollo web para brindarte una experiencia fluida y efectiva al explorar y administrar propiedades inmobiliarias.

## Características Principales

- **Exploración de Propiedades**: La pantalla principal muestra una lista de casas en venta. Si no estás logueado, puedes ver la información básica de cada propiedad. Si estás interesado, puedes hacer clic en "Ver Más" para obtener detalles adicionales.

- **Detalles de Propiedad**: Al hacer clic en "Ver Más" en la pantalla principal, serás redirigido a una página con información más detallada de la propiedad. Aquí encontrarás descripciones, imágenes y otros detalles importantes.

- **Gestión de Propiedades**: Si eres un administrador y te has logueado, tendrás acceso a las funcionalidades de agregar, editar y eliminar propiedades. Esto te permite mantener actualizada la lista de propiedades en venta.

## Tecnologías Utilizadas

### Frontend

- **Vue.js**: El framework Vue.js se utilizó para construir la interfaz de usuario de la aplicación.

- **Composition API**: La Composition API de Vue.js se empleó para una gestión eficiente de la lógica y el estado de los componentes.

- **Vue Router**: Vue Router permitió la creación de rutas y la navegación entre diferentes páginas de la aplicación.

- **Vuetify**: Se usó Vuetify para crear una interfaz atractiva y con un diseño consistente.

- **Vee-validate**: Vee-validate se integró para realizar validaciones en formularios de manera sencilla.

- **Vue-leaflet**: Se incorporó Vue-leaflet para mostrar mapas interactivos en la visualización de las propiedades.

- **Pinia**: Pinia fue utilizado para gestionar estados globales de manera eficiente y organizada.

### Backend

- **Firebase**: Firebase se utilizó para implementar el backend de la aplicación. A través de Firebase Authentication se manejaron los usuarios y la autenticación. Firebase Firestore almacena los datos de las propiedades y Firebase Storage se utilizó para guardar y gestionar las imágenes de las propiedades.

## Funcionalidades Adicionales

### Composables

La carpeta `composables` contiene diversos composables para gestionar funcionalidades específicas:

- **useImage**: Este composable se encarga de la gestión de imágenes, permitiendo subir imágenes y obtener sus URLs. También incluye una función de verificación para saber si hay una imagen adjunta.

- **useLocationMap**: Proporciona la lógica necesaria para seleccionar nuevas coordenadas en el mapa.

- **usePropiedades**: Gestionar la lógica de filtrar propiedades en base a características como la presencia de alberca. Además, permite eliminar propiedades y obtener todas las propiedades disponibles.

### Helpers y Validaciones

- **Helpers**: La carpeta `helpers` contiene funciones reutilizables, como `propertyPrice` que formatea el precio de las propiedades.

- **Validation**: La carpeta `validation` contiene reglas y validaciones para formularios, como asegurarse de que los campos no estén vacíos, que los precios sean números válidos y que los correos electrónicos tengan un formato adecuado.

### Store de Autenticación

La carpeta `store` contiene la lógica relacionada con la autenticación, permitiendo a los usuarios administradores acceder a las funcionalidades de gestión de propiedades.

## Acceso a Cuenta de Administrador

Puedes acceder a la cuenta de administrador utilizando las siguientes credenciales:

- **Email**: correo@correo.com
- **Contraseña**: password

## Aprendizaje Significativo

Durante el desarrollo de este proyecto, se ha adquirido un conocimiento valioso en la implementación de un backend utilizando Firebase, incluyendo el almacenamiento de imágenes con Firebase Storage y la gestión de la información con Firestore. Además, se ha profundizado en la creación de composables y funciones reutilizables para mejorar la modularidad y eficiencia del código.

## Instalación y Uso

1. Clona este repositorio: `git clone https://github.com/euss99/app-bienes-raices-vue.git`
2. Navega a la carpeta del proyecto: `cd app-bienes-raices-vue`
3. Instala las dependencias: `npm install`
4. Inicia el servidor de desarrollo: `npm run dev`
5. Abre tu navegador y visita: `http://localhost:5173`

Recuerda que si eres administrador, deberás iniciar sesión para acceder a las funcionalidades de gestión de propiedades.
