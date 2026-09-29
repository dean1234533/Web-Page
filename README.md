# Web development learning projects

**A collection of projects from my full-stack web development training, from Bootstrap landing pages and a jQuery game to a React and FastAPI app, plus an experiment with a self-hosted LLM chatbot console.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

---

## Projects

| Folder | What it is | Stack |
|---|---|---|
| [`11.3 TinDog Project/`](11.3%20TinDog%20Project/) | A responsive startup landing page with pricing and extra pages, built as a course project | HTML, CSS, Bootstrap |
| [`Simon Game Challenge Starting Files/`](Simon%20Game%20Challenge%20Starting%20Files/) | The classic **Simon memory game**, with colours, sounds, and increasing difficulty | JavaScript, jQuery |
| [`grocery-generator/`](grocery-generator/) | A **grocery list generator**. Pick meals and get a combined shopping list. | React frontend, Python FastAPI backend |
| `llm-server/`, `widgets/`, `docker-compose.yml` … | An experiment running **[OpenChat](https://github.com/openchatai/OpenChat)**, an open-source LLM chatbot console, with Docker | TypeScript, Docker |

> The OpenChat code in this repo is third-party open-source software from
> [openchatai/OpenChat](https://github.com/openchatai/OpenChat), used under its
> MIT licence (see [`LICENSE`](LICENSE)).

---

## Run locally

The static projects need no build step. Open their `index.html` files in a
browser.

**Grocery generator backend:**

```bash
cd grocery-generator/backend
pip install fastapi uvicorn
uvicorn main:app --reload
```

The React frontend source is in `grocery-generator/frontend/src` and can be
dropped into any Vite React app.

---

## Author

Built by **Dean Da Dev**, a UK full-stack developer building web apps, websites,
and AI tools.

🌐 [dean-da-dev.co.uk](https://www.dean-da-dev.co.uk/) · 💼 [More projects](https://www.dean-da-dev.co.uk/portfolio) · 🐙 [GitHub](https://github.com/dean1234533)
