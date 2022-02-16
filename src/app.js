/**
* Возвращает строковое состояние уровня жизни
* @param {Object} param0
* @returns
*/
export default function healthLevel({ health }) {
  if (health > 50) {
    return 'healthy';
  } if (health >= 15 && health <= 50) {
    return 'wounded';
  }
  return 'critical';
}
