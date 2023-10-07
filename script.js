function calculateTotal() {
    const roomRate = document.getElementById('room-type').value === 'Delux Room' ? 2500 : 4000;
    const totalDays = parseInt(document.getElementById('total-days').value);
    const amenitiesCost = document.getElementById('amenities').selectedOptions.length * (1000 + 300);

    const totalRoomCost = roomRate * totalDays;
    const totalAmenitiesCost = amenitiesCost * totalDays;
    const totalCost = totalRoomCost + totalAmenitiesCost;
    const advanceAmount = parseInt(document.getElementById('advance-amount').value);
    const balance = totalCost - advanceAmount;

    document.getElementById('total-room-cost').value = totalRoomCost;
    document.getElementById('total-amenities-cost').value = totalAmenitiesCost;
    document.getElementById('total-cost').value = totalCost;
    document.getElementById('balance').value = balance;
}

const submit=document.querySelector("#submit")

submit.addEventListener('click',()=>
{
    alert("Your Form has been submited")
})
