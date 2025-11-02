# 🎨 CGC UI Library

Una biblioteca de componentes UI moderna y profesional construida con React y TypeScript. Diseñada para ser flexible, accesible y fácil de usar, proporcionando componentes reutilizables que siguen las mejores prácticas de desarrollo frontend.

## ✨ Características

- 🚀 **Construida con React 19** - Utiliza la última versión de React para un rendimiento óptimo
- 📘 **TypeScript First** - Tipado estático para una mejor experiencia de desarrollo
- 🎭 **Storybook Integrado** - Documentación interactiva y playground para todos los componentes
- ♿ **Accesible** - Componentes diseñados siguiendo las mejores prácticas de accesibilidad
- 🎨 **Altamente Personalizable** - Estilos modulares y fácilmente personalizables
- 📦 **Ligera y Moderna** - Construida con Vite para un desarrollo y build rápidos

## 🛠️ Stack Tecnológico

- **React** 19.1.1
- **TypeScript** ~5.9.3
- **Vite** 7.1.7 - Build tool y dev server
- **Storybook** 10.0.0 - Documentación y desarrollo de componentes
- **Vitest** 4.0.4 - Framework de testing
- **Playwright** - Testing en navegador
- **ESLint** - Linting y calidad de código

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm, yarn o pnpm

### Pasos

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/ui_library.git
cd ui_library
```

2. Instala las dependencias:
```bash
yarn install
# o
npm install
```

3. Inicia el servidor de desarrollo:
```bash
yarn dev
# o
npm run dev
```

## 🚀 Uso

### Ejemplo Básico

```tsx
import { Button } from '@/components/button/Button';
import Stack from '@/components/stack/Stack';

function App() {
  return (
    <Stack orientation="vertical">
      <Button primary size="large" onClick={() => alert('¡Hola!')}>
        Botón Principal
      </Button>
      <Button primary={false} size="medium">
        Botón Secundario
      </Button>
    </Stack>
  );
}
```

## 📚 Componentes Disponibles

### Button

Componente de botón completamente personalizable con múltiples variantes y tamaños.

**Props:**
- `primary?: boolean` - Estilo principal o secundario
- `size?: 'small' | 'medium' | 'large' | 'full'` - Tamaño del botón
- `backgroundColor?: string` - Color de fondo personalizado
- `disabled?: boolean` - Estado deshabilitado
- `type?: 'button' | 'submit' | 'reset'` - Tipo de botón HTML
- `onClick?: () => void` - Callback de click

**Ejemplo:**
```tsx
<Button 
  primary 
  size="large" 
  onClick={() => console.log('Clicked!')}
>
  Hacer clic
</Button>
```

### Stack

Componente de layout flexible para organizar elementos en fila o columna.

**Props:**
- `orientation: 'horizontal' | 'vertical'` - Dirección del layout
- `children: React.ReactNode` - Elementos hijos

**Ejemplo:**
```tsx
<Stack orientation="vertical">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

## 🎨 Storybook

Este proyecto utiliza Storybook para documentación interactiva y desarrollo de componentes. Para visualizar todos los componentes y sus variantes:

```bash
yarn storybook
# o
npm run storybook
```

Esto abrirá Storybook en `http://localhost:6006` donde podrás:
- Ver todos los componentes disponibles
- Explorar diferentes variantes y props
- Interactuar con los componentes en tiempo real
- Ver la documentación de cada componente

Para construir una versión estática de Storybook:

```bash
yarn build-storybook
# o
npm run build-storybook
```

## 📜 Scripts Disponibles

- `yarn dev` - Inicia el servidor de desarrollo Vite
- `yarn build` - Construye la aplicación para producción
- `yarn preview` - Previsualiza el build de producción
- `yarn lint` - Ejecuta ESLint para verificar la calidad del código
- `yarn storybook` - Inicia Storybook en modo desarrollo
- `yarn build-storybook` - Construye una versión estática de Storybook

## 📁 Estructura del Proyecto

```
ui_library/
├── src/
│   ├── components/          # Componentes de la librería
│   │   ├── button/
│   │   └── stack/
│   ├── stories/             # Stories de Storybook
│   └── assets/              # Recursos estáticos
├── public/                  # Archivos públicos
├── .storybook/              # Configuración de Storybook
└── package.json
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es privado. Todos los derechos reservados.

## 👤 Autor

**CGC**

---

⭐ Si este proyecto te resulta útil, ¡no olvides darle una estrella!
