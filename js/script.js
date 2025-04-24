const Preguntas = [
    {
      Pregunta: "¿Quién es el dios griego del trueno y el rayo?",
      Opciones: ["Poseidón", "Apolo", "Zeus", "Ares"],
      Respuesta: "Zeus"
    },
    {
      Pregunta: "¿Cuál es la diosa griega del amor y la belleza?",
      Opciones: ["Artemisa", "Atenea", "Hera", "Afrodita"],
      Respuesta: "Afrodita"
    },
    {
      Pregunta: "¿Quién es el dios del inframundo en la mitología griega?",
      Opciones: ["Hades", "Zeus", "Apolo", "Hermes"],
      Respuesta: "Hades"
    },
    {
      Pregunta: "¿Cuál es la diosa griega de la sabiduría y la guerra estratégica?",
      Opciones: ["Deméter", "Hera", "Atenea", "Ártemis"],
      Respuesta: "Atenea"
    },
    {
      Pregunta: "¿Qué dios griego es conocido por ser el mensajero de los dioses?",
      Opciones: ["Hermes", "Apolo", "Dionisio", "Ares"],
      Respuesta: "Hermes"
    },
    {
      Pregunta: "¿Quién es el dios del mar en la mitología griega?",
      Opciones: ["Zeus", "Hades", "Poseidón", "Apolo"],
      Respuesta: "Poseidón"
    },
    {
      Pregunta: "¿Qué diosa es la hermana gemela de Apolo?",
      Opciones: ["Atenea", "Ártemis", "Hera", "Deméter"],
      Respuesta: "Ártemis"
    },
    {
      Pregunta: "¿Qué dios griego está asociado con el vino y la fiesta?",
      Opciones: ["Hermes", "Dionisio", "Ares", "Hefesto"],
      Respuesta: "Dionisio"
    },
    {
      Pregunta: "¿Quién es el dios griego del fuego y la forja?",
      Opciones: ["Apolo", "Hefesto", "Ares", "Poseidón"],
      Respuesta: "Hefesto"
    },
    {
      Pregunta: "¿Quién es la reina del Olimpo y esposa de Zeus?",
      Opciones: ["Afrodita", "Hera", "Deméter", "Atenea"],
      Respuesta: "Hera"
    }
  ];
  
  const CuestionarioCont = document.getElementById("Cuestionario");
  
  Preguntas.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "Pregunta";
    div.innerHTML = `
      <p><strong>${index + 1}. ${q.Pregunta}</strong></p>
      ${q.Opciones.map(option => `
        <label>
          <input type="radio" name="Pregunta${index}" value="${option}">
          ${option}
        </label><br>
      `).join("")}
      <div id="resultado${index}" class="resultado"></div>
    `;
    CuestionarioCont.appendChild(div);
  });
  
  function submitQuiz() {
    let score = 0;
  
    Preguntas.forEach((q, index) => {
      const selected = document.querySelector(`input[name="Pregunta${index}"]:checked`);
      const resultDiv = document.getElementById(`resultado${index}`);
      if (selected) {
        if (selected.value === q.Respuesta) {
          resultDiv.textContent = "Correcta";
          resultDiv.style.color = "green";
          score++;
        } else {
          resultDiv.textContent = `Incorrecta (Respuesta correcta: ${q.Respuesta})`;
          resultDiv.style.color = "red";
        }
      } else {
        resultDiv.textContent = "No respondida";
        resultDiv.style.color = "orange";
      }
    });
  
    document.getElementById("Resultado").innerHTML = `<h2>Tu puntaje: ${score} / ${Preguntas.length}</h2>`;
  }
  