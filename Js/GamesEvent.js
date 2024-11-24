document.querySelectorAll('.game').forEach(
    game=> game.addEventListener('click',
        function()
        {
            const link = this.getAttribute('data-link');
            window.location.href = link; 
        }))