/**
 * Sets up mouse drag detection for horizontal movement.
 * This Calls the dragCalback with the horizontal drag distance whenever the user drag.
 *
 * @param {HTMLElement} element - The DOM element to attach the event listener, should be the container of this entire scene.
 * @param {Function} dragCallback - Callback function called with the drag distance
 */
export function setupMouseDrag(element, dragCallback) {
    let isDragging = false;
    let startX = 0;
  
    function onMouseDown(event) {
      isDragging = true;
      startX = event.clientX;
    }
  
    function onMouseMove(event) {
      if (!isDragging) return;
  
      const dragDistance = event.clientX - startX;
      dragCallback(dragDistance);
      startX = event.clientX;
    }
  
    function onMouseUp() {
      isDragging = false;
    }
  
    element.addEventListener('mousedown', onMouseDown);
    element.addEventListener('mousemove', onMouseMove);
    element.addEventListener('mouseup', onMouseUp);
  
    // Clean up event listeners (optional, for scalability)
    return () => {
      element.removeEventListener('mousedown', onMouseDown);
      element.removeEventListener('mousemove', onMouseMove);
      element.removeEventListener('mouseup', onMouseUp);
    };
  }