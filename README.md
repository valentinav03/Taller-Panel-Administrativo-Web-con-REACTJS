## Panel Administrativo Web | Taller entornos de programación

Sitio web construido con **React.js**, usando **React Router** para la navegación y **Material UI** como framework para el estilo de la interfaz que simula un panel administrativo. De momento se creó un barra de navegación que incluye logo y enlaces a las secciones de clientes, proveedor, usuarios y logout. 

---

### Tecnologías Utilizadas

- React.js (Vite)
- React Router DOM  
- Material UI (MUI) 
- JavaScript
- CSS

---
### Desarrollo del proyecto

- Inicialización del proyecto con Vite y React:
  
![image](https://github.com/user-attachments/assets/8c88b5a3-aa93-47da-8faa-1b28e57305e7)
![image](https://github.com/user-attachments/assets/9a23223c-3b9b-4763-a4e4-aa6389afdb3f)
![image](https://github.com/user-attachments/assets/703e6503-82a8-4075-b014-5a9758b29722)


- Instalación componentes de **Material UI** utilizando el comando:

     **npm install @mui/material @emotion/react @emotion/styled @mui/icons-material**

  Luego de esto, se añaden los *imports* según sean requeridos, a su vez se actualiza el   main.jsx:
  ![image](https://github.com/user-attachments/assets/2862b4fd-f39a-40c5-a3af-c2d0f6782f21)

**Material UI** utiliza un sistema de CSS-in-JS que permite la definición de estilos como objetos JavaScript, aplica directamente los estilos en una propiedad especial llamada sx= {} dentro del mismo JSX. todo queda en un mismo archivo y hay una mejor integración que proporciona un código mas compacto.

--- 

### Estructura básica del sitio
Creación del componente navbar y de las vistas de cliente, usuario y proveedor en la carpeta de pages, las cuales son implementadas desde el componente App:

![image](https://github.com/user-attachments/assets/f355cc22-cc20-4b4f-9e29-f5b0e74300ab)


### Funcionalidades

- Navegación entre páginas sin recargar
- Diseño responsivo con Material UI
- Barra de navegación con íconos
- Separación en componentes reutilizables
  
---

### Resultado final

![image](https://github.com/user-attachments/assets/0bd39e92-6cb0-4623-b9f4-eb77831c40e7)


