<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #0f172a;
      color: #e2e8f0;
    }

    header {
      background: #1e293b;
      padding: 15px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    nav a {
      color: #e2e8f0;
      margin-left: 15px;
      text-decoration: none;
    }

    nav a:hover {
      color: #38bdf8;
    }

    .hero {
      text-align: center;
      padding: 100px 20px;
    }

    .hero h1 {
      font-size: 3rem;
    }

    .hero button {
      padding: 10px 20px;
      background: #38bdf8;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }

    .section {
      padding: 50px 20px;
      text-align: center;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .card {
      background: #1e293b;
      padding: 20px;
      border-radius: 15px;
    }

    footer {
      background: #1e293b;
      text-align: center;
      padding: 20px;
      margin-top: 50px;
    }
  </style>
</head>
<body>

<header>
  <h2>My Website</h2>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<section class="hero" id="home">
  <h1>Welcome to My Website</h1>
  <p>I create digital products and study tools.</p>
  <button onclick="sayHello()">Click Me</button>
</section>

<section class="section" id="about">
  <h2>About Me</h2>
  <p>I am a student building online income through digital products.</p>
</section>

<section class="section" id="projects">
  <h2>Projects</h2>
  <div class="cards">
    <div class="card">Study Notes</div>
    <div class="card">Flashcards</div>
    <div class="card">Practice Exams</div>
  </div>
</section>

<section class="section" id="contact">
  <h2>Contact</h2>
  <p>Email: your@email.com</p>
</section>

<footer>
  <p>© 2026 My Website</p>
</footer>

<script>
  function sayHello() {
    alert("Welcome to my website!");
  }
</script>

</body>
</html>
