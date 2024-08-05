


function createModal(trigger,modal){

            console.log("bora modal")
            trigger.onclick = function() {
                modal.style.display = "block";
              }

              window.onclick = function(event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
              }
}

// export default createModal