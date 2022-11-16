// Zet variabelen //
const getBody = document.body;
const getColorSelector = document.querySelectorAll('.bg-color');
const toggleNav = document.querySelector('.hamburger');
const getSidebar = document.querySelector('.navi-sidebar');
let menuActive = false;

// In en uitklappen menu //
toggleNav.addEventListener('click', function(e){

        // Bepalen of menu al geactiveerd is of niet //
        if (menuActive === false){
            menuActive = true;
            
            // Als menu nog niet geopend is, dan openen en de hambuger draaien //
            getSidebar.classList.toggle('sidebar-in');
            toggleNav.style.transform = 'rotate(90deg)';

            // Functie voor elke 'knop' //
            Array.from(getColorSelector).forEach(function(set){
            set.addEventListener('click',function(e){

            // Bepalen huidige kleur en gekozen kleur //
            const getAppliedBg = document.body.classList[0];
            const getSelectedBg = set.id;

            // Veranderen van de achtergrond kleur //
            getBody.classList.replace(getAppliedBg, getSelectedBg);

            // Het 'vinken' van de radio button //
            set.querySelector('.btn').checked = true;

            // Het aanpassen van de text op de site //
            const getSelectedColorText = document.querySelector('.text').innerHTML;
            const getSelectedColorinText = set.querySelector('.btn').value;
            document.querySelector('.text').innerHTML = getSelectedColorText.replace(getSelectedColorText,'Jouw gekozen achtergrond kleur is '+ getSelectedColorinText);
    
            // Het sluiten van het menu, hambuger terugdraaien en status menu terugzetten //
            getSidebar.classList.remove('sidebar-in'); 
            toggleNav.style.transform = 'rotate(180deg)';
            menuActive = false;
            })

         })
        }

    else {
        // Indien het mennu al geactiveerd is en er opnieuw gedrukt wordt op de hamburger, het menu sluiten en hamburger terugdraaien //
        toggleNav.style.transform = 'rotate(180deg)';
        getSidebar.classList.remove('sidebar-in');
        menuActive = false;
    }
})