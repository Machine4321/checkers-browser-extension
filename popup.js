(function () {
  var boardEl = document.getElementById('mini-board');
  var infoEl = document.getElementById('sq-info');
  if (!boardEl) return;

  var sqNum = 1;
  for (var r = 0; r < 8; r++) {
    for (var c = 0; c < 8; c++) {
      var cell = document.createElement('div');
      var isDark = (r + c) % 2 === 1;
      cell.className = 'sq ' + (isDark ? 'dark' : 'light');
      if (isDark) {
        (function (n, row, col) {
          cell.textContent = String(n);
          cell.addEventListener('click', function () {
            var prev = boardEl.querySelectorAll('.sq.dark.active');
            for (var i = 0; i < prev.length; i++) prev[i].classList.remove('active');
            cell.classList.add('active');
            var zone = row === 0 ? 'Black Back Rank (King Row)' :
                       row === 7 ? 'Red Back Rank (King Row)' :
                       (n === 14 || n === 15 || n === 18 || n === 19) ? 'Center Control Square' :
                       (col === 0 || col === 7) ? 'Side / Flank Square' : 'Standard Tactical Square';
            if (infoEl) {
              infoEl.textContent = 'PDN Square #' + n + ' (Row ' + (row + 1) + ', Col ' + (col + 1) + ') — ' + zone;
            }
          });
        })(sqNum, r, c);
        sqNum++;
      }
      boardEl.appendChild(cell);
    }
  }
})();
