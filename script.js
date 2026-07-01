document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault ();
    const totalQuestions = 10;
    var score = 0;

    for (let i = 1; i <= totalQuestions; i++) {
        const selected = document.querySelector('input[name="q' + i + '"]:checked');
        if (selected) {
            score += Number(selected.value);
        }
    }

    const resultEl = document.getElementById('quiz-result');
    resultEl.textContent = `Você acertou ${score} de ${totalQuestions} perguntas.`;
});


document.getElementById('btn-topo').addEventListener('click', function() {
    window.scrollTo({ top:0, behavior: 'smooth' });
});
