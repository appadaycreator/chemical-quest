// ドラッグ&ドロップ雛形
let draggedElement = null;

document.addEventListener('dragstart', function(e) {
  if (e.target.classList.contains('element-card')) {
    draggedElement = e.target;
  }
});
document.addEventListener('dragend', function() {
  draggedElement = null;
});

document.addEventListener('dragover', function(e) {
  if (e.target.classList.contains('molecule-display')) {
    e.preventDefault();
  }
});
document.addEventListener('drop', function(e) {
  if (e.target.classList.contains('molecule-display') && draggedElement) {
    e.preventDefault();
    // ここで化学式エリアに元素を追加
  }
});

// 化学式バリデーション雛形
function validateMolecule(molecule) {
  // molecule: 例 'H2O' など
  // バリデーションロジックをここに実装
  return true;
} 