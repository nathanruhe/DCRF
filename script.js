//TODO --------- MENU ---------
const navMenu = document.querySelector("#nav-menu");
navToggle = document.querySelector("#nav-toggle");
navClose = document.querySelector("#nav-close");

/* Menu show */
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/* Menu hidden */
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/* --------- REMOVE MENU MOBILE --------- */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.querySelector("#nav-menu");

  // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));


/* --------- SHOW SCROLL UP --------- */
function scrollUp() {
    const scrollUp = document.querySelector("#scroll-up");
    
    if (this.scrollY >= 350) {
        scrollUp.classList.add("show-scroll");
    } else {
        scrollUp.classList.remove("show-scroll");
    }
}

window.addEventListener("scroll", scrollUp);



//TODO --------- HEADER ---------
const navLinks = document.querySelectorAll('.nav__link');
const logo = document.querySelector('.logo');

function handleClick(event) {
    navLinks.forEach(link => link.classList.remove('activate-link'));
    event.target.classList.add('activate-link');
}

navLinks.forEach(link => {
    link.addEventListener('click', handleClick);
});

logo.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('activate-link'));
});



//TODO --------- HOME ---------



//TODO --------- SERVICIOS ---------
// Datos para cada servicio
const servicios = [
    [
        { 
            src: "assets/img/tejado/demoussage_toiture-1.png", 
            titulo: "Démoussage de toiture", 
            descripcion: "Il s'agit du processus d'élimination du mousse, des lichens et des champignons accumulés sur le toit. Cela aide à protéger contre l'humidité, à prolonger la durabilité du toit, à améliorer son apparence esthétique et à prévenir d'éventuels dommages structurels."
        },
        { 
            src: "assets/img/tejado/maxresdefault.jpg", 
            titulo: "Hydrofuge de toiture", 
            descripcion: "C'est un traitement imperméabilisant appliqué sur la surface du toit pour le protéger contre l'infiltration d'eau. Ce traitement crée une couche protectrice qui repousse l'eau de pluie tout en permettant au toit de rester respirant, évitant ainsi l'accumulation d'humidité interne."
        },
        { 
            src: "assets/img/tejado/demoussage.jpg", 
            titulo: "Nettoyage de toiture", 
            descripcion: "Le nettoyage de toiture élimine la saleté, les feuilles, les débris et les dépôts de pollution. Il prévient l'accumulation de mousse et de lichens, améliore l'apparence du toit et prolonge sa durée de vie en évitant les dommages et les infiltrations d'eau."
        },
        { 
            src: "assets/img/tejado/traitement-charpente-en-bois-03122019-1514.webp", 
            titulo: "Traitement de bois de charpente", 
            descripcion: "Le traitement du bois protège les structures contre les parasites (termites, insectes xylophages) et les champignons. Il préserve l'intégrité du toit et évite la détérioration due aux facteurs biologiques et environnementaux."
        },
        { 
            src: "assets/img/tejado/Ootravaux-prix-gouttiere-pvc_1000x667.png", 
            titulo: "Gouttière", 
            descripcion: "C'est un système de canalisation installé sur les bords des toits pour collecter et diriger l'eau de pluie vers des descentes ou des drains spécifiques. Ce système est essentiel pour protéger la structure du bâtiment, en évitant que l'eau ne s'accumule à la base ou ne cause des infiltrations."
        },
        { 
            src: "assets/img/tejado/11-1.png", 
            titulo: "Cache-Moineau", 
            descripcion: "C'est un élément de finition sur les toits qui se place sous le bord du toit, couvrant la partie inférieure des tuiles et l'extrémité des poutres. Sa fonction principale est de protéger la structure du toit contre l'entrée d'oiseaux, de rongeurs, d'insectes et l'accumulation de débris, tout en améliorant l'esthétique du bâtiment."
        },
        { 
            src: "assets/img/tejado/faitage-maconne.jpg", 
            titulo: "Faîtage", 
            descripcion: "C'est la partie supérieure d'un toit incliné, où les deux pentes principales se rencontrent. Cette section est scellée avec des tuiles spéciales ou un joint de mortier, assurant ainsi l'étanchéité du toit et évitant les infiltrations d'eau, tout en protégeant la structure."
        },
        { 
            src: "assets/img/tejado/WhatsApp-Image-2022-02-09-at-12.12.33-4.jpeg", 
            titulo: "Bande de rive", 
            descripcion: "C'est une pièce installée sur le bord du toit pour le protéger de l'humidité et améliorer son apparence. Elle empêche les infiltrations d'eau, protège les matériaux sous-jacents et aide à maintenir la durabilité de la structure en renforçant son étanchéité."
        },
        { 
            src: "assets/img/tejado/images.jpeg", 
            titulo: "Velux", 
            descripcion: "Cela fait référence à une marque bien connue pour ses fenêtres de toit et ses systèmes de lucarnes. Ces fenêtres permettent l'entrée de lumière naturelle et la ventilation dans des espaces qui, autrement, pourraient être sombres ou mal ventilés, comme les greniers, les combles ou les pièces sous le toit."
        },
        { 
            src: "assets/img/tejado/Etancheite-toiture-la-noue-Couvreurs-RenoVert.jpg", 
            titulo: "Noue", 
            descripcion: "C'est une partie du toit située à l'union de deux plans inclinés, conçue pour canaliser l'eau de pluie vers le système de drainage. Elle aide à prévenir les infiltrations et l'accumulation d'eau aux joints, assurant ainsi une évacuation correcte et la protection du toit contre les dommages causés par l'humidité."
        },
        { 
            src: "assets/img/tejado/coloration-ardoises-artificielles.jpg", 
            titulo: "Peinture de toiture", 
            descripcion: "Il s'agit de l'application d'une couche de peinture spécialisée sur le toit pour le protéger contre l'humidité, les rayons UV et les températures extrêmes. Cela aide à prévenir les infiltrations, à améliorer l'apparence et à prolonger la durée de vie du toit."
        },
        { 
            src: "assets/img/tejado/1709427329_comment-installer-un-solin-de-cheminee-pour-une-etancheite-parfaite-1024x574.jpg", 
            titulo: "Solin de cheminée", 
            descripcion: "C'est un composant essentiel pour garantir l'étanchéité et la sécurité d'une cheminée. Il s'agit d'une pièce de matériau, généralement en plomb, qui est placée à la base de la cheminée, là où elle se connecte au toit, pour sceller les éventuelles infiltrations d'eau entre la cheminée et le toit."
        }
    ],
    [
        { 
            src: "assets/img/fachada/hydrofugation_facade-3.jpg", 
            titulo: "Hydrofuge de façade", 
            descripcion: "L'hydrofugation des façades est un traitement imperméabilisant appliqué sur les murs extérieurs pour les protéger de l'humidité. À base de siloxane, d'acrylique ou de résines, il pénètre les pores sans altérer l'aspect ni la respirabilité du matériau."
        },
        { 
            src: "assets/img/fachada/pulverisation-anti-mousse-facade-scaled-1.webp", 
            titulo: "Demoussage de façade", 
            descripcion: "C'est un processus de nettoyage et de traitement des murs extérieurs pour éliminer la mousse, les lichens, les moisissures et d'autres micro-organismes qui se développent à cause de l'humidité et de l'exposition aux intempéries."
        },
        { 
            src: "assets/img/fachada/france-pro-habitat-nettoyage-facade-1.jpg", 
            titulo: "Nettoyage de façade", 
            descripcion: "Il élimine la saleté, la moisissure et la pollution des murs extérieurs, améliorant leur apparence et leur durabilité. Il est réalisé avec de l'eau à pression, des produits chimiques ou un brossage, selon le type de matériau et le niveau de saleté."
        },
        { 
            src: "assets/img/fachada/ravalement-facade-facadier.jpg", 
            titulo: "Ravalement de façade", 
            descripcion: "Il s'agit d'un processus de restauration des murs extérieurs d'un bâtiment, comprenant le nettoyage, la réparation des fissures, l'application d'un nouveau revêtement et parfois un traitement imperméabilisant. L'objectif est d'améliorer l'esthétique, de renforcer la structure et de protéger contre l'humidité et les conditions climatiques."
        },
        { 
            src: "assets/img/fachada/isolation1-480x0-c-default.jpg", 
            titulo: "Revêtement de façade", 
            descripcion: "Il s'agit de la couche de finition appliquée sur les murs extérieurs d'un bâtiment pour le protéger contre l'humidité, la pollution et les conditions climatiques. Réalisée en divers matériaux (pierre, bois, brique, métal, mortier, panneaux composites), elle améliore à la fois l'esthétique, l'isolation thermique et la protection du bâtiment."
        },
        { 
            src: "assets/img/fachada/mauerwerk-sanieren-992x661.jpg", 
            titulo: "Traitement d’humidité", 
            descripcion: "Il s'agit de solutions pour éliminer et prévenir les problèmes d'humidité dans les murs, plafonds ou sols. Cela inclut l'imperméabilisation, la ventilation, le drainage ou l'utilisation de produits spécifiques selon le type d'humidité (capillarité, infiltration, condensation). L'objectif est de protéger la structure du bâtiment et d'améliorer le confort intérieur."
        },
        { 
            src: "assets/img/fachada/diagnostic-remontees-capillaires-1-1024x768.jpg", 
            titulo: "Remontées capillaires", 
            descripcion: "L'humidité ascendante est causée par l'absorption d'eau du sol à travers des matériaux poreux, surtout dans les constructions sans barrière étanche. Elle provoque des taches, de la moisissure et la dégradation des revêtements. Pour y remédier, on peut injecter une résine hydrofuge, poser des barrières physiques ou améliorer la ventilation et le drainage."
        },
        { 
            src: "assets/img/fachada/scalp-anti-salpetre.jpeg", 
            titulo: "Salpêtre", 
            descripcion: "Ce sont des taches blanches de sels minéraux qui apparaissent à cause de l'humidité dans les murs. Elles indiquent des problèmes d'humidité ascendante ou des infiltrations et peuvent endommager les matériaux. Le traitement inclut l'élimination de la cause de l'humidité et l'application de solutions préventives."
        },
        { 
            src: "assets/img/fachada/cave-humide.jpeg", 
            titulo: "Cave humide", 
            descripcion: "Il s'agit d'un espace souterrain ou dans les fondations où l'humidité cause des problèmes comme des mauvaises odeurs, de la moisissure et des dommages aux structures. Le traitement inclut l'amélioration de la ventilation, l'application de solutions imperméabilisantes et, parfois, l'installation d'un système de drainage pour contrôler l'humidité."
        },
        { 
            src: "assets/img/fachada/condensation-humidite-plafond.jpg", 
            titulo: "Infiltrations d’eau", 
            descripcion: "L'infiltration d'eau est causée par l'entrée d'eau à travers des fissures ou des crevasses dans les murs, plafonds ou fondations. Elle résulte souvent de la pluie, de mauvais drainage ou de dommages structurels, provoquant moisissures et dégradations. Le traitement inclut l'étanchéisation des fissures, l'amélioration du drainage et l'usage de produits imperméabilisants."
        },
        { 
            src: "assets/img/fachada/karcher-terrasse.jpg", 
            titulo: "Nettoyage terrasse", 
            descripcion: "Le nettoyage de terrasse élimine la saleté, les algues, la moisissure et les taches d'huile à l'aide de lavage haute pression, de brossage ou de produits adaptés au matériau (carrelage, bois, pierre). Il améliore l'apparence, préserve la durabilité et prévient l'humidité et les risques de glissade."
        }
    ],
    [
        { 
            src: "assets/img/aislamiento/pose-pse-ite.jpg", 
            titulo: "Isolation thermique extérieur", 
            descripcion: "L'isolation de façade améliore l'efficacité énergétique en posant des matériaux isolants (polystyrène, laine minérale, polyuréthane) sur les murs extérieurs, puis en les recouvrant d'une couche protectrice. Elle réduit les pertes de chaleur en hiver et garde l'intérieur frais en été, offrant confort et économies d'énergie."
        },
        { 
            src: "assets/img/aislamiento/images.jpeg", 
            titulo: "Isolation combles", 
            descripcion: "L'isolation de toiture consiste à poser des matériaux isolants (laine minérale, polystyrène, cellulose) pour éviter les pertes de chaleur en hiver et l'excès de chaleur en été. Elle améliore l'efficacité énergétique, réduit les factures et maintient une température constante, tout en prévenant la condensation."
        },
        { 
            src: "assets/img/aislamiento/combles-perdus-isoles-laine-charpente.jpg", 
            titulo: "Isolation combles perdus", 
            descripcion: "Elle s'applique aux espaces difficiles d'accès dans le toit, en utilisant des matériaux en vrac comme la laine de roche, la cellulose ou le polystyrène expansé. Cela améliore l'efficacité énergétique, en évitant les pertes de chaleur et en réduisant les coûts de chauffage."
        },
        { 
            src: "assets/img/aislamiento/isolation-plancher-bas-vide-sanitaire.webp", 
            titulo: "Isolation sous-sol et vide sanitaire", 
            descripcion: "Elle est réalisée pour améliorer l'efficacité énergétique et prévenir l'humidité. Des matériaux tels que le polystyrène ou la laine minérale sont utilisés dans les murs, sols ou plafonds pour réduire la perte de chaleur et éviter les problèmes d'humidité, de condensation et d'humidité ascensionnelle."
        }
    ],
    [
        { 
            src: "assets/img/energia/vmc-simple-flux-schema.jpg", 
            titulo: "VMC Simple Flux", 
            descripcion: "Il s'agit d'un système de ventilation qui extrait l'air vicié de l'intérieur de la maison et le remplace par de l'air frais provenant de l'extérieur. Ce système améliore la qualité de l'air et régule l'humidité, contribuant à un environnement plus sain. C'est une solution économique et efficace pour maintenir une bonne circulation de l'air, en particulier dans les espaces mal ventilés."
        },
        { 
            src: "assets/img/energia/schema-implantation-vmc-double-flux.jpg", 
            titulo: "VMC Double Flux", 
            descripcion: "Il s'agit d'un système de ventilation double flux qui extrait l'air vicié tout en introduisant de l'air frais de l'extérieur via un échangeur de chaleur. Ce procédé récupère la chaleur de l'air extrait pour préchauffer l'air entrant, améliorant ainsi l'efficacité énergétique et maintenant une température constante, tout en garantissant une bonne qualité de l'air intérieur."
        },
        { 
            src: "assets/img/energia/vmc-ventilation-isotech-3a1ffbdbbd10c79774cb53d720b24f26.jpg", 
            titulo: "VMI", 
            descripcion: "Il s'agit d'un système qui insuffle de l'air filtré et contrôlé à l'intérieur de la maison pour éviter l'humidité, la moisissure et la mauvaise qualité de l'air. Contrairement à d'autres systèmes, la VMI maintient une pression positive à l'intérieur de la maison, ce qui empêche l'entrée d'air extérieur non filtré et améliore le confort intérieur, garantissant un environnement sain."
        },
        { 
            src: "assets/img/energia/adoucisseur.jpg", 
            titulo: "Adoucisseur d’eau", 
            descripcion: "Il s'agit d'un adoucisseur d'eau qui réduit la dureté de l'eau en éliminant les minéraux comme le calcium et le magnésium. Cela prévient la formation de calcaire dans les tuyaux et appareils électroménagers, améliorant leur efficacité et prolongeant leur durée de vie. Il rend également l'eau plus douce pour la peau et les cheveux."
        },
        { 
            src: "assets/img/energia/radiateur-puissance.jpg", 
            titulo: "Radiateurs", 
            descripcion: "Les radiateurs sont des dispositifs de chauffage qui utilisent de l'eau chaude ou de l'électricité pour chauffer l'air d'une pièce. Il en existe de différents types, comme les modèles à eau chaude (reliés au chauffage central) ou électriques. Ils assurent une distribution efficace de la chaleur, garantissant le confort thermique en hiver et maintenant une température agréable à la maison."
        },
        { 
            src: "assets/img/energia/termo.jpg", 
            titulo: "Ballon d’eau chaude", 
            descripcion: "Il s'agit d'un chauffe-eau qui stocke de l'eau chaude pour un usage domestique. Il chauffe l'eau à l'électricité ou au gaz, puis la conserve dans un réservoir isolé pour maintenir sa température. Idéal pour les foyers avec une forte demande en eau chaude, il garantit un approvisionnement constant pour les douches, la cuisine et les machines à laver."
        }
    ],
];

