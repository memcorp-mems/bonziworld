let popup;

function showGames() {
  popup = document.createElement('div');
  popup.style.position = 'absolute';
  popup.style.backgroundColor = 'rgba(0, 0, 155, 1)';

  popup.style.top = '100px';
  popup.style.left = '100px';
  popup.style.width = 'calc(100% - 200px)';
  popup.style.height = 'calc(100% - 200px)';
  popup.style.bottom = 0;
  popup.style.right = 0;

  const iframe = document.createElement('iframe');
  iframe.style.position = 'absolute';
  iframe.style.backgroundColor = '#FFFFFF';
  iframe.style.border = 'none';
  iframe.style.top = '22px';
  iframe.style.left = '2px';
  iframe.style.width = 'calc(100% - 4px)';
  iframe.style.height = 'calc(100% - 24px)';

  iframe.setAttribute(
    'src',
    'gam.html'
  );

  const closeButton = document.createElement('button');
  closeButton.textContent = 'close';
  closeButton.position = 'absolute';
  closeButton.style.top = '100px';
  closeButton.style.right = '100px';
  closeButton.onclick = () => hideGames();

  document.body.style.overflow = 'hidden';

  popup.appendChild(iframe);
  popup.appendChild(closeButton);
  document.body.appendChild(popup);
}

function hideGames() {
  document.body.style.overflow = 'auto';
  document.body.removeChild(popup);
}
