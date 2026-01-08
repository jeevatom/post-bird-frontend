
         // Apply saved theme
         if (localStorage.getItem("theme") === "dark") {
            $("body").addClass("dark-mode");
         }

         // Since navbar loads dynamically, wait for it
         $(document).on("click", "#themeToggle", function () {
            $("body").toggleClass("dark-mode");

            if ($("body").hasClass("dark-mode")) {
               $(this).text("☀️");
               localStorage.setItem("theme", "dark");
            } else {
               $(this).text("🌙");
               localStorage.setItem("theme", "light");
            }
         });

         // After navbar is loaded, update button icon
         $("#navBar").load("/components/navbar.html", function () {
            if (localStorage.getItem("theme") === "dark") {
               $("#themeToggle").text("☀️");
            } else {
               $("#themeToggle").text("🌙");
            }
         });