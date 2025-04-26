document.querySelectorAll('li').forEach((item) => {
	const text = item.textContent.toLowerCase().replace(/\s/g, '');
	const reversed = text.split('').reverse().join('');
  
	if (text === reversed) {
	  item.classList.add('palindrom');
	}
  });

// textPozpatku('Ahoj světe') // 'etěvs johA'
// textPozpatku('Kajak') // 'kajaK'
