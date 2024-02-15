let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => 
{
    location.reload();
})

/*Inputs*/
document.addEventListener("DOMContentLoaded", function() 
{
    const inputElements = document.querySelectorAll(".formcontato__input");

    inputElements.forEach(function(inputElement) 
    {
        // Guardar el valor original del placeholder en el atributo "data-placeholder"
        inputElement.setAttribute("data-placeholder", inputElement.getAttribute("placeholder"));

        inputElement.addEventListener("focus", function() 
        {
            if (this.hasAttribute("placeholder")) 
                {
                    this.removeAttribute("placeholder");
                }
        });

        inputElement.addEventListener("blur", function() 
        {
            if (!this.value && !this.hasAttribute("placeholder")) 
            {
                // Restaurar el valor original del placeholder
                this.setAttribute("placeholder", this.getAttribute("data-placeholder"));
            }
        });
    });
});







