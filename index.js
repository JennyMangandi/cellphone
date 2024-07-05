<script>
        var products = [
        { id: 1, name: "Motorola", price: 10000.00 },
        { id: 2, name: "Nokia", price: 10500.00 },
        { id: 3, name: "Infinix", price: 12000.00 },
        { id: 4, name: "Oppo", price: 13000.00 },
        { id: 5, name: "Samsung", price: 15000.00 },
        { id: 6, name: "IPhone", price: 20000.00 },
        { id: 7, name: "Vans Half Ca", price: 2850.00 },
        { id: 8, name: "Vans Daz Skate Half Cab Skate", price: 3040.00 },
        { id: 9, name: "Vans Suede Skate Shoes", price: 3395.00 }
    ];
    
    
    var qtyInputs = document.querySelectorAll('[id^="qty"]');
    var carts = document.getElementById("carts");
    var totalInput = document.getElementById("total");
    var cashInput = document.getElementById("cash");
    var changeInput = document.getElementById("change");
    
    
    qtyInputs.forEach(function(qtyInput) {
        qtyInput.addEventListener("input", addOrder);
    });
    
    cashInput.addEventListener("input", calculateChange);
    
    
    function addOrder() {
        carts.textContent = ""; // Clear previous cart content
    
        var total = 0;
    
        qtyInputs.forEach(function(qtyInput, index) {
            var qty = parseFloat(qtyInput.value);
            if (qty > 0) {
                var product = products[index];
                var order = qty + " pcs x " + product.name + " - Php " + (qty * product.price).toFixed(2) + "\n";
                carts.textContent += order;
                total += qty * product.price;
            }
        });
    
        totalInput.value = total.toFixed(2); // Update total
        calculateChange(); // Recalculate change
    }
    
    
    function calculateChange() {
        var total = parseFloat(totalInput.value);
        var cash = parseFloat(cashInput.value);
    
        if (!isNaN(total) && !isNaN(cash)) {
            var change = cash - total;
            changeInput.value = change.toFixed(2);
        } else {
            changeInput.value = "";
        }
    }
    </script>