// Índices para cada sección
let indicesActuales = [0, 0, 0, 0];

// Función para actualizar el carrusel para una sección específica
function actualizarCarrusel(servicioIndex) {
    const imgElemento = document.getElementById(`servicio${servicioIndex + 1}`);
    const tituloElemento = document.getElementById(`titulo${servicioIndex + 1}`);
    const descripcionElemento = document.getElementById(`parrafo${servicioIndex + 1}`);
    const datos = servicios[servicioIndex][indicesActuales[servicioIndex]];

    imgElemento.src = datos.src;
    tituloElemento.textContent = datos.titulo;
    descripcionElemento.textContent = datos.descripcion;
}

// Manejadores de eventos para cada conjunto de botones
document.querySelectorAll(".servicios__container").forEach((container, index) => {
    container.querySelector(".btnLeft").addEventListener("click", () => {
        indicesActuales[index] = (indicesActuales[index] - 1 + servicios[index].length) % servicios[index].length;
        actualizarCarrusel(index);
    });

    container.querySelector(".btnRight").addEventListener("click", () => {
        indicesActuales[index] = (indicesActuales[index] + 1) % servicios[index].length;
        actualizarCarrusel(index);
    });
});

// Inicializar todos los carruseles
servicios.forEach((_, index) => actualizarCarrusel(index));



