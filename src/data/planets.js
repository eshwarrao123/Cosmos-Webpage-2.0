export const planetsData = [
    {
        id: "sun",
        name: "The Sun",
        image: "/planets/sun.webp",
        description: "The star at the center of our Solar System.",
        color: "linear-gradient(45deg, #f1c40f, #e67e22)",
        color3D: "#f1c40f",
        facts: ["Star", "Type G2V", "Plasma"],
        hasRings: false,
        details: {
            physical: {
                mass: "1.989 × 10^30 kg",
                radius: "696,340 km",
                density: "1.41 g/cm³",
                gravity: "274 m/s²",
                escapeVelocity: "617.7 km/s",
                dayLength: "600 hours",
                yearLength: "230 million years (Galactic)",
                distanceFromSun: 0
            },
            internal: {
                core: "Nuclear fusion reactor",
                mantle: "Radiative zone",
                crust: "Convective zone"
            },
            atmosphere: {
                composition: "Hydrogen (73%), Helium (25%)",
                pressure: "Top of photosphere",
                temperature: "5,500°C (Surface)"
            },
            magnetosphere: {
                type: "Extensive heliosphere",
                strength: "Varies"
            }
        }
    },
    {
        id: "mercury",
        name: "Mercury",
        image: "/planets/mercury.webp",
        description: "The smallest planet in our solar system and closest to the Sun.",
        color: "linear-gradient(45deg, #a5a5a5, #5e5e5e)",
        color3D: "#a5a5a5",
        facts: ["0 Moons", "88 Earth Days (Orbit)", "Rocky"],
        hasRings: false,
        details: {
            physical: {
                mass: "3.285 × 10^23 kg",
                radius: "2,439.7 km",
                density: "5.427 g/cm³",
                gravity: "3.7 m/s²",
                escapeVelocity: "4.25 km/s",
                dayLength: "1,407.6 hours",
                yearLength: "88 Earth days",
                distanceFromSun: 0.39 // AU
            },
            internal: {
                core: "Large iron core (~85% of radius)",
                mantle: "Silicate mantle",
                crust: "Solid rocky crust"
            },
            atmosphere: {
                composition: "Oxygen, Sodium, Hydrogen, Helium, Potassium (Trace)",
                pressure: "Trace amounts",
                temperature: "-180°C to 430°C"
            },
            magnetosphere: {
                type: "Weak global magnetic field",
                strength: "~1.1% of Earth's"
            }
        }
    },
    {
        id: "venus",
        name: "Venus",
        image: "/planets/venus.webp",
        description: "Spinning in the opposite direction to most planets, Venus is the hottest planet.",
        color: "linear-gradient(45deg, #e6c17a, #c28b26)",
        color3D: "#e6c17a",
        facts: ["0 Moons", "225 Earth Days (Orbit)", "Rocky"],
        hasRings: false,
        details: {
            physical: {
                mass: "4.867 × 10^24 kg",
                radius: "6,051.8 km",
                density: "5.243 g/cm³",
                gravity: "8.87 m/s²",
                escapeVelocity: "10.36 km/s",
                dayLength: "5,832.5 hours",
                yearLength: "225 Earth days",
                distanceFromSun: 0.72 // AU
            },
            internal: {
                core: "Iron core",
                mantle: "Rocky mantle",
                crust: "Solid silicate crust"
            },
            atmosphere: {
                composition: "Carbon Dioxide (96.5%), Nitrogen (3.5%)",
                pressure: "92 bar (Surface)",
                temperature: "462°C (Average)"
            },
            magnetosphere: {
                type: "Induced magnetosphere",
                source: "Ionosphere interaction with solar wind"
            }
        }
    },
    {
        id: "earth",
        name: "Earth",
        image: "/planets/earth.webp",
        description: "Our home planet, the only place we know of so far that’s inhabited by living things.",
        color: "linear-gradient(45deg, #4facfe, #00f2fe)",
        color3D: "#2e86de",
        facts: ["1 Moon", "365.25 Earth Days (Orbit)", "Rocky"],
        hasRings: false,
        details: {
            physical: {
                mass: "5.972 × 10^24 kg",
                radius: "6,371 km",
                density: "5.514 g/cm³",
                gravity: "9.807 m/s²",
                escapeVelocity: "11.19 km/s",
                dayLength: "23.9 hours",
                yearLength: "365.25 days",
                distanceFromSun: 1.00 // AU
            },
            internal: {
                core: "Solid inner iron core, liquid outer iron core",
                mantle: "Viscous silicate mantle",
                crust: "Solid silicate crust (oceanic and continental)"
            },
            atmosphere: {
                composition: "Nitrogen (78%), Oxygen (21%), Argon (0.9%)",
                pressure: "1.013 bar (Sea level)",
                temperature: "15°C (Average)"
            },
            magnetosphere: {
                type: "Strong internal dynamo",
                source: "Liquid outer core convection"
            }
        }
    },
    {
        id: "moon",
        name: "Earth's Moon",
        image: "/planets/moon.webp",
        description: "Earth's only natural satellite, formed about 4.5 billion years ago.",
        color: "linear-gradient(45deg, #e6e6e6, #9ca3af)",
        color3D: "#d1d5db",
        facts: ["0 Moons", "27.3 Earth Days (Orbit)", "Rocky"],
        hasRings: false,
        details: {
            physical: {
                mass: "7.342 × 10^22 kg",
                radius: "1,737.4 km",
                density: "3.344 g/cm³",
                gravity: "1.62 m/s²",
                escapeVelocity: "2.38 km/s",
                dayLength: "708.7 hours",
                yearLength: "27.3 Earth days",
                distanceFromSun: 1.00 // Average same as Earth for general visualization
            },
            internal: {
                core: "Small iron core",
                mantle: "Partially molten mantle",
                crust: "Anorthositic crust"
            },
            atmosphere: {
                composition: "Helium, Neon, Hydrogen, Argon (Very trace)",
                pressure: "3 × 10^-15 bar",
                temperature: "-173°C to 127°C"
            },
            magnetosphere: {
                type: "No global magnetic field",
                strength: "Remnant crustal fields only"
            }
        }
    },
    {
        id: "mars",
        name: "Mars",
        image: "/planets/mars.webp",
        description: "A dusty, cold, desert world with a very thin atmosphere.",
        color: "linear-gradient(45deg, #ff6b6b, #c0392b)",
        color3D: "#e74c3c",
        facts: ["2 Moons", "687 Earth Days (Orbit)", "Rocky"],
        hasRings: false,
        details: {
            physical: {
                mass: "6.39 × 10^23 kg",
                radius: "3,389.5 km",
                density: "3.933 g/cm³",
                gravity: "3.71 m/s²",
                escapeVelocity: "5.03 km/s",
                dayLength: "24.6 hours",
                yearLength: "687 Earth days",
                distanceFromSun: 1.52 // AU
            },
            internal: {
                core: "Iron, nickel, sulfur core",
                mantle: "Silicate mantle",
                crust: "Basaltic crust"
            },
            atmosphere: {
                composition: "Carbon Dioxide (95%), Nitrogen (2.8%), Argon (2%)",
                pressure: "0.006 bar",
                temperature: "-63°C (Average)"
            },
            magnetosphere: {
                type: "Crustal magnetic fields (Remnant)",
                source: "Local magnetization"
            }
        }
    },
    {
        id: "jupiter",
        name: "Jupiter",
        image: "/planets/jupiter.webp",
        description: "More than twice as massive as all the other planets combined.",
        color: "linear-gradient(45deg, #d4a373, #9d6b53)",
        color3D: "#d4a373",
        facts: ["79+ Moons", "12 Earth Years (Orbit)", "Gas Giant"],
        hasRings: true,
        ringSystem: { innerRadius: 3, outerRadius: 3.2, opacity: 0.3 },
        details: {
            physical: {
                mass: "1.898 × 10^27 kg",
                radius: "69,911 km",
                density: "1.326 g/cm³",
                gravity: "24.79 m/s²",
                escapeVelocity: "59.5 km/s",
                dayLength: "9.9 hours",
                yearLength: "11.86 Earth years",
                distanceFromSun: 5.20 // AU
            },
            internal: {
                core: "Possible rocky/ice core",
                mantle: "Metallic hydrogen",
                crust: "No solid surface"
            },
            atmosphere: {
                composition: "Hydrogen (90%), Helium (10%)",
                pressure: "Unknown (Gas giant)",
                temperature: "-108°C (1 bar level)"
            },
            magnetosphere: {
                type: "Huge, powerful magnetosphere",
                strength: "20,000x stronger than Earth's"
            }
        }
    },
    {
        id: "saturn",
        name: "Saturn",
        image: "/planets/saturn.png",
        description: "Adorned with a dazzling, complex system of icy rings.",
        color: "linear-gradient(45deg, #ead18d, #cfa855)",
        color3D: "#f1c40f",
        facts: ["82+ Moons", "29 Earth Years (Orbit)", "Gas Giant"],
        hasRings: true,
        ringSystem: { innerRadius: 3, outerRadius: 5, opacity: 0.8 },
        details: {
            physical: {
                mass: "5.683 × 10^26 kg",
                radius: "58,232 km",
                density: "0.687 g/cm³",
                gravity: "10.44 m/s²",
                escapeVelocity: "35.5 km/s",
                dayLength: "10.7 hours",
                yearLength: "29.45 Earth years",
                distanceFromSun: 9.58 // AU
            },
            internal: {
                core: "Rocky/ice core",
                mantle: "Metallic hydrogen layer",
                crust: "No solid surface"
            },
            atmosphere: {
                composition: "Hydrogen (96%), Helium (3%)",
                pressure: "Unknown (Gas giant)",
                temperature: "-139°C (1 bar level)"
            },
            magnetosphere: {
                type: "Strong magnetosphere",
                source: "Metallic hydrogen currents"
            }
        }
    },
    {
        id: "uranus",
        name: "Uranus",
        image: "/planets/uranus.webp",
        description: "It rotates at a nearly 90-degree angle from the plane of its orbit.",
        color: "linear-gradient(45deg, #a8dadc, #457b9d)",
        color3D: "#74b9ff",
        facts: ["27+ Moons", "84 Earth Years (Orbit)", "Ice Giant"],
        hasRings: true,
        ringSystem: { innerRadius: 3, outerRadius: 3.5, opacity: 0.4 },
        details: {
            physical: {
                mass: "8.681 × 10^25 kg",
                radius: "25,362 km",
                density: "1.27 g/cm³",
                gravity: "8.69 m/s²",
                escapeVelocity: "21.3 km/s",
                dayLength: "17.2 hours",
                yearLength: "84 Earth years",
                distanceFromSun: 19.22 // AU
            },
            internal: {
                core: "Small rocky core",
                mantle: "Icy mantle (water, ammonia, methane)",
                crust: "Hydrogen/Helium envelope"
            },
            atmosphere: {
                composition: "Hydrogen (83%), Helium (15%), Methane (2%)",
                pressure: "Unknown",
                temperature: "-197°C"
            },
            magnetosphere: {
                type: "Tilted, offset magnetosphere",
                source: "Icy mantle convection"
            }
        }
    },
    {
        id: "neptune",
        name: "Neptune",
        image: "/planets/neptune.webp",
        description: "The first planet located through mathematical calculations rather than by telescope.",
        color: "linear-gradient(45deg, #4361ee, #3f37c9)",
        color3D: "#0984e3",
        facts: ["14+ Moons", "165 Earth Years (Orbit)", "Ice Giant"],
        hasRings: true,
        ringSystem: { innerRadius: 3, outerRadius: 3.2, opacity: 0.3 },
        details: {
            physical: {
                mass: "1.024 × 10^26 kg",
                radius: "24,622 km",
                density: "1.638 g/cm³",
                gravity: "11.15 m/s²",
                escapeVelocity: "23.5 km/s",
                dayLength: "16 hours",
                yearLength: "164.8 Earth years",
                distanceFromSun: 30.05 // AU
            },
            internal: {
                core: "Solid rocky core",
                mantle: "Icy mantle (water, ammonia, methane)",
                crust: "Hydrogen/Helium envelope"
            },
            atmosphere: {
                composition: "Hydrogen (80%), Helium (19%), Methane (1.5%)",
                pressure: "Unknown",
                temperature: "-201°C"
            },
            magnetosphere: {
                type: "Tilted, complex magnetosphere",
                source: "Icy mantle convection"
            }
        }
    }
];
