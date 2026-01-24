# 🌌 COSMOS - Interactive Space Explorer

**COSMOS** is an immersive educational web application designed to bring the wonders of the solar system and astrophysics to your screen. Built with modern web technologies, it combines scientific data with stunning 3D visuals and interactive physics simulations.

![Cosmos Banner](https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop)

## 🚀 Features

### 🔭 Interactive 3D Visualizations
- **Real-Time 3D Planets**: Explore all 8 planets with high-fidelity 3D models using **React Three Fiber**.
- **Accurate Ring Systems**: Scientifically accurate rendering of ring systems (e.g., Saturn's prominent rings vs. Jupiter & Neptune's faint dust rings).
- **Interactive Controls**: Rotate and examine planets in 360 degrees.

### ⚛️ Physics & Simulations
- **Cosmic Travel Calculator**: Plan interstellar journeys! Calculate travel distance (AU/km) and time using various speeds:
  - *Speed of Light (c)*
  - *New Horizons Probe*
  - *Voyager 1*
  - *Future Ion Drives*
- **Gravity Simulator**: Discover your weight on different worlds, from the crushing gravity of Jupiter to the lightness of the Moon.
- **Orbital Mechanics**: Interactive modules explaining Kepler's Laws and gravitational forces.

### 📚 Deep Dive Modules
- **Planetary Formation**: Learn about the Solar Nebula hypothesis, accretion, and differentiation.
- **Extreme Physics**: Explore phenomena like "Diamond Rain" on Neptune and Metallic Hydrogen.
- **Habitability**: Understand the "Goldilocks Zone" and the search for water and life.
- **Black Holes**: A dedicated section on singularities, event horizons, and wormholes.

### 📡 NASA Integration
- **Astronomy Picture of the Day**: Live integration with NASA's APOD API to showcase the latest discoveries from the cosmos.
- *Robust Fallback*: Ensures a beautiful space image is always displayed even if the API rate limit is reached.

### 🎨 Modern UI/UX
- **Glassmorphism Design**: Sleek, translucent UI elements.
- **Dynamic Backgrounds**: Slowly rotating immersive space backgrounds.
- **Smooth Animations**: Powered by **Framer Motion** for a fluid user experience.

---

## 🛠️ Technology Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **3D Engine**: [Three.js](https://threejs.org/) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: Vanilla CSS (Variables & Flexbox/Grid)
- **Data Source**: Custom planetary dataset & [NASA Open APIs](https://api.nasa.gov/)

---

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/cosmos-app.git
    cd cosmos-app
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # OR
    yarn install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to start exploring!

---

## 🌟 Visual Gallery

- **Home Page**: Cinematic entrance with dynamic rotating background.
- **Cosmic Travel**: Calculate your trip to Mars at the Speed of Light.
- **Planets**: detailed 3D views with togglable "Schematic" vs "3D Model" modes.

---

**Embark on your journey through the Cosmos.** 🚀
