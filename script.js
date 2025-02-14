/* Hover Effects for Links */
nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1em;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    padding: 5px;
}

nav ul li a:hover {
    color: #e2e2e2;
}

nav ul li a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #e2e2e2;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

nav ul li a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

/* Hover Effects for Buttons */
button {
    background-color: #2b2d42;
    color: white;
    font-size: 1.1em;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    background-color: #e2e2e2;
    color: #2b2d42;
    transform: scale(1.05);
}
