function showDetails(carName, details, imageUrl) {
            document.getElementById('car-name').innerText = carName;
            document.getElementById('car-details').innerText = details;
            document.getElementById('car-image').src = imageUrl;
            document.getElementById('modal').style.display = 'block';
        }

        function hideDetails() {
            document.getElementById('modal').style.display = 'none';
        }

        window.onclick = function(event) {
            const modal = document.getElementById('modal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }
		