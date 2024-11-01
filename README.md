# Juego Tres en Línea
Un sencillo juego de tres en línea desarrollado en JavaScript, donde el jugador se enfrenta a la computadora. Cada partida se registra en el marcador, y el progreso se almacena utilizando el localStorage.

## Características
1. **Interfaz de usuario**: Tablero de 3x3 interactivo.
2. **Modo de juego**: El jugador y la computadora se alternan en el tablero.
3. **Sistema de puntuación**: Las victorias de cada jugador se almacenan en localStorage para que el marcador se mantenga entre sesiones.
4. **Marcador persistente**: Incluye botones para reiniciar el juego y restablecer el marcador.
5. **Resaltado de celdas ganadoras**: Las celdas que forman una combinación ganadora se destacan visualmente.
6. **Mensaje de estado**: Indica si la partida terminó en victoria, derrota o empate.

## Instrucciones
1. **Inicio del juego**: Haz clic en una celda para colocar tu marca.
2. **Turno de la computadora**: Automáticamente, la computadora hace su jugada después de cada turno del jugador.
3. **Reinicio de la partida**: Utiliza el botón de reinicio para jugar una nueva ronda sin afectar el marcador.
4. **Reiniciar marcador**: Para restablecer el marcador a cero, utiliza el botón de "Reset Score".

## Tecnologías Utilizadas
1. HTML y CSS para el diseño de la interfaz.
2. JavaScript para la lógica del juego y manejo de localStorage.