// desplazamientos de las cards
document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll('.servicios__container');
    
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target;
                container.classList.add('visible');
                // Deja de observar después de que el elemento esté visible
                observer.unobserve(container);
            }
        });
    }, observerOptions);

    // Observa cada contenedor
    containers.forEach(container => {
        observer.observe(container);
    });
});



//TODO --------- PREGUNTAS ---------
// Función para mostrar/ocultar la respuesta
function toggleAnswer(element) {
    // Obtener las respuestas
    const allAnswers = document.querySelectorAll('.pregunta__respuesta');

    // Cerrar las respuestas abiertas
    allAnswers.forEach(answer => {
        if (answer !== element.nextElementSibling) {
            answer.classList.remove('show');
        }
    });


    const answer = element.nextElementSibling;
    answer.classList.toggle('show');
}



//TODO --------- PROYECTOS ---------
// Función para abrir el lightbox y mostrar la imagen
const images = document.querySelectorAll('.proyecto__imagen');
images.forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;
    });
});

// Función para cerrar el lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// funcion para las cards
document.addEventListener("DOMContentLoaded", () => {
    const proyectos = document.querySelectorAll(".proyecto");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 500);
            }
        });
    }, { threshold: 0.5 });

    proyectos.forEach((proyecto) => {
        observer.observe(proyecto);
    });
});



//TODO --------- CONTACT FORM ---------
const contactForm = document.querySelector("#contact-form");
contactName = document.querySelector("#contact-name");
contactTel = document.querySelector("#contact-tel");
contactEmail = document.querySelector("#contact-email");
contactSubject = document.querySelector("#contact-subject");
contactMessage = document.querySelector("#contact-message");
errorMessage = document.querySelector("#error-message");

const sendEmail = (e) => {
    e.preventDefault();

    // check if the field has a value
    if (
        contactName.value === "" ||
        contactTel.value === "" ||
        contactEmail.value === "" ||
        contactSubject.value === "" ||
        contactMessage.value === ""
    ) {
        // show message
        errorMessage.classList.add("color-error");
        errorMessage.classList.remove("color-succes");
        errorMessage.textContent = "* Tous les champs sont obligatoires";
    } else {
        // serviceID - templateID - #form - publickey
        emailjs
        .sendForm(
            "service_ikk79c9",
            "template_dx3102a",
            "#contact-form",
            "BW8DrNcbwtSYA0B61"
        )
        .then(() => {
            // show message and add color, window + dot to open emoji
            errorMessage.classList.add("color-succes");
            errorMessage.classList.remove("color-error");
            errorMessage.textContent = "✓ Message envoyé";

            // remove message after 5 seconds
            setTimeout(() => {
                errorMessage.textContent = "";
            }, 5000);
        },
        (error) => {
            alert("OOPs! SOMETHING WENT WRONG...", error);
        });

        // clean input fields
        contactName.value = "";
        contactTel.value = "",
        contactEmail.value = "";
        contactSubject.value = "";
        contactMessage.value = "";
    }
};

contactForm.addEventListener("submit", sendEmail);